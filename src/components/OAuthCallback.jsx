import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const OAuthCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get("token");

    if (token) {
      localStorage.setItem("authToken", token);

      navigate("/dashboard");
    } else {
      console.log("login failed: no token provided");
    }
  }, [searchParams, navigate]);

  return (
    <div>
      <p>Logging you in...</p>
    </div>
  );
};

export default OAuthCallback;
