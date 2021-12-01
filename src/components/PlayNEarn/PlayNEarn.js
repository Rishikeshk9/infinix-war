import "./playnearn.css";
import image from "../../assets/images/milky-way.jpg";

export default function PlayNEarn() {
  return (
    <div className="pt-0 lg:pt-0">
      <div className="stage   " data-js="stage"></div>
      {/* <h3 className="uppercase font-bold text-3xl lg:text-6xl text-white text-center  flex whitespace-nowrap mx-auto self-center align-middle justify-center  -mt-96 mb-96">
        CREATE PLAY & EARN
      </h3> */}
      <div className="flex flex-col lg:flex-row lg:mx-5 mx-1 mb-20">
        <img src={image} alt="" className="lg:w-1/2 w-full h-auto"></img>
        <div className="w-full">
          <h2 className="head border w-max py-2 px-6 lg:text-5xl text-3xl mx-auto text-center mt-10 font-bold">
            PLAY
          </h2>
          <div className="flex flex-col text-white">
            <h4 className="p-3 lg:px-72 lg:text-4xl text-2xl my-2 lg:my-4">
              Relax, socialise, have fun and compete
            </h4>
            <p className="px-5 lg:px-40 lg:text-xl lg:mt-4">
              Users can come and play games, entertain friends and network
              through a truly immersive, first-person perspective of a virtual
              reality world.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row-reverse lg:mx-5 mx-1 mb-20">
        <img src={image} alt="" className="lg:w-1/2 w-full h-auto"></img>
        <div className="w-full">
          <h2 className="head border w-max py-2 px-6 lg:text-5xl text-3xl mx-auto text-center mt-10 font-bold">
            EARN
          </h2>
          <div className="flex flex-col text-white">
            <h4 className="p-3 lg:px-60 lg:text-4xl text-2xl my-2 lg:my-4">
              Generate revenue through multiple income streams
            </h4>
            <p className="px-5 lg:px-40 lg:text-xl lg:mt-4">
              infinix will be a land of earning opportunities . Following the
              IDO, inifinix real estate will be made available for infinix to
              purchase. Other opportunities will consist of passive earning,
              staking and advertising.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:mx-5 mx-1 mb-20">
        <img src={image} alt="" className="lg:w-1/2 w-full h-auto"></img>
        <div className="w-full">
          <h2 className="head border w-max py-2 px-6 lg:text-5xl text-3xl mx-auto text-center mt-10 font-bold">
            CREATE
          </h2>
          <div className="flex flex-col text-white">
            <h4 className="p-3 lg:px-72 lg:text-4xl text-2xl my-2 lg:my-4">
              Push the boundaries of your creativity
            </h4>
            <p className="px-5 lg:px-40 lg:text-xl lg:mt-4">
              Create scenes, artworks, challenges and more, using the simple
              builder tool, then take part in events to win prizes. For more
              experienced creators, the SDK provides the tools to fill the world
              with social games and applications
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
