import { Navigate } from "react-router-dom";
import getCurrentUser from "../services/mainService";

const ProtectedRoute = ({ children }) => {
  console.log(getCurrentUser, "getCurrentUser");

  const token = getCurrentUser();
  console.log(token, "tokennnn");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
