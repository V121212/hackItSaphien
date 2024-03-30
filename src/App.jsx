import { Route, Routes, useLocation } from "react-router-dom";
import Profile from "./Pages/Profile";
import Contact from "./Pages/Contact";
import Feedback from "./Pages/Feedback";
import Home from "./Pages/Home";
import Team1 from "./Pages/Team1.jsx";
import Login from "./components/Login.jsx";
// import Chatbot from "../../chatbot/Chatbot.jsx";
import NavBar from "./Pages/NavBar.jsx";

function App() {
  const location = useLocation();

  // Check if the current path is '/chatbot'
  const isChatbotPath = location.pathname === "/chatbot";

  return (
    <div className="w-[100%]">
      {/* Conditionally render the Navbar based on the path */}
      {!isChatbotPath && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/team1" element={<Team1 />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/chatbot" element={<Chatbot />} /> */}
        <Route path="*" element={<div>404 PageNotFound</div>} />
      </Routes>
    </div>
  );
}

export default App;
