import "./index.css";
import videoLink from "./assets/videos/infinix-war.webm";
import Navbar from "./components/Navbar/Navbar";
//import Parallax from "parallax-js";
import ReactPlayer from "react-player";
import AnimatedCursor from "react-animated-cursor";
import Landing from "./components/Landing/Landing";

import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";
import Roadmap from "./components/Roadmap/Roadmap";

import PlayNEarn from "./components/PlayNEarn/PlayNEarn";
import React, { useState } from "react";

export default function App() {
  const [mute, setMute] = useState(true);

  return (
    <>
      <AnimatedCursor />

      <Navbar />
      <Landing></Landing>

      <div className="  p-2 w-screen static pt-24  lg:pt-0 mb-10">
        <ReactPlayer
          url={videoLink}
          playing={true}
          controls={false}
          muted={mute}
          height="100%"
          width="100%"
          loop={true}
          className="video-player  md:w-full self-center h-screen  z-100"
          config={{
            file: {
              src: { videoLink },
            },
          }}
        />

        <div
          className="bg-white bg-opacity-5 lg:w-32 lg:h-32 mx-auto rounded-full absolute "
          onClick={() => setMute(!mute)}
        >
          <i class="fas fa-volume-up text-white"></i>
        </div>
      </div>

      <PlayNEarn className=""></PlayNEarn>

      <Roadmap></Roadmap>

      <Team></Team>
      <Footer></Footer>
    </>
  );
}
