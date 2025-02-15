import { Auth } from "../components/Auth";
import { Quote } from "../components/Quote";

function Signup() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      <div className="">
        <Auth type="signup" />
      </div>
      <div className=" hidden lg:block">
        <Quote type="signup" />
      </div>
    </div>
  );
}

export default Signup;
