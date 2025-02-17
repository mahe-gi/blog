import { Avatar } from "./BlogsCard";

export function Appbar() {
  return (
    <div className=" flex justify-between items-center px-10 border-b-1 border-gray-300 py-4">
      <div>Blog.101dev</div>
      <div>
        <Avatar size={35} authorName="Mahesh" />
      </div>
    </div>
  );
}
