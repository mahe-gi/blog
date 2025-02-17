import { Link } from "react-router";

interface BlogCardProps {
  id: number;
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

function BlogCard({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) {
  return (
    <Link to={`/blog/${id}`}>
      <div className=" border-b-2 border-slate-100  p-4">
        <div className=" flex gap-x-1">
          <div className="flex items-center justify-center">
            <Avatar authorName={authorName} />
          </div>
          <div className=" flex  capitalize items-center">
            <div className=" pl-1 text-sm font-extralight">{authorName} </div>
            <div className=" flex  text-sm items-center px-2">
              <Circle />
            </div>
            <div className=" text-sm   font-thin text-slate-400">
              {publishedDate}
            </div>
          </div>
        </div>

        <div className=" text-2xl font-bold capitalize pt-2">{title}</div>
        <div className=" text-slate-500 font-light">
          {content.length > 200
            ? content.slice(0, 200) + "..."
            : content.slice(0, 200)}
        </div>
        <div className=" font-thin text-sm pt-4">{`${Math.ceil(
          content.length / 100
        )} mins read`}</div>
      </div>
    </Link>
  );
}

export default BlogCard;

export function Avatar({
  authorName,
  size,
}: {
  authorName: string;
  size?: number;
}) {
  return (
    <div>
      <div
        className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-sky-300  rounded-full"
        style={{ width: size, height: size }}
      >
        <span className="font-medium text-gray-600 dark:text-gray-300 capitalize">
          {authorName[0]}
        </span>
      </div>
    </div>
  );
}

export function Circle() {
  return <div className=" h-1 w-1 rounded-full bg-slate-500"></div>;
}
