import { Button } from "../components/Button";
import { Quote } from "../components/Quote";
import { SignupInput } from "@mahe-npm/common";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router";
import { LabeledInput } from "../components/LabeledInput";
import { useNavigate } from "react-router";
import { BACKEND_URL } from "../config";
import { Bounce, toast, ToastContainer } from "react-toastify";
function Signup() {
  const [postSignupData, setPostSignupData] = useState<SignupInput>({
    username: "",
    password: "",
    name: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handlePostSignup() {
    try {
      setLoading(true);
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/signup`,
        postSignupData
      );
      const token = await response.data.token;

      if (token) {
        toast.success("Success !", {
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
      }
      setTimeout(() => {
        navigate(`/blogs`);
      }, 500);

      if (token) {
        localStorage.setItem("token", "Bearer " + token);
      }
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong !", {
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
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      <div className="">
        <div className=" flex  items-center justify-center h-screen">
          <div className=" w-96 mx-auto">
            <h2 className=" text-3xl font-bold">Create An Account !</h2>
            <form className=" mt-8">
              <div className=" space-y-4">
                <LabeledInput
                  type="text"
                  label="Name"
                  placeholder="Name"
                  onChange={(e) => {
                    setPostSignupData({
                      ...postSignupData,
                      name: e.target.value,
                    });
                  }}
                />
                <LabeledInput
                  type="email"
                  label="Email"
                  placeholder="abcd@gmail.com"
                  onChange={(e) => {
                    setPostSignupData({
                      ...postSignupData,
                      username: e.target.value,
                    });
                  }}
                />
                <LabeledInput
                  type="password"
                  label="password"
                  placeholder="12345"
                  onChange={(e) => {
                    setPostSignupData({
                      ...postSignupData,
                      password: e.target.value,
                    });
                  }}
                />
                <Button
                  Loading={loading}
                  sendRequest={handlePostSignup}
                  type="signup"
                />
                <p className=" text-gray-400 mt-8 text-center">
                  Already have an account ?
                  <Link to="/signin" className=" underline text-gray-500 hover:text-green-900">
                    Sign in
                  </Link>
                </p>
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
                  theme="light"
                  transition={Bounce}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className=" hidden lg:block">
        <Quote type="signup" />
      </div>
    </div>
  );
}

export default Signup;
