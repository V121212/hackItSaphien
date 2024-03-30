// import './App.css'
import "../../src/App.css";

export default function Footer() {
  return (
    <div className="app min-h-screen bg-slate-300 overflow-hidden ">
      <div className="body">
        <footer className="footer">
          <div className="waves">
            <div className="wave wave1"></div>
            <div className="wave wave2"></div>
            <div className="wave wave3"></div>
            <div className="wave wave4"></div>
          </div>
          <ul className="menu">
            <li className="menu__item">
              <a className="menu__link" href="#">
                Home
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#">
                About
              </a>
            </li>
           
            <li className="menu__item">
              <a className="menu__link" href="#">
                Team
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#">
                Contact
              </a>
            </li>
          </ul>
          <p>&copy;2024 | All Rights Reserved</p>
        </footer>
      
      </div>
    </div>
  );
}
