import { lazy } from "react";
import { createMemoryRouter } from "react-router";
import RootLayout from "./components/RootLayout";

const HomePage = lazy(() => import("./pages/HomePage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const ExploreAllPage = lazy(() => import("./pages/ExploreAllPage"));
const ExperienceDetailPage = lazy(() => import("./pages/ExperienceDetailPage"));
const CountryPage = lazy(() => import("./pages/CountryPage"));
const RecentlyViewedPage = lazy(() => import("./pages/RecentlyViewedPage"));
const PlanTripPage = lazy(() => import("./pages/PlanTripPage"));
const ItineraryPage = lazy(() => import("./pages/ItineraryPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));

function RouteError() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif", minHeight: "100vh", background: "#faf8f3" }}>
      <h2 style={{ color: "#d95d39" }}>Page not found</h2>
      <a href="#/">Go home</a>
    </div>
  );
}

export const router = createMemoryRouter(
  [
    {
      path: "/",
      Component: RootLayout,
      errorElement: <RouteError />,
      children: [
        { index: true, Component: HomePage },
        { path: "signup", Component: SignUpPage },
        { path: "login", Component: LoginPage },
        { path: "favorites", Component: FavoritesPage },
        { path: "profile", Component: ProfilePage },
        { path: "explore", Component: ExploreAllPage },
        { path: "experience/:slug", Component: ExperienceDetailPage },
        { path: "country/:countrySlug", Component: CountryPage },
        { path: "recently-viewed", Component: RecentlyViewedPage },
        { path: "plan-trip", Component: PlanTripPage },
        { path: "itinerary", Component: ItineraryPage },
        { path: "about", Component: AboutPage },
        { path: "*", Component: HomePage },
      ],
    },
  ],
  { initialEntries: ["/"], initialIndex: 0 }
);
