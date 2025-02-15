import { useBlogs } from "../hooks";
function Blog() {
  const { loading, blogs } = useBlogs();
  /// todo : add full blog page here render single blog with id
  return <div>Blog</div>;
}

export default Blog;
