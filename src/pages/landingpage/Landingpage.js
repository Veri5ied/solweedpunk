import HeroImage from "../../assets/grsDRXc.png";
import AboutImage from "../../assets/afzwKAO.png";
import TokePro from "../../assets/toke pro.gif";
import TokeToke from "../../assets/toke-toke.gif";
import Bud from "../../assets/xQN2bV9.jpg";
import Navbar from "../../components/navigation/Navbar";
import { BsDiscord } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import "./Landingpage.css";
import FaqComponent from "../../components/faq/FaqComponent";
import Team from "../team/Team";

function Landingpage() {
  return (
    <div className="landing_page">
      <Navbar />
      <div className="page_body container">
        <div className="page_body_left">
          <h1 className="pb-2">SOLWEEDPUNKZ</h1>
          <h2 className="toke_toke">TOKE TOKE...</h2>
          <BsDiscord size={40} />
          <FaTwitter size={40} />
        </div>
        <div className="page_body_right">
          <img src={TokePro} alt="hero_image" />
        </div>
      </div>
      {/* Mission */}
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
      <div className="sol_roadmap container mt-4">
        <div className="sol_roadmap_content">
          <div className="sol_roadmap_title">
            <h2>SOLWEEDPUNKZ ROADMAP...</h2>
          </div>
        </div>
      </div>
      {/* Toke Toke Arts */}
      <div className="sol_toke_arts container mt-4">
        <div className="toke_img_title">
          <h2>SOLWEEDPUNKZ ARTS...</h2>
        </div>
        <div className="toke_toke_img">
          <img src={TokeToke} alt="" />
          <img src={Bud} alt="" />
          <img src={AboutImage} alt="" />
        </div>
      </div>
      {/* The team */}
      <div className="solweedpunk_team container mt-4">
        <Team />
      </div>
      {/* FAQ */}
      <div className="faq_section container mt-4">
        <div className="faq_title">
          <h2 className="faq">FAQ...</h2>
        </div>
        <div className="faq__body mb-3">
          <FaqComponent />
        </div>
      </div>
      {/* Footer Section */}
      <div className="footer_section container mt-4">
        <div className="footer_text">
          <div className="footer_social">
            <BsDiscord />
            <FaTwitter />
          </div>
          <p>Copyright © 2022, SolWeedPunk.</p>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
