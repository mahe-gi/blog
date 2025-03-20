import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { BACKEND_URL } from "../config";
import { Bounce, toast, ToastContainer } from "react-toastify";

function Landing() {
  const navigate = useNavigate();
  console.log(BACKEND_URL)

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token)
    if (!token) {
      toast.error('please Login !', {
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
      setTimeout(()=>{
        navigate("/signin");
      }, 2500);
      return;
    }

    
    axios.post(
      `${BACKEND_URL}/api/v1/user/me`,
      {},
      {
        headers: {
          Authorization: token,
        },
      }
    )
      .then(() =>{
        toast.success('Welcome back !', {
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
                setTimeout(()=>{
                  navigate("/blogs")
                },2000)

      }
       
      
      )
      .catch(() => {
        toast.error('Something went wrong ! login ', {
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
        setTimeout(()=>{
          navigate("/signup");
        }, 2000);
      });
  }, []);



  return (
    <div className=" flex items-center justify-center h-screen w-screen">
      <div>
        <div>Redirecting ...</div>
        <ToastContainer/>
      </div>
    </div>
  );
}


export default Landing;

