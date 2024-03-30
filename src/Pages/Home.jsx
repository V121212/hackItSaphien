// import "./Home.css";

// import { Button } from "@/components/ui/button";
import {Button} from '../components/Shadcn/button'
import { MdArrowOutward } from "react-icons/md";
import Box1 from "../components/Shadcn/Box1";
import { useNavigate } from "react-router-dom";

import lawyerImg from "../Images/lawyer.png"

import Main  from '../components/Main';
import Features from '../components/feature';


// import Login from "./Login";

function Home() {
 
  const navigate = useNavigate();

  function handleClick(){
      navigate("/login");
  }

  return (
    <div className='w-full justify-center items-center'>
      <Main/>
      <Features/>
      <div id="page2" className="ml-14 mt-14 flex flex-col gap-2">
        <div className=" font-bold  text-4xl ">Project Description</div>
        <div className="text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
           voluptatibus dolorum enim, nam fuga quam quis, eum repellat ipsum architecto quidem vitae iure assumenda, provident sapi
           ente temporibus illo aut consequatur
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore repudiandae, alias quaerat unde adipisci ut?
            ?</div>
      </div>
    </div>
  
  );
}

export default Home;

//    {/* <div> <div className=" font-la">Utilizing an AI chatbot to transcend</div>
// {/* <div> language barriers effectively</div></div> */} */}
