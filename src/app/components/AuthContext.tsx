import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";

export interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  mobile: string;
  countryCode: string;
  residence: string;
  dob: string; // "DD/MM/YYYY"
  // Travel preferences
  experiences: string[];
  adventureLevel: number;
  cultureLevel: number;
  // Other preferences
  companions: string[];
  travelModes: string[];
  healthCondition: string;
  keepUpdated: boolean;
}

const STORAGE_KEY_USER = "wayfarer_user";
const STORAGE_KEY_ACCOUNTS = "wayfarer_accounts";
const STORAGE_KEY_REMEMBER = "wayfarer_remember";

/** Read the active user session — check localStorage first (persistent), then sessionStorage (session-only) */
function loadUser(): UserProfile | null {
  try {
    // Persistent session (remember me)
    const persistent = localStorage.getItem(STORAGE_KEY_USER);
    if (persistent) return JSON.parse(persistent);
    // Session-only
    const session = sessionStorage.getItem(STORAGE_KEY_USER);
    if (session) return JSON.parse(session);
    return null;
  } catch {
    return null;
  }
}

/** Save the active session — storage destination depends on rememberMe */
function saveUser(profile: UserProfile | null, rememberMe: boolean) {
  if (profile) {
    if (rememberMe) {
      localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(profile));
      localStorage.setItem(STORAGE_KEY_REMEMBER, "true");
      sessionStorage.removeItem(STORAGE_KEY_USER);
    } else {
      sessionStorage.setItem(STORAGE_KEY_USER, JSON.stringify(profile));
      localStorage.removeItem(STORAGE_KEY_USER);
      localStorage.removeItem(STORAGE_KEY_REMEMBER);
    }
  } else {
    localStorage.removeItem(STORAGE_KEY_USER);
    localStorage.removeItem(STORAGE_KEY_REMEMBER);
    sessionStorage.removeItem(STORAGE_KEY_USER);
  }
}

/** Check if user chose "remember me" */
function loadRememberMe(): boolean {
  return localStorage.getItem(STORAGE_KEY_REMEMBER) === "true";
}

/** Load all registered accounts (always persistent) */
function loadAccounts(): UserProfile[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_ACCOUNTS);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/** Save an account to the registry */
function saveAccount(profile: UserProfile) {
  const accounts = loadAccounts();
  const idx = accounts.findIndex((a) => a.email.toLowerCase() === profile.email.toLowerCase());
  if (idx >= 0) {
    accounts[idx] = profile;
  } else {
    accounts.push(profile);
  }
  localStorage.setItem(STORAGE_KEY_ACCOUNTS, JSON.stringify(accounts));
}

function removeAccount(email: string) {
  const accounts = loadAccounts().filter((a) => a.email.toLowerCase() !== email.toLowerCase());
  localStorage.setItem(STORAGE_KEY_ACCOUNTS, JSON.stringify(accounts));
}

interface AuthContextValue {
  user: UserProfile | null;
  isAuthenticated: boolean;
  rememberMe: boolean;
  setRememberMe: (v: boolean) => void;
  signUp: (profile: UserProfile) => void;
  login: (email: string, password: string) => { success: boolean; error?: string };
  signOut: () => void;
  updateProfile: (updates: Partial<UserProfile>) => void;
  changePassword: (currentPassword: string, newPassword: string) => { success: boolean; error?: string };
  deleteAccount: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(() => loadUser());
  const [rememberMe, setRememberMe] = useState(() => loadRememberMe());

  // Sync to storage whenever user or rememberMe changes
  useEffect(() => {
    saveUser(user, rememberMe);
  }, [user, rememberMe]);

  const signUp = useCallback((profile: UserProfile) => {
    setUser(profile);
    saveAccount(profile);
  }, []);

  const login = useCallback((email: string, password: string): { success: boolean; error?: string } => {
    const accounts = loadAccounts();
    const account = accounts.find((a) => a.email.toLowerCase() === email.toLowerCase());
    if (!account) {
      return { success: false, error: "No account found with this email address." };
    }
    if (account.password !== password) {
      return { success: false, error: "Incorrect password. Please try again." };
    }
    setUser(account);
    return { success: true };
  }, []);

  const signOut = useCallback(() => {
    setUser(null);
  }, []);

  const updateProfile = useCallback((updates: Partial<UserProfile>) => {
    setUser((prev) => {
      if (!prev) return prev;
      const updated = { ...prev, ...updates };
      saveAccount(updated);
      return updated;
    });
  }, []);

  const changePassword = useCallback((currentPassword: string, newPassword: string): { success: boolean; error?: string } => {
    let result: { success: boolean; error?: string } = { success: false };
    setUser((prev) => {
      if (!prev) {
        result = { success: false, error: "Not authenticated." };
        return prev;
      }
      if (prev.password !== currentPassword) {
        result = { success: false, error: "Current password is incorrect." };
        return prev;
      }
      if (newPassword.length < 6) {
        result = { success: false, error: "New password must be at least 6 characters." };
        return prev;
      }
      const updated = { ...prev, password: newPassword };
      saveAccount(updated);
      result = { success: true };
      return updated;
    });
    return result;
  }, []);

  const deleteAccount = useCallback(() => {
    setUser((prev) => {
      if (prev) removeAccount(prev.email);
      return null;
    });
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      rememberMe,
      setRememberMe,
      signUp,
      login,
      signOut,
      updateProfile,
      changePassword,
      deleteAccount,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
