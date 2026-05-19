// import BackgroundOnly from "./Pages/Home/BackgroundOnly";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CursorFollower from "./Components/CursorFollower";
import NavBar from "./Components/NavBar";
import About from "./Pages/About";
import Contact from "./Pages/Contect";
import Aurora from "./Pages/Home/components/Aurora";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import Intro from "./Components/Intro";
import { useState } from "react";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <main>
      {showIntro ? (
        <Intro onFinish={() => setShowIntro(false)} />
      ) : (
        <>
          <CursorFollower />
          <div className="relative overflow-hidden bg-[#020307]">
            {/* BACKGROUND */}
            <div className="absolute inset-0 z-0">
              <Aurora
                colorStops={["#62a58f", "#190856", "#521f1f"]}
                blend={0.62}
                amplitude={1.12}
                speed={0.6}
              />
            </div>

            {/* GRADIENT OVERLAY */}
            <div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(to_bottom,rgba(2,3,7,0)_0%,rgba(2,3,7,0.04)_34%,rgba(2,3,7,0.72)_56%,#020307_78%)]" />

            <div className="relative z-20">
              <NavBar />
              <Home />
            </div>
          </div>
          <About />
          <Skills />
          <Projects />
          <Contact />
        </>
      )}
      <ToastContainer position="top-right" autoClose={3000} />
    </main>
  );
}

export default App;
