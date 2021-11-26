import "./index.css";
import videoLink from "./assets/videos/infinix-war.webm";
import Navbar from "./components/Navbar/Navbar";
//import Parallax from "parallax-js";
import ReactPlayer from "react-player";
import AnimatedCursor from "react-animated-cursor";
import Landing from "./components/Landing/Landing";

import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";
import PlayNEarn from "./components/PlayNEarn/PlayNEarn";

export default function App() {
  return (
    <>
      <AnimatedCursor />

      <Navbar />

      <ReactPlayer
        url={videoLink}
        playing={true}
        controls={false}
        muted={true}
        height="100%"
        width="100%"
        loop={true}
        className="video-player  md:w-full mt-20 self-center h-screen w-screen"
        config={{
          file: {
            src: { videoLink },
          },
        }}
      />

      <Landing></Landing>
      <PlayNEarn></PlayNEarn>

      <Team id="team"></Team>
      <Footer></Footer>
    </>
  );
}
