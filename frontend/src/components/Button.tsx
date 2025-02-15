interface ButtonProps {
  sendRequest: () => void;
  type: "signup" | "signin";
}

export const Button = ({ sendRequest, type }: ButtonProps) => {
  return (
    <div>
      <button
        onClick={sendRequest}
        className=" w-full bg-blue-400 text-white p-2 rounded-md"
        type="button"
      >
        {type === "signup" ? "Sign up" : "Sign in"}
      </button>
    </div>
  );
};
