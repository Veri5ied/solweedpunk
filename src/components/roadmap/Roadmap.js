import "./Roadmap.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaHourglassStart } from "react-icons/fa";

export default function Roadmap() {
  return (
    <div className="roadmap">
      <div className="roadmap__body container">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<FaHourglassStart />}
            layout="1-column-left"
          >
            <h3 className="vertical-timeline-element-title">Staking</h3>
            <p>Implementation of Toke Toke'n staking</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<FaHourglassStart />}
          >
            <h3 className="vertical-timeline-element-title">The Dispensary</h3>
            <p>
              Toke Toke'n integration into our native website, for purchasing
              art.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<FaHourglassStart />}
          >
            <h3 className="vertical-timeline-element-title">Metaversol</h3>
            <p>
              Paternership with Metaversol to build our own cannabis themed
              planet with art based marketplaces
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<FaHourglassStart />}
          >
            <h3 className="vertical-timeline-element-title">Onboarding</h3>
            <p>
              Begin working with various artust across the solana ecosystem &
              integrating them into our metaverse. We want to become the place
              to come hangout and talk about artists in all forms of media,
              explore and create
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}
