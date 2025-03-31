import { Appbar } from "../components/Appbar";
import BlogCard from "../components/BlogsCard";
import { useBlogs } from "../hooks";

function Blogs() {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div>
        {/* skeliton */}
        <Appbar val={false} />
        <div className="flex justify-center items-center  flex-col">
           <div className=" md:w-1/2 w-full">
            <div role="status" className=" w-full animate-pulse pt-5">
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-600 w-1/4 mb-4 mt-3 "></div>
              <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-600 w-1/2 mb-4  mt-3"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-600 mb-2.5 mt-4"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-600 mb-2.5 mt-3"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-600 mb-2.5 mt-3"></div>
              <div className="h-2 bg-gray-200 rounded-full w-1/3 dark:bg-gray-600 mb-7 "></div>
              <div className="h-2 bg-gray-200 rounded-full w-1/4 dark:bg-gray-600 "></div>
            </div>
          </div>
          <div className=" md:w-1/2 w-full">
            <div role="status" className=" w-full animate-pulse pt-5">
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-600 w-1/4 mb-4 mt-3 "></div>
              <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-600 w-1/2 mb-4  mt-3"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-600 mb-2.5 mt-4"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-600 mb-2.5 mt-3"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-600 mb-2.5 mt-3"></div>
              <div className="h-2 bg-gray-200 rounded-full w-1/3 dark:bg-gray-600 mb-7 "></div>
              <div className="h-2 bg-gray-200 rounded-full w-1/4 dark:bg-gray-600 "></div>
            </div>
          </div>
          <div className=" md:w-1/2 w-full">
            <div role="status" className=" w-full animate-pulse pt-5">
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-600 w-1/4 mb-4 mt-3 "></div>
              <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-600 w-1/2 mb-4  mt-3"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-600 mb-2.5 mt-4"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-600 mb-2.5 mt-3"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-600 mb-2.5 mt-3"></div>
              <div className="h-2 bg-gray-200 rounded-full w-1/3 dark:bg-gray-600 mb-7 "></div>
              <div className="h-2 bg-gray-200 rounded-full w-1/4 dark:bg-gray-600 "></div>
            </div>
          </div>
          <div className=" md:w-1/2 w-full">
            <div role="status" className=" w-full animate-pulse pt-5">
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-600 w-1/4 mb-4 mt-3 "></div>
              <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-600 w-1/2 mb-4  mt-3"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-600 mb-2.5 mt-4"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-600 mb-2.5 mt-3"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-600 mb-2.5 mt-3"></div>
              <div className="h-2 bg-gray-200 rounded-full w-1/3 dark:bg-gray-600 mb-7 "></div>
              <div className="h-2 bg-gray-200 rounded-full w-1/4 dark:bg-gray-600 "></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Appbar val={false} />

      <div className="flex justify-center">
        <div className=" md:w-1/2 w-full">
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
