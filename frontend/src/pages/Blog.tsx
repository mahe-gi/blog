import { useParams } from "react-router";
import { Appbar } from "../components/Appbar";
import { useblog } from "../hooks/index";

import { BlogsCardLeft } from "../components/BlogCardLeft";
import { BlogSkeleton } from "../components/BlogSkeleton";

function Blog() {
  const { id } = useParams();
  const { loading, blog } = useblog({
    id: Number(id),
  });
  if (loading) {
    return (
      <div>
        <Appbar val={false} />
        <BlogSkeleton/> 
      </div>
    );
  }

  return (
    <div>
      <Appbar val={false} />
      <div className=" max-h-max p-4 lg:p-10 gap-4 ">
        <div>{blog && <BlogsCardLeft blog={blog} />}</div>
      
      </div>
    </div>
  );
}

export default Blog;

// className=" grid grid-cols-1 lg:grid-cols-2 grid-flow-col max-h-max  p-4 lg:p-10 gap-4 "
