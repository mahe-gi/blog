import { Button } from "../components/Button";
import { Quote } from "../components/Quote";
import { SignupInput } from "@mahe-npm/common";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router";
import { LabeledInput } from "../components/LabeledInput";
import { useNavigate } from "react-router";
import { BACKEND_URL } from "../config";

function Signup() {
  const [postSignupData, setPostSignupData] = useState<SignupInput>({
    username: "",
    password: "",
    name: "",
  });
  const navigate = useNavigate();

  async function handlePostSignup() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/signup`,
        postSignupData
      );
      const token = await response.data.token;
      navigate(`/blogs`);
      if (token) {
        localStorage.setItem("token", "Bearer " + token);
      }
    } catch (error) {
      console.error("Signup failed:", error);
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      <div className="">
        <div className=" flex  items-center justify-center h-screen">
          <div className=" w-96 mx-auto">
            <h2 className=" text-3xl font-bold">Create An Account !</h2>
            <p className=" text-gray-400 mt-4">
              Already have an account ?
              <Link to="/signin" className=" underline text-gray-500">
                Sign in
              </Link>
            </p>
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
                <Button sendRequest={handlePostSignup} type="signup" />
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
