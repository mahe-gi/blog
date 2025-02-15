import { Auth } from "../components/Auth";
import { Quote } from "../components/Quote";

function Signin() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      <div className="">
        <Auth type="signin" />
      </div>
      <div className=" hidden lg:block">
        <Quote type="signin" />
      </div>
    </div>
  );
}

export default Signin;
