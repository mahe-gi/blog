import { Link } from "react-router";
import { Avatar } from "./BlogsCard";

import { ToggleHandleButton } from "./ToggleHandleButton";

interface AppbarProps {
  val: boolean;
}

export function Appbar({ val }: AppbarProps) {
  return (
    <div className=" flex justify-between items-center px-4 sticky top-0 z-50 bg-[#fafafa] lg:px-10 border-b-1 border-[#f3f2f2] py-3">
      <Link to="/blogs">
        <div className=" cursor-pointer font-stretch-50% text-2xl hover:opacity-50">
          101dev
          {/* logo here  */}
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
              <button className=" flex text-[#6b6b6b] cursor-pointer hover:text-[#000]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-label="Write"
                >
                  <path
                    fill="currentColor"
                    d="M14 4a.5.5 0 0 0 0-1zm7 6a.5.5 0 0 0-1 0zm-7-7H4v1h10zM3 4v16h1V4zm1 17h16v-1H4zm17-1V10h-1v10zm-1 1a1 1 0 0 0 1-1h-1zM3 20a1 1 0 0 0 1 1v-1zM4 3a1 1 0 0 0-1 1h1z"
                  ></path>
                  <path
                    stroke="currentColor"
                    d="m17.5 4.5-8.458 8.458a.25.25 0 0 0-.06.098l-.824 2.47a.25.25 0 0 0 .316.316l2.47-.823a.25.25 0 0 0 .098-.06L19.5 6.5m-2-2 2.323-2.323a.25.25 0 0 1 .354 0l1.646 1.646a.25.25 0 0 1 0 .354L19.5 6.5m-2-2 2 2"
                  ></path>
                </svg>
                <p className=" px-2 font-extralight"> Write</p>
              </button>
            </Link>
            <div className=" text-[#6b6b6b] cursor-pointer hover:text-[#000]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-bell"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
              </svg>
            </div>
            <ToggleHandleButton />
          </div>
        )}
      </div>
    </div>
  );
}
