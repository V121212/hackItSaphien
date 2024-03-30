import { Route, Routes, useLocation } from "react-router-dom";
import Profile from "./Pages/Profile";
import Feedback from "./Pages/Feedback";
import Advocats from './components/Advocats.jsx'
import Home from "./Pages/Home";
// import Team1 from "./Pages/Team1.jsx";
// import Login from "./components/Login.jsx";
// import Chatbot from "./components/Chatbot.jsx";
import NavBar from "./Pages/NavBar.jsx";
import AboutUs from "./components/AboutUs.jsx";

function App() {



  return (
    <div className="w-[100%]">
      {/* Conditionally render the Navbar based on the path */}
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/advocate" element={<Advocats/>}/>
        <Route path="/profile" element={<Profile />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/feedback" element={<Feedback />} />
        {/* <Route path="/team1" element={<Team1 />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="*" element={<div>404 PageNotFound</div>} />
      </Routes>
    </div>
  );
}

export default App;
