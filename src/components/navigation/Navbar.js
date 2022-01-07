import SolWeedLogo from "../../assets/solweedlogo.png";
import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";
import "./Navbar.css";

function Navbar() {
  const [show, setShow] = useState(false);

  const handleShowNav = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="nav sticky-top nav_web">
        <div className="nav_items container-fluid pt-2 pb-2">
          <div className="nav_items_logo">
            <img src={SolWeedLogo} alt="SolWeedPunk" />
          </div>
          <div className="nav_items_menus">
            <a href="#home">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#roadmap">ROADMAP</a>
            <a href="#team">TEAM</a>
            <a href="#links">OFFICIAL LINKS</a>
          </div>
        </div>
      </div>
      {/* Mobile Nav Bar */}
      <div className="nav sticky-top nav_mobile">
        <div className="nav_items container-fluid pt-2 pb-2">
          <div className="nav_items_logo">
            <img src={SolWeedLogo} alt="SolWeedPunk" />
          </div>
          <div className="nav_mobile_icon" onClick={handleShowNav}>
            {show ? <IoCloseOutline size={30} /> : <BiMenuAltRight size={30} />}
          </div>
        </div>
        <div
          className={
            show ? "nav_items_menus active" : "nav_items_menus disable"
          }
        >
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#roadmap">ROADMAP</a>
          <a href="#team">TEAM</a>
          <a href="#links">OFFICIAL LINKS</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
