export const Quote = ({ type }: { type: "signup" | "signin" }) => {
  return (
    <div className=" h-screen flex justify-center flex-col bg-sky-50 p-10">
      <div>
        <h2 className=" text-3xl font-bold">
          {type === "signup"
            ? " A community of thinkers, writers, and dreamers. Be one of us!"
            : "Good to see you again!  Let’s create something amazing."}
        </h2>
      </div>
      <div className=" mt-8">
        <h5 className=" text-md font-semibold capitalize">ch mahesh</h5>
        <p className=" text-sm text-gray-400">founder & ceo , 101dev inc</p>
      </div>
    </div>
  );
};
