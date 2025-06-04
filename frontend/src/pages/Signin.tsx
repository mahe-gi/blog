import { Link } from "react-router";
import { Quote } from "../components/Quote";
import { useState } from "react";
import { SigninInput } from "@mahe-npm/common";
import { useNavigate } from "react-router";
import axios from "axios";
import { Button } from "../components/Button";
import { LabeledInput } from "../components/LabeledInput";
import { Bounce, toast, ToastContainer } from "react-toastify";
function Signin() {
  const [signinInputData, setsigninInputData] = useState<SigninInput>({
    username: "admin",
    password: "admin",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  async function handlePostRequest() {
    try {
      setLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/user/signin`,
        signinInputData
      );
      if (response.status === 200) {
        //toster notification

        toast.success("Welcome back !", {
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
        const token = response.data.token;
        localStorage.setItem("token", "Bearer " + token);

        // artificial delay for toster notification
        setTimeout(() => {
          navigate("/blogs");
        }, 500);
      }
    } catch (error) {
      setLoading(false);
      toast.error("Invalid credentials", {
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
      console.log(error);
    }
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      <div className="">
        <div className=" flex  items-center justify-center h-screen">
          <div className=" w-96 mx-auto">
            <h2 className=" text-3xl font-bold">Welcome Back !</h2>
            <form className=" mt-8">
              <div className=" space-y-4">
                <LabeledInput 
                  type="email"
                  label="email"
                  placeholder="Name"
                  onChange={(e) => {
                    setsigninInputData({
                      ...signinInputData,
                      username: e.target.value,
                    });
                  }}
                />
                <LabeledInput
                  type="password"
                  label="password"
                  placeholder="12345"
                  onChange={(e) => {
                    setsigninInputData({
                      ...signinInputData,
                      password: e.target.value,
                    });
                  }}
                />
                <div>
                  <Button
                    Loading={loading}
                    sendRequest={handlePostRequest}
                    type="signin"
                  />
                  <p className=" text-gray-400 mt-8 text-center ">
                    Dont have an account ?
                    <Link to="/signup" className=" underline text-gray-500">
                      Sign up
                    </Link>
                  </p>{" "}
                </div>
                {/* toaster container */}
                <ToastContainer
                  position="bottom-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick={false}
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="colored"
                  transition={Bounce}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className=" hidden lg:block">
        <Quote type="signin" />
      </div>
    </div>
  );
}

export default Signin;
