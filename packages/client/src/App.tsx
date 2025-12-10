import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import HistoryPage from "./pages/HistoryPage";
import ContactPage from "./pages/ContactPage";
import LeadershipPage from "./pages/LeadershipPage";
import CommitteesPage from "./pages/CommitteesPage";
import PrincessGauravPage from "./pages/leadership/PrincessGauravPage";
import HHMessagePage from "./pages/leadership/HHMessagePage";
import RajmataSahibPage from "./pages/leadership/RajmataSahibPage";
import HHMaharajaLakshrajPrakashPage from "./pages/leadership/HHMaharajaLakshrajPrakashPage";
import SocialMediaPage from "./pages/SocialMediaPage";
import AcademicsPage from "./pages/AcademicsPage";
import AdminLayout from "./components/admin/AdminLayout";
import LoginPage from "./pages/admin/LoginPage";
import DashboardPage from "./pages/admin/DashboardPage";
import ProtectedRoute from "./components/admin/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "history",
        element: <HistoryPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "leadership",
        element: <LeadershipPage />,
      },
      {
        path: "leadership/princess-gaurav",
        element: <PrincessGauravPage />,
      },
      {
        path: "leadership/hh-message",
        element: <HHMessagePage />,
      },
      {
        path: "leadership/rajmata-sahib",
        element: <RajmataSahibPage />,
      },
      {
        path: "leadership/maharaja-lakshraj-prakash",
        element: <HHMaharajaLakshrajPrakashPage />,
      },
      {
        path: "social-media",
        element: <SocialMediaPage />,
      },
      {
        path: "committees",
        element: <CommitteesPage />,
      },
      {
        path: "academics",
        element: <AcademicsPage />,
      },
      {
        path: "student-life",
        element: <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold">Student Life - Coming Soon</h1></div>,
      },
    ],
  },
  {
    path: "/admin/login",
    element: <LoginPage />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
