import HeroImage from "../../assets/grsDRXc.png";
import AboutImage from "../../assets/afzwKAO.png";
import Toke from "../../assets/toke.gif";
import Navbar from "../../components/navigation/Navbar";
import { BsDiscord } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import "./Landingpage.css";
import OfficialLinks from "../../components/links/OfficialLinks";
import Roadmap from "../../components/roadmap/Roadmap";
import Team from "../team/Team";

function Landingpage() {
  return (
    <div className="landingpage">
      <Navbar />
      <div id="home"></div>
      <div className="page_body container">
        <div className="page_body_left">
          <h1 className="pb-2">SOLWEEDPUNKZ</h1>
          <h2 className="toke_toke">TOKE TOKE...</h2>
          <a
            href="https://discord.gg/nvVQ8FBzc2"
            target="_blank"
            rel="noreferrer"
          >
            <BsDiscord size={40} />
          </a>
          <a
            href="https://twitter.com/solweedpunk"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter size={40} />
          </a>
        </div>
        <div className="page_body_right">
          <img src={Toke} alt="hero_image" />
        </div>
      </div>
      {/* Mission */}
      <div id="about"></div>
      <div className="sol_mission container mt-4">
        <div className="sol_mission_content">
          <div className="sol_header">
            <h2>SOLWEEDPUNKZ MISSION...</h2>
          </div>
          <div className="about_mission">
            <div className="toke_imgs mt-3">
              <img src={AboutImage} alt="about_image" />
              <img src={HeroImage} alt="toke pro" />
            </div>
            <div className="about_texts">
              <p>
                This is an art and community forward project with no gimmicky
                royalties or burns. 888 collectable Weedpunkz generated with
                random attributes and items. Grab some fun pixel art for you and
                your buds!
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Roadmap */}
      <div id="roadmap"></div>
      <div className="sol_roadmap mt-4">
        <div className="sol_roadmap_content container">
          <div className="sol_roadmap_title">
            <h2>SOLWEEDPUNKZ ROADMAP...</h2>
          </div>
          <Roadmap />
        </div>
      </div>
      {/* Toke Toke Arts */}
      {/* <div className="sol_toke_arts container">
        <div className="toke_img_title">
          <h2>SOLWEEDPUNKZ ARTS...</h2>
        </div>
        <div className="toke_toke_img">
          <img src={TokeToke} alt="" />
          <img src={Bud} alt="" />
          <img src={AboutImage} alt="" />
        </div>
      </div> */}
      {/* The team */}
      <div id="team"></div>
      <div className="solweedpunk_team container mt-4">
        <Team />
      </div>
      {/* OFFICIAL LINKS */}
      <div id="links"></div>
      <div className="link_section container mt-1">
        <div className="link_title">
          <h2 className="link">OFFICIAL LINKS...</h2>
        </div>
        <div className="link__body">
          <OfficialLinks />
        </div>
      </div>
      {/* Footer Section */}
      <div className="footer_section container mt-4">
        <div className="footer_text">
          <div className="footer_social">
            <a
              href="https://discord.gg/nvVQ8FBzc2"
              target="_blank"
              rel="noreferrer"
            >
              <BsDiscord size={20} />
            </a>
            <a
              href="https://twitter.com/solweedpunk"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter size={20} />
            </a>
          </div>
          <p>Copyright © 2022, SolWeedPunk.</p>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
