import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Bounce, toast, ToastContainer } from "react-toastify";

function Landing() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please Login !", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      setTimeout(() => {
        navigate("/signup");
      }, 2500);
      return;
    }

    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/user/me`,
        {},
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then(() => {
        toast.success("Welcome back !", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        setTimeout(() => {
          navigate("/blogs");
        }, 2000);
      })
      .catch(() => {
        toast.error("Something went wrong ! login ", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
        setTimeout(() => {
          navigate("/signup");
        }, 2000);
      });
  }, []);

  return (
    <div className=" flex items-center justify-center h-screen w-screen">
      <div>
        <div>
          Redirecting ...{" "}
          <span className=" h-4 w-4 rounded-full border-b-2 border-blue-700 ">
            {" "}
          </span>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Landing;
