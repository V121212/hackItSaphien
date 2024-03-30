import { HashLoader } from "react-spinners";

function Loader() {
  return (
    <div className="flex justify-center ">
      {/* <HashLoader color="#36d7b7" /> */}
      <HashLoader
         color="#d63648" 
         className=" mt-72" 
         size={100}
     />
    </div>
  );
}

export default Loader;
