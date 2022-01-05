import HeroImage from "../../assets/grsDRXc.png";
import AboutImage from "../../assets/afzwKAO.png";
import TokePro from "../../assets/toke pro.gif";
import TokeToke from "../../assets/toke-toke.gif";
import Bud from "../../assets/xQN2bV9.jpg"
import Navbar from "../../components/navigation/Navbar";
import "./Landingpage.css";

function Landingpage() {
  return (
    <div className="landing_page">
      <Navbar />
      <div className="page_body container">
        <div className="page_body_left">
          <h1 className="pb-2">SOLWEEDPUNKZ</h1>
          <h2 className="toke_toke">TOKE TOKE...</h2>
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
                888 collectable Weedpunkz generated with random attributes and
                items. Grab some fun pixel art for you and your buds!
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
          <h2>SOLWEEDPUNKZ ARTS</h2>
        </div>
        <div className="toke_toke_img">
          <img src={TokeToke} alt="" />
          <img src={Bud} alt="" />
          <img src={AboutImage} alt="" />
        </div>
      </div>
      {/* The team */}
      <div className="solweedpunk_team container mt-4">
        <div className="solweedpunk_team_title">
          <h2>SOLWEEDPUNKZ TEAM</h2>
        </div>
        <div className="solweedpunk_team_details">

        </div>
      </div>
    </div>
  );
}

export default Landingpage;
