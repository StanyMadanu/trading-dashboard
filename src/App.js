import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import OAuthCallback from "./components/OAuthCallback";
import ProtectedRoute from "./routes/ProtectedRoute";
import LandingHome from "./components/landingPage/LandingHome";

function App() {
  const myToy = "Cool Toy";

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
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
      ],
    },

    {
      path: "/landing-page",
      element: <LandingHome />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
