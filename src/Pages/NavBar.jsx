import { NavLink } from "react-router-dom";
import Login from "../components/Login";
import { FaGraduationCap } from "react-icons/fa6";

export default function NavBar() {
  return (
    <div className="container w-[1286px] mx-auto px-4 flex items-center justify-between py-2">
      {/* Logo */}
      <div>
        <FaGraduationCap size={30} />
      </div>

      {/* Navigation Links */}
      <nav className="flex-grow flex justify-center">
        <ul className="flex gap-8">
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

      {/* Login Button */}
      <div>
        <Login />
      </div>
    </div>
  );
}
