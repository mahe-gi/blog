import { Link } from "react-router";
import { Avatar } from "./BlogsCard";
import { useState } from "react";

interface AppbarProps {
  val: boolean;
}

export function Appbar({ val }: AppbarProps) {
  const [toggle, setToggle] = useState(false);

  const handleTOggle = () => {
    setToggle(!toggle);
  };
  function handlelogout() {
    console.log("Clicked");
    localStorage.removeItem("token");
    window.location.href = "/signin";
  }
  return (
    <div className=" flex justify-between items-center px-10 lg:px-20 border-b-1 border-gray-300 py-2">
      <Link to="/blogs">
        <div className=" cursor-pointer font-stretch-50% text-2xl hover:opacity-50">
          101dev
        </div>
      </Link>

      <div>
        {val ? (
          <div className="cursor-pointer">
            <Avatar size={35} authorName="Mahesh" />
          </div>
        ) : (
          <div className=" flex items-center  gap-8 ">
            <Link to={"/publish"}>
              <button className="bg-blue-400 text-white px-3 py-[2px] rounded-4xl cursor-pointer opacity-100 hover:opacity-80">
                New Blog
              </button>
            </Link>
            <div className="cursor-pointer" onClick={handleTOggle}>
              {toggle ? (
                <div className=" h-20 flex flex-col justify-between p-3 w-40 lg:w-60 px-6  bg-white absolute right-8 top-1">
                  <div className="  px-2 mb-2 hover:bg-blue-300"> cancel</div>
                  <div className="  px-2  hover:bg-red-400" onClick={handlelogout}>logout </div>
                </div>
              ) : (
                <Avatar size={35} authorName="Mahesh" />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
