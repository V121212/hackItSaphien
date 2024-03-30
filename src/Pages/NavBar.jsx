import { NavLink } from "react-router-dom";
import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import { FaGraduationCap } from "react-icons/fa6";

export default function NavBar() {
  const {isSignedIn}=useUser();
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
            <NavLink to={"/advocate"}>Advocate</NavLink>
          </li>
          <li>
            <NavLink to={"/aboutus"}>Aboutus</NavLink>
          </li>
          <li>
            <NavLink to={"/feedback"}>FeedBack</NavLink>
          </li>
          {/* <li>
            <NavLink to={"/team1"}>Team</NavLink>
          </li> */}
        </ul>
      </nav>

      {/* Login Button */}
      <div>
     { isSignedIn === false ? <SignInButton>Log in</SignInButton> :<UserButton/>}
      </div>
    </div>
  );
}
