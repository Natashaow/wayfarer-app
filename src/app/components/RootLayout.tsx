import { Outlet } from "react-router";
import { Suspense } from "react";
import { Toaster } from "./ui/sonner";
import { AuthProvider, useAuth } from "./AuthContext";
import { FavoritesProvider } from "./FavoritesContext";
import { RecentlyViewedProvider } from "./RecentlyViewedContext";
import { PersonalizationProvider } from "./PersonalizationContext";
import { PersonalizationOnboarding } from "./PersonalizationOnboarding";
import { ScrollToTop } from "./ScrollToTop";
import { ErrorBoundary } from "./ErrorBoundary";

/** Inner wrapper so PersonalizationProvider can read from AuthContext */
function PersonalizationWrapper({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  return (
    <PersonalizationProvider user={user}>
      {children}
      <PersonalizationOnboarding />
    </PersonalizationProvider>
  );
}

export default function RootLayout() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <FavoritesProvider>
          <RecentlyViewedProvider>
            <PersonalizationWrapper>
              <ScrollToTop />
              <Suspense fallback={<div style={{ minHeight: "100vh", background: "#faf8f3" }} />}>
                <Outlet />
              </Suspense>
              <Toaster position="bottom-center" />
            </PersonalizationWrapper>
          </RecentlyViewedProvider>
        </FavoritesProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}
