import { useParams } from "react-router";
import { Appbar } from "../components/Appbar";
import { Avatar } from "../components/BlogsCard";
import { useblog } from "../hooks/index";

function Blog() {
  const { id } = useParams();
  const { loading, blog } = useblog({
    id: Number(id),
  });
  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <Appbar val={false} />
      <div className=" grid grid-cols-1 lg:grid-cols-2 grid-flow-col w-screen h-screen  p-4 lg:p-10 gap-4 ">
        <div className=" h-full col-span-8 px-6 ">
          <div>
            <h2 className=" text-4xl font-medium capitalize">{blog?.title}</h2>
          </div>
          <div>
            <p className=" text-sm text-gray-500 capitalize pt-4">
              {/* posted on date */}
              posted on Augest 24 , 2024
            </p>
          </div>
          <div className=" text-[17px] text-[#6b6b6b] font-light pt-4 overflow-hidden text-ellipsis break-words">
            {/* content here  */}
            {blog?.content}
          </div>
        </div>
        <div className=" h-full col-span-4   hidden lg:block">
          <div className="  bg-[#c4e2ff] p-4 rounded-sm h-1/3">
            {/* author name  */}
            <h3 className=" pb-4  text-[#6b6b6b] font-light">Author</h3>
            <div className=" flex gap-x-2 items-center">
              {/* avatar name / author name  */}
              <Avatar authorName={blog?.author?.name ?? "Anonymous"} />
              <div className=" flex flex-col px-2">
                <h4 className=" text-2xl font-light capitalize">
                  {blog?.author?.name ?? "Anonymous"}
                </h4>
                {/* bio */}
                <p className=" text-gray-500 ">Hi i am mahesh i am good man </p>
              </div>
            </div>
          </div>
          {/* 
          
          <div className="  bg-[#c4e2ff] p-4 rounded-sm h-1/3 mt-1">

            <h3 className=" pb-4  text-[#6b6b6b] font-light">Author</h3>
            <div className=" flex gap-x-2 items-center">

              <Avatar authorName={blog?.author?.name ?? "Anonymous"} />
              <div className=" flex flex-col px-2">
                <h4 className=" text-2xl font-light capitalize">
                  {blog?.author?.name ?? "Anonymous"}
                </h4>
                <p className=" text-gray-500 ">Hi i am mahesh i am good man </p>
              </div>
            </div>
          </div>
          
          */}
        </div>
      </div>
    </div>
  );
}

export default Blog;
