import HeroImage from "../../assets/grsDRXc.png";
import AboutImage from "../../assets/afzwKAO.png";
import TokePro from "../../assets/toke pro.gif";
import TokeToke from "../../assets/toke-toke.gif";
import Bud from "../../assets/xQN2bV9.jpg";
import DankMonk from "../../assets/mWNcDgt.png";
import Navbar from "../../components/navigation/Navbar";
import Metaverse from "../../assets/Wg86pOz.png";
import { BsDiscord } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import "./Landingpage.css";
import FaqComponent from "../../components/faq/FaqComponent";

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
        <div className="solweedpunk_team_title">
          <h2>SOLWEEDPUNKZ TEAM...</h2>
        </div>
        <div className="solweedpunk_team_details">
          <div className="team">
            <div className="team_img">
              <img src={Bud} alt="moon" />
            </div>
            <div className="team_name">
              <h3>Moonbox</h3>
              <p>Artist and Founder of all things Solweedpunk</p>
            </div>
          </div>
          <div className="team">
            <div className="team_img">
              <img src={DankMonk} alt="dank monk" />
            </div>
            <div className="team_name">
              <h3>DankMonke</h3>
              <p>Helper monke, Investor, Advisor, Mod, Stuff doer</p>
            </div>
          </div>
          <div className="team">
            <div className="team_img">
              <img src={Metaverse} alt="meta" />
            </div>
            <div className="team_name">
              <h3>Metaversol</h3>
              <p>
                Formerly Test Guys - They are the big brains behind our
                metaverse world
              </p>
            </div>
          </div>
          {/* Team two */}
          <div className="team">
            <div className="team_img">
              <img src={Bud} alt="moon" />
            </div>
            <div className="team_name">
              <h3>Terp Doctor</h3>
              <p>Artist and Founder of all things Solweedpunk</p>
            </div>
          </div>
          <div className="team">
            <div className="team_img">
              <img src={DankMonk} alt="dank monk" />
            </div>
            <div className="team_name">
              <h3>Nico GT</h3>
              <p>Helper monke, Investor, Advisor, Mod, Stuff doer</p>
            </div>
          </div>
          <div className="team">
            <div className="team_img">
              <img src={Metaverse} alt="meta" />
            </div>
            <div className="team_name">
              <h3>Veri5ied</h3>
              <p>
                Software Engineer, building and making the web accessible to
                many
              </p>
            </div>
          </div>
        </div>
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
    </div>
  );
}

export default Landingpage;
