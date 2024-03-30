import React from "react";
import { Button } from "./Shadcn/button";
import { MdArrowOutward } from "react-icons/md";
// import Box1 from "./Shadcn/Box1";
import lawyerImg from "../Images/lawyer.png"

import { useNavigate } from "react-router";

export const Main = () => {
    const navigate = useNavigate();

    function handleClick(){
        navigate("/login");
    }
  return (
   
      <div className="relative w-[1286px] flex h-screen">
      <div className="w-1/2 bg-gray-200 flex items-center justify-center">
      <div>
      <div className="flex flex-col gap-3  items-center">
        <div className=" text-4xl font-bold ">knowledge of your rights is your shield against injustice.</div>
        <div className=" text-3xl font-bold">your rights, your voice, your protection</div>
        <div className="text-1xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime,
          quae!
        </div>
      </div>
      </div>
      

      <div className="flex flex-row gap-3 justify-center mt-7">
        <div className=" w-4 h-4 hover:scale-110 hover:ml-0 hover:transition: duration-1000">
          <Button className="rounded flex flex-row gap-2" onClick={handleClick}>
            <div>Log in</div>{" "}
            <div>
              <MdArrowOutward />
            </div>
          </Button>
        </div>
        {/* <div>
          <Button className="rounded-full flex flex-row gap-2">
            <div>Log in</div>{" "}
            <div>
              <MdArrowOutward />
            </div>
          </Button>{" "}
        </div> */}
      </div>
      </div>
      <div className="w-1/2 bg-cover ">
      <img src={lawyerImg} alt='lawyer image' />
      </div>
    </div>
    
  );
};
