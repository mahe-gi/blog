import { Appbar } from "../components/Appbar";
import BlogCard from "../components/BlogsCard";
import { BlogsSkeleton } from "../components/BlogsSkeleton";

import { useBlogs } from "../hooks";

function Blogs() {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div>
   <Appbar val={false} />
        <BlogsSkeleton />
      </div>
    );
  }

  return (
    <div>
      <Appbar val={false} />

      <div className="flex justify-center">
        <div className="w-full lg:w-3/4 ">
          {blogs.map((blogs) => {
            return (
              <BlogCard
                id={blogs.id}
                key={blogs.id}
                authorName={blogs.author.name || "Anonymous"}
                title={blogs.title}
                content={blogs.content}
                publishedDate="Feb 12, 2021"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
