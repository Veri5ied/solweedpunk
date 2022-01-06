import DankMonk from "../../assets/mWNcDgt.png";
import Terp from "../../assets/terp.png";
import Alvin from "../../assets/alvin.png";
import Nico from "../../assets/nico.jpg";
import Metaverse from "../../assets/metaversol.png";
import Bud from "../../assets/xQN2bV9.jpg";
import { FaTwitter } from "react-icons/fa";

import "./Team.css"

function Team() {
  return (
    <>
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
            <p>Artist and Founder of all things on Solweedpunk</p>
            <FaTwitter size={26} />
          </div>
        </div>
        <div className="team">
          <div className="team_img">
            <img src={DankMonk} alt="dank monk" />
          </div>
          <div className="team_name">
            <h3>DankMonke</h3>
            <p>Helper monke, Investor, Advisor, Mod, Stuff doer</p>
            <FaTwitter size={26} />
          </div>
        </div>
        <div className="team">
          <div className="team_img">
            <img src={Metaverse} alt="meta" />
          </div>
          <div className="team_name">
            <h3>Metaversol</h3>
            <p>
              Formerly Test Guys - They are the big brains behind our metaverse
              world
            </p>
            <FaTwitter size={26} />
          </div>
        </div>
        {/* Team two */}
        <div className="team">
          <div className="team_img">
            <img src={Terp} alt="terp" />
          </div>
          <div className="team_name">
            <h3>Terp Doctor</h3>
            <p>Artist and Founder of all things on Solweedpunk</p>
            <FaTwitter size={26} />
          </div>
        </div>
        <div className="team">
          <div className="team_img">
            <img src={Nico} alt="nico" />
          </div>
          <div className="team_name">
            <h3>Nico GT</h3>
            <p>Community manager and 3D artist and moderator.</p>
            <FaTwitter size={26} />
          </div>
        </div>
        <div className="team">
          <div className="team_img">
            <img src={Alvin} alt="alvin" />
          </div>
          <div className="team_name">
            <h3>Veri5ied</h3>
            <p>
              Software Engineer, building and making the web accessible to many
            </p>
            <FaTwitter size={26} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
