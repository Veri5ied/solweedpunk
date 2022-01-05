import { useState, useEffect } from "react"
import "./App.css";
import Landingpage from "./pages/landingpage/Landingpage";
import Loading from "./components/loading/Loading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  });

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : 
        (
          <Landingpage />
      )
      }
    </div>
  );
}

export default App;
