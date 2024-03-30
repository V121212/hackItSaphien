// import "./Home.css";

// import { Button } from "@/components/ui/button";
import {Button} from '../components/Shadcn/button'
import { MdArrowOutward } from "react-icons/md";
import Box1 from "../components/Shadcn/Box1";
import { useNavigate } from "react-router-dom";

import Fnq from "../../src/Pages/Fnq.jsx";

// import Chatbot from '../../../chatbot/Chatbot.jsx';

import lawyerImg from "../Images/lawyer.png"

// import Main  from '../components/Main';
import Main from '../components/Main.jsx';
import Features from '../components/Feature.jsx';
// import Contact from './Contact.jsx'
import Footer from '../components/Footer.jsx'

import Feedback_Feature from '../components/Feedback_Feature.jsx';
import Chatbot from '../components/Chatbot.jsx';

// import Login from "./Login";

function Home() {
 
  // const navigate = useNavigate();

  // function handleClick(){
  //     navigate("/login");
  // }

  return (
    <div className='w-full justify-center items-center'>
      <Main/> 
      <Features/>
      {/* <Chatbot /> */}
      <Feedback_Feature/>
      <Fnq />
      <Footer/>
       {/* <Feedback_Feature /> */}
       <Chatbot className="abs mr-2 mb-5"/>

    </div>
  
  );
}

export default Home;

//    {/* <div> <div className=" font-la">Utilizing an AI chatbot to transcend</div>
// {/* <div> language barriers effectively</div></div> */} */}
