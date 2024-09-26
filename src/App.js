import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import OAuthCallback from "./components/OAuthCallback";
import ProtectedRoute from "./routes/ProtectedRoute";
import Landing from "./components/landingPage/Landing";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/user/oauth_callback",
    element: <OAuthCallback />,
  },
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
    ],
  },

  {
    path: "/landing",
    element: (
      <ProtectedRoute>
        <Landing />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
