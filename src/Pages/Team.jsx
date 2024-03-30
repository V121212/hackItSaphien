// import React from 'react';

// import logInImage from "../Images/logInImage.png"

// import contactLogo from "../Images/contactLogo.svg";

//imports social accounts "npm install react-icons --save"
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

// import shivamImg from "../Images/shivamImg.webp";
// import mahakImg from "../Images/mahakImg.avif";
// import vishalImg from "../Images/vishalImg";
// import apurvImg from "../Images/apurvImg";



// import logo from "../Images/dog.jpeg";

const Team = (img,name,special) => {
  return (
    <div className="py-5 team4  ">
      <div className="container  ">
        <div className="row">
          {/* <!-- column  --> */}
          <div className="col-lg-3 mb-4">
            {/* <!-- Row --> */}
            <div className="row">
              <div className="col-md-12 max-md:flex max-md:justify-center">
                <img src={img} alt="wrapkit" className="img-fluid rounded-full w-56  h-56 max-sm:h-24  max-md:w-auto"  />
              </div>
              <div className="col-md-12 text-center">
                <div className="pt-2">
                  <h5 className="mt-4 font-weight-medium mb-0 font-bold  text-xl max-sm:text-base">{name}</h5>
                  <h6 className="subtitle mb-3 text-lg">{special}</h6>
                  <div className="flex flex-col gap-3 items-center">
                    <div className="flex flex-row gap-4 max-sm:gap-2 "> 
                         <div className=""><a href="#" >< FaFacebook size={20} className=" hover:size-10  hover: transition: duration-1000" /></a></div>
                         <div><a href="#" ><i><FaLinkedin size={20} className=" hover:size-10  hover: transition: duration-1000" /></i></a></div>
                    </div>
                    <div className="flex flex-row gap-4">
                         <div><a href="#" ><i><FaXTwitter size={20} className=" hover:size-10  hover: transition: duration-1000" /></i></a></div>
                          <div><a href="#" ><i><FaInstagram size={20} className=" hover:size-10  hover: transition: duration-1000"/></i></a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>












    // <div>
    //     {/* mt-40 */}
    //   <div className=" w-72 flex flex-col  shadow-md bg-white overflow-hidden items-center rounded-full shadow-slate-400">
    //     <img
    //       className=" w-1/3  h-28 object-cover rounded-full shadow-slate-400"
    //       src={image}
    //       alt={name}
    //     />
    //     <div className="p-3 flex flex-col items-center">
    //       <h5 className="text-xl font-bold">{name}</h5>
    //       <p className="text-gray-600 mb-2">{title}</p>
    //       {/* <p className="text-sm text-gray-700">{bio}</p> */}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Team;
