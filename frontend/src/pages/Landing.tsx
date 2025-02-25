import { useEffect } from "react";
import { useNavigate } from "react-router";

function Landing() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/signup");
  });
  return (
    <div className=" flex items-center justify-center h-screen w-screen">
      <div>
        <div>Redirecting ... to signup /login /dashboard</div>
      </div>
    </div>
  );
}

export default Landing;
