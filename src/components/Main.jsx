import React, { useState } from "react";
import { Button } from "./Shadcn/button";
import { MdArrowOutward } from "react-icons/md";
import lawyerImg from "../Images/lawyer.png";
import { useNavigate } from "react-router";
import Chatbot from "./Chatbot"; // Import the Chatbot component
import { SignInButton } from "@clerk/clerk-react";

export default function Main() {
  const navigate = useNavigate();
  const [showChatbot, setShowChatbot] = useState(false); // State variable to toggle chatbot visibility

  function handleClick1() {
    setShowChatbot(true); // Set showChatbot to true when the button is clicked
  }

  function handleClick2() {
    navigate("/login");
  }

  const isSignedIn = false; // Assuming you'll get this value from somewhere

  return (
    <div className="relative w-[1286px] mx-auto flex justify-center items-center">
      <div className="relative w-[10/11] flex">
        <div className="w-[50%] flex flex-col justify-center items-start bg-gray-200 px-7">
          <div className="px-4 space-y-6">
            <div className="text-4xl font-bold px-4">knowledge of your rights is your shield against injustice.<br/></div>
            <div className="text-2xl px-4">our rights, your voice, your protection</div>

          </div>
          <div className="flex gap-x-4 mt-7 px-8">
            <div className="hover:scale-110 hover:ml-0 hover:transition-duration-1000">
              <Button className="rounded flex flex-row gap-2" onClick={handleClick1}>
                <div>Try chatbot</div>{" "}
                <div>
                  <MdArrowOutward />
                </div>
              </Button>
            </div>
            <div className="w-4 h-4 hover:scale-110 hover:ml-0 hover:transition-duration-1000">
              {
                isSignedIn ? <SignInButton>Log in</SignInButton> : null
              }
            </div>
          </div>
        </div>
        <div className="w-[50%] bg-cover">
          <img src={lawyerImg} alt="lawyer image" />
        </div>
      </div>
      {showChatbot ? <Chatbot className="abs mr-2 mb-5"/> : null} {/* Position the Chatbot component */}
    </div>
  );
}
