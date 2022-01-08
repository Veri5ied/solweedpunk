import { FaTwitter } from "react-icons/fa";
import Moon from "../../assets/xQN2bV9.jpg";
import Dank from "../../assets/mWNcDgt.png";
import Meta from "../../assets/metaversol.png";
import Terp from "../../assets/terp.png";
import Nico from "../../assets/nico.jpg";
import Alvin from "../../assets/alvin.png";
import "./Team.css";

function Team() {
  const team = [
    {
      name: "Moonbox",
      role: "Artist and Founder of all things on Solweedpunkz",
      social: "",
      image: `${Moon}`,
    },
    {
      name: "DankMonke",
      role: "Helper monke, Investor, Advisor, Mod, Stuff doer",
      social: "",
      image: `${Dank}`,
    },
    {
      name: "Metaversol",
      role: "Formerly Test Guys - They are the big brains behind our metaverse world",
      social: "",
      image: `${Meta}`,
    },
    {
      name: "Terp Doctor",
      role: "Developer, community builder and moderator.",
      social: "",
      image: `${Terp}`,
    },
    {
      name: "Nico GT",
      role: "Community manager and 3D artist and moderator.",
      social: "",
      image: `${Nico}`,
    },
    {
      name: "Veri5ied",
      role: "Software Engineer, building and making the web accessible to many",
      social: "",
      image: `${Alvin}`,
    },
  ];
  return (
    <>
      <div className="solweedpunk_team_title">
        <h2>SOLWEEDPUNKZ TEAM...</h2>
      </div>
      <div className="solweedpunk_team_details">
        {team.map((tm) => (
          <div className="team" key={tm.id}>
            <div className="team_img">
              <img src={tm.image} alt="team_image" />
            </div>
            <div className="team_name">
              <h3>{tm.name}</h3>
              <p>{tm.role}</p>
              <FaTwitter size={26} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Team;
