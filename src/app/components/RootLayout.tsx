import { Outlet } from "react-router";
import { Suspense } from "react";
import { Toaster } from "./ui/sonner";
import { AuthProvider } from "./AuthContext";
import { FavoritesProvider } from "./FavoritesContext";
import { RecentlyViewedProvider } from "./RecentlyViewedContext";
import { ScrollToTop } from "./ScrollToTop";
import { ErrorBoundary } from "./ErrorBoundary";

export default function RootLayout() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <FavoritesProvider>
          <RecentlyViewedProvider>
            <ScrollToTop />
            <Suspense fallback={<div style={{ minHeight: "100vh", background: "#faf8f3" }} />}>
              <Outlet />
            </Suspense>
            <Toaster position="bottom-center" />
          </RecentlyViewedProvider>
        </FavoritesProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}
