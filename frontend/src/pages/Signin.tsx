import { Link } from "react-router";
import { Quote } from "../components/Quote";
import { useState } from "react";
import { SigninInput } from "@mahe-npm/common";
import { useNavigate } from "react-router";
import axios from "axios";
import { Button } from "../components/Button";
import { LabeledInput } from "../components/LabeledInput";
import { BACKEND_URL } from "../config";

function Signin() {
  const [signinInputData, setsigninInputData] = useState<SigninInput>({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  async function handlePostRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/signin`,
        signinInputData
      );
      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem("token", "Bearer " + token);
        navigate("/blogs");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      <div className="">
        <div className=" flex  items-center justify-center h-screen">
          <div className=" w-96 mx-auto">
            <h2 className=" text-3xl font-bold">Welcome Back !</h2>
            <p className=" text-gray-400 mt-4">
              Dont have an account ?
              <Link to="/signup" className=" underline text-gray-500">
                Sign up
              </Link>
            </p>{" "}
            <p></p>
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
                <Button sendRequest={handlePostRequest} type="signin" />
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
