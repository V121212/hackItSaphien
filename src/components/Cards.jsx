// import { FaLinkedin } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa6";

import { useNavigate } from "react-router-dom";


const Cards = (props) => {
  
    const navigate = useNavigate(); 

    const imageData = props.imageData ;

    function handler(){
        navigate("/login")
    }

  return (
    <div className="grid xsm:grid-cols-1 sm:grid-cols-2 gap-3 md:grid-col-3 lg:grid-col-4 w-2/3 mx-auto "> 

    {imageData.map((imageData)=>(
        (
            <div key={imageData.id} className="mt-10 ">
                <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border rounded-xl hover:border-transparent group hover:bg-slate-500 dark:border-gray-700 dark:hover:border-transparent">
                   <div>
                     <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={imageData.image} alt="" />
                   </div>

                    <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">{imageData.name}</h1>
                   
                    <div className="flex flex-col items-center gap-2">
                       <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">{imageData.tittle}</p>
                       <div><button className=" bg-slate-800  rounded-sm p-2" onClick={handler}>Hire Me !</button></div>
                    </div>

                </div>     
        </div>
        )
    ))}

    </div>
  )
}

export default Cards











// import { FaWhatsapp } from "react-icons/fa";

// import manImg from "../Images/manImg.png";

// function Whatsapp() {
//   return (
//     <div className=" flex flex-col gap-5 items-center mt-24">
//       <div className=" w-64 border-50">
//         <img src={manImg} alt="img" />{" "}
//       </div>
//       <div className="flex flex-row gap-3 border-x-5 border-t-4 border-b-4 border-r-6 border-l-6 border-black">
//         <div className=" text-2xl">Adv. Sunil Sharma</div>
//         <div>
//           {/* <a href="https://wa.me/919770424352">
//             <FaWhatsapp size={30} /> */}
//           {/* </a> */}
//             <button className=" bg-blue-950 text-white rounded-sm p-2 ">Hire Me !</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Whatsapp;
