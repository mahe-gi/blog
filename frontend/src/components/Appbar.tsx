import { Link } from "react-router";
import { Avatar } from "./BlogsCard";

interface AppbarProps {
  val: boolean;
}

export function Appbar({ val }: AppbarProps) {
  return (
    <div className=" flex justify-between items-center px-10 border-b-1 border-gray-300 py-2">
      <Link to="/">
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
            <div className="cursor-pointer">
              <Avatar size={35} authorName="Mahesh" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
