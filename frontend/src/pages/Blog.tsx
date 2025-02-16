import { Appbar } from "../components/Appbar";
import { Avatar } from "../components/BlogCard";

function Blog() {
  return (
    <div>
      <Appbar />
      <div className=" flex w-screen h-screen  p-10 gap-4 ">
        <div className=" h-full w-[70%] px-8 ">
          <div>
            <h2 className=" text-4xl font-bold capitalize">
              hello brother how are you hello brother how are you {/* title */}
            </h2>
          </div>
          <div>
            <p className=" text-sm text-gray-500 capitalize pt-4">
              {/* posted on date */}
              posted on Augest 24 , 2024
            </p>
          </div>
          <div className=" text-[17px] text-gray-600 text-left pt-4">
            {/* content here  */}i am fine what about you i am also fine thank
            you for asking me i am good too thank you for asking me i am fine
            what about you i am also fine thank you for asking me i am good too
            thank you for asking me i am fine what about you i am also fine
            thank you for asking me i am good too thank you for asking me i am
            fine what about you i am also fine thank you for asking me i am good
            too thk you for asking me
          </div>
        </div>
        <div className=" h-full w-[30%]">
          {/* author name  */}
          <h3>Author</h3>
          <div className=" flex gap-x-2 items-center">
            {/* avatar name / author name  */}
            <Avatar authorName="Mahesh" />
            <div className=" flex flex-col px-2">
              {/* author nanme */}
              <h4 className=" text-2xl font-bold">Mahesh</h4>
              {/* bio */}
              <p className=" text-gray-500 ">Hi i am mahesh i am good man </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
