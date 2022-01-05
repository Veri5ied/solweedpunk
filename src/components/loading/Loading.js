import TokeToke from "../../assets/toke-toke.gif";
import "./Loading.css";

function Loading() {
  return (
    <div className="loading_bg">
      <div className="loading">
        <img src={TokeToke} alt="toke toke" />
      </div>
    </div>
  );
}

export default Loading;
