import { useState } from "react";
import { Appbar } from "../components/Appbar";
import axios from "axios";
import { useNavigate } from "react-router";

function Publish() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  async function handleBlogPublish() {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/v1/blog`,
      {
        title: title,
        content: content,
      },
      {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      }
    );

    if (response.data.id) {
      navigate(`/blog/${response.data.id}`);
    }
  }

  return (
    <div>
      <Appbar val={true} />
      <div className="flex justify-center mt-10 ">
        <div className="flex flex-col gap-4 w-full max-w-2xl ">
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            placeholder="Title"
            className=" rounded-sm input input-bordered w-full focus:outline-none pb-6 text-[#6b6b6b] text-4xl font-light text-left p-4 "
          />
          <textarea
            onChange={(e) => {
              setContent(e.target.value);
            }}
            className=" rounded-sm textarea textarea-bordered h-96 w-full focus:outline-none font-light text-[#6b6b6b] text-left p-4  "
            placeholder="Tell your story ..."
          ></textarea>
          <button
            onClick={handleBlogPublish}
            className="btn cursor-pointer  bg-[#c1c1c1] hover:bg-[#a5a2a2] text-white font-light py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
}

export default Publish;
