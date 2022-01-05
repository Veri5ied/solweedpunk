import HeroImage from "../../assets/grsDRXc.png";
import AboutImage from "../../assets/afzwKAO.png";
import Navbar from "../../components/navigation/Navbar";
import "./Landingpage.css";

function Landingpage() {
  return (
    <div className="landing_page">
      <Navbar />
      <div className="page_body container">
        <div className="page_body_left">
          <h2 className="pb-2">Weed Punkz</h2>
          <p className="pt-2">
            888 collectable Weedpunkz generated with random attributes and
            items. Grab some fun pixel art for you and your buds! SOLD OUT
          </p>
        </div>
        <div className="page_body_right">
          <img src={HeroImage} alt="hero_image" />
        </div>
      </div>

      {/* second layer */}
      <div className="about_page">
        <div className="about_section container">
          <div className="about_page_left">
            <img src={AboutImage} alt="toke toke" />
          </div>
          <div className="about_page_right">
            <h2>What we're about</h2>
            <p className="pt-3">
              We're trying to organically grow a community of fun-loving &
              creative members so we can get together to discuss the finer
              things in life such as: music, pets, weed, and snacks. We would
              love to gather as many artists and creators into our community as
              we can, so we can all have fun creating together and building
              lifelong friendships. . This is an art and community forward
              project with no gimmicky royalties or burns, sorry, although we
              may be open to some floor sweeps. BUT we do plan on doing airdrops
              and more fun art for the community! We will also be donating 10%
              of the mint towards breast cancer(we are going to let the
              community vote the exact charity.)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
