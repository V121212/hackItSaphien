import { NavLink } from "react-router-dom";
import Login from "../components/Login";

import { FaGraduationCap } from "react-icons/fa6";

export default  function NavBar() {

  return (
    <div className="w-[1280px] relative flex items-center justify-center py-2">
      <div className="w-full flex justify-center">
        {/* Logo */}
        <FaGraduationCap size={30} />
      </div>
      <div className="min-w-[50%] relative">
      <nav>
      <ul className="w-fit flex flex-row justify-center gap-8">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/profile"}>Profile</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
        <li>
          <NavLink to={"/feedback"}>FeedBack</NavLink>
        </li>
        <li>
          <NavLink to={"/team1"}>Team</NavLink>
        </li>
      </ul>
      </nav>
      </div>
      <div>
        <Login/>
      </div>
     
      
    </div>
  );
}


