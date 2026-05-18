import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { WayfarerNavbar } from "../components/WayfarerNavbar";
import { motion, AnimatePresence } from "motion/react";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { X, Mail, Lock, ArrowRight, AlertCircle, Eye, EyeOff } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useAuth } from "../components/AuthContext";

import bgImage from "figma:asset/f5674fb8c81228aad16688b6e79873cbfc000594.png";

export default function LoginPage() {
  const navigate = useNavigate();
  const { login, isAuthenticated, rememberMe, setRememberMe } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Please enter a valid email";
    if (!password.trim()) errs.password = "Password is required";
    setFieldErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleLogin = async () => {
    setError("");
    if (!validate()) return;

    setIsLoading(true);
    // Simulate network latency for realism
    await new Promise((r) => setTimeout(r, 800));
    setIsLoading(false);

    const result = login(email, password);
    if (result.success) {
      toast.success("Welcome back!", { duration: 2000 });
      navigate("/");
    } else {
      setError(result.error || "Login failed");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleLogin();
  };

  const labelStyle = (key: string): React.CSSProperties => ({
    fontSize: "var(--text-body-sm)",
    color: fieldErrors[key] ? "var(--destructive)" : "var(--card-foreground)",
    fontWeight: "var(--font-weight-medium)",
    transition: "color 0.2s",
  });

  const inputBorder = (key: string): React.CSSProperties => ({
    borderWidth: "1.5px",
    ...(fieldErrors[key] ? { borderColor: "var(--destructive)" } : {}),
    transition: "border-color 0.2s",
  });

  return (
    <div
      className="flex flex-col w-full min-h-screen overflow-x-hidden bg-surface font-body"
    >
      <WayfarerNavbar />

      <main className="relative flex-1 flex items-start justify-center">
        {/* Background image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src={bgImage}
            alt="Mountain landscape background"
            className="absolute inset-0 object-cover size-full"
          />
          <div className="absolute inset-0 bg-foreground/20" />
        </div>

        {/* Login card */}
        <motion.div
          className="relative z-10 w-full max-w-[480px] bg-surface rounded-2xl overflow-hidden"
          style={{ boxShadow: "var(--shadow-card-elevated)", margin: "clamp(24px, 5vw, 64px) 16px" }}
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="flex flex-col items-center px-6 sm:px-10 pt-6 pb-8 gap-(--space-stack-md)"
          >
            {/* Close button */}
            <div className="flex justify-end w-full">
              <button
                onClick={() => navigate("/")}
                className="text-foreground hover:text-primary transition-colors rounded-full p-1 outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Close"
              >
                <X className="size-6" strokeWidth={1.8} />
              </button>
            </div>

            {/* Header */}
            <motion.div
              className="flex flex-col items-center gap-3 text-center"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <h1
                className="font-heading text-foreground font-bold text-title-1 leading-title-1"
              >
                Welcome Back!
              </h1>
              <p
                className="font-body text-foreground/80 text-body-sm leading-body-sm"
              >
                Sign in to your Wayfarer account to continue your journey.
              </p>
            </motion.div>

            {/* Error banner */}
            <AnimatePresence>
              {error && (
                <motion.div
                  className="w-full flex items-center gap-2 px-4 py-3 rounded-lg"
                  style={{ backgroundColor: "var(--destructive-light, #fef2f2)", border: "1px solid var(--destructive)" }}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  <AlertCircle className="size-4 shrink-0" style={{ color: "var(--destructive)" }} strokeWidth={2} />
                  <span
                    className="font-body text-body-sm font-medium"
                    style={{ color: "var(--destructive)" }}
                  >
                    {error}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Form */}
            <motion.div
              className="w-full flex flex-col gap-6"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.15 }}
              onKeyDown={handleKeyDown}
            >
              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <Label className="font-body" style={labelStyle("email")}>Email address</Label>
                <div className="relative">
                  <div
                    className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none transition-colors"
                    style={{ color: fieldErrors.email ? "var(--destructive)" : "var(--muted-foreground)" }}
                  >
                    <Mail className="size-4" strokeWidth={1.8} />
                  </div>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setFieldErrors((p) => ({ ...p, email: "" })); setError(""); }}
                    className="h-[40px] pl-10 border-border bg-surface text-foreground placeholder:text-muted-foreground"
                    style={inputBorder("email")}
                    autoComplete="email"
                  />
                </div>
                <AnimatePresence>
                  {fieldErrors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.18 }}
                      className="font-body text-caption" style={{ color: "var(--destructive)" }}
                    >
                      {fieldErrors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Password */}
              <div className="flex flex-col gap-1.5">
                <Label className="font-body" style={labelStyle("password")}>Password</Label>
                <div className="relative">
                  <div
                    className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none transition-colors"
                    style={{ color: fieldErrors.password ? "var(--destructive)" : "var(--muted-foreground)" }}
                  >
                    <Lock className="size-4" strokeWidth={1.8} />
                  </div>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); setFieldErrors((p) => ({ ...p, password: "" })); setError(""); }}
                    className="h-[40px] pl-10 pr-10 border-border bg-surface text-foreground placeholder:text-muted-foreground"
                    style={inputBorder("password")}
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-card-foreground transition-colors outline-none"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="size-4" strokeWidth={1.8} /> : <Eye className="size-4" strokeWidth={1.8} />}
                  </button>
                </div>
                <AnimatePresence>
                  {fieldErrors.password && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.18 }}
                      className="font-body text-caption" style={{ color: "var(--destructive)" }}
                    >
                      {fieldErrors.password}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Forgot password link */}
              <div className="flex items-center justify-between">
                {/* Remember me */}
                <label className="flex items-center gap-2 cursor-pointer select-none group">
                  <button
                    type="button"
                    role="checkbox"
                    aria-checked={rememberMe}
                    onClick={() => setRememberMe(!rememberMe)}
                    className="size-4 rounded border-[1.5px] flex items-center justify-center shrink-0 transition-all outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    style={{
                      borderColor: rememberMe ? "var(--accent)" : "var(--border)",
                      backgroundColor: rememberMe ? "var(--accent)" : "var(--background)",
                    }}
                  >
                    {rememberMe && (
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="var(--accent-foreground)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </button>
                  <span
                    className="font-body text-caption font-medium"
                    style={{
                      color: "var(--card-foreground)",
                    }}
                  >
                    Remember me
                  </span>
                </label>

                <button
                  className="font-body outline-none cursor-pointer hover:underline text-caption font-medium"
                  style={{ color: "var(--accent)" }}
                  onClick={() => toast("Password reset is not available in this prototype.", { duration: 2500 })}
                >
                  Forgot password?
                </button>
              </div>
            </motion.div>

            {/* Login button */}
            <motion.div
              className="w-full"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={handleLogin}
                disabled={isLoading}
                className="font-heading w-full h-[48px] rounded-full gap-2 bg-gradient-to-b from-primary-hover to-primary text-primary-foreground border-[0.5px] border-primary-dark shadow-[var(--shadow-primary-cta)] hover:opacity-90 transition-opacity disabled:opacity-60 font-bold"
              >
                {isLoading ? (
                  <motion.div
                    className="size-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  />
                ) : (
                  <>
                    Sign in
                    <ArrowRight className="size-4" />
                  </>
                )}
              </Button>
            </motion.div>

            {/* Divider */}
            <div className="w-full flex items-center gap-3">
              <div className="flex-1 h-[1px] bg-border" />
              <span
                className="font-body text-muted-foreground shrink-0 text-caption font-medium"
              >
                Don't have an account?
              </span>
              <div className="flex-1 h-[1px] bg-border" />
            </div>

            {/* Sign up link */}
            <motion.div className="w-full" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="outline"
                onClick={() => navigate("/signup")}
                className="font-heading w-full h-[48px] rounded-full gap-2 border-border text-card-foreground hover:bg-muted transition-colors font-bold"
              >
                Create an account
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
