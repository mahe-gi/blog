import { useState } from "react";
import { SignupInput } from "@mahe-npm/common";
import { Link } from "react-router";
export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [postInputs, setPostInputs] = useState<SignupInput>({
    username: "",
    password: "",
    name: "",
  });
  return (
    <div className=" flex  items-center justify-center h-screen">
      <div className=" w-96 mx-auto">
        <h2 className=" text-3xl font-bold">
          {type === "signup" ? "Create An Account !" : " Welcome Back !"}
        </h2>
        <p className=" text-gray-400 mt-4">
          {type === "signup"
            ? " Already have an account ?"
            : "Dont have an account ?"}{" "}
          <Link
            to={type === "signup" ? "/signin" : "/signup"}
            className=" underline text-gray-500"
          >
            {type === "signup" ? "Sign in" : "Sign up"}
          </Link>
        </p>{" "}
        <p></p>
        <form className=" mt-8">
          <div className=" space-y-4">
            {type === "signup" ? (
              <LabeldInput
                label="Name"
                placeholder="Name"
                onChange={(e) => {
                  setPostInputs({
                    ...postInputs,
                    name: e.target.value,
                  });
                }}
              />
            ) : (
              ""
            )}
            <LabeldInput
              label="Email"
              placeholder="abcd@gmail.com"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  username: e.target.value,
                });
              }}
            />
            <LabeldInput
              label="password"
              placeholder="12345"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  password: e.target.value,
                });
              }}
            />

            <div>
              <button className=" w-full bg-blue-400 text-white p-2 rounded-md">
                {type === "signup" ? "Sign up" : "Sign in"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

interface LabeldInputProps {
  label: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const LabeldInput = ({
  label,
  placeholder,
  onChange,
}: LabeldInputProps) => {
  return (
    <div>
      <label className=" block text-sm font-medium">{label}</label>
      <input
        type="email"
        placeholder={placeholder}
        className=" w-full mt-1 p-2 border border-gray-300 rounded-md"
        onChange={onChange}
      />
    </div>
  );
};
