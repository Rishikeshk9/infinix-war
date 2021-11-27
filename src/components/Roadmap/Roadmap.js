import "./roadmap.css";

export default function PlayNEarn() {
  return (
    <div className="relative   ">
      <h3 className="uppercase font-bold text-3xl lg:text-6xl text-white text-center  flex whitespace-nowrap mx-auto self-center align-middle justify-center ">
        ROADMAP
      </h3>
      <div className="grid lg:grid-cols-6 grid-cols-2 mt-10">
        <div className="col-span-1"></div>
        <div
          className="card col-span-2 mx-20 sm:mx-6 my-5 py-6 backdrop-filter backdrop-blur-xl bg-white 
              hover:bg-white hover:bg-opacity-20 border-0.5 border-transparent  bg-opacity-1
            rounded-xl  team-card transition-all duration-500 "
        >
          <div className="mb-5  px-12">
            <div className="h-24 w-24 bg-white rounded-full mx-auto m-5"></div>
            <h3 className="text-white text-lg leading-5  uppercase font-semibold">
              PHASE I
            </h3>
            <ul className="text-white">
              <li>Releasing leader board for the game </li>
              <li>Releasing team vs team and pvp game</li>{" "}
              <li>Relasing more levels for 2.5 d game and story v2</li>{" "}
              <li>
                Work on next game will be made with unreal engine and will be 3d
                5. relasing nfts for the next game
              </li>
            </ul>
          </div>
        </div>
        <div className=" col-span-2  "></div>
        <div className="col-span-1"></div>
        <div className="col-span-3"></div>

        <div
          className="card col-span-2 mx-20 sm:mx-6 my-5 py-6 backdrop-filter backdrop-blur-xl bg-white 
              hover:bg-white hover:bg-opacity-20 border-0.5 border-transparent  bg-opacity-1
            rounded-xl  team-card transition-all duration-500 "
        >
          <div className="mb-5  px-12">
            <div className="h-24 w-24 bg-white rounded-full mx-auto m-5"></div>
            <h3 className="text-white text-lg leading-5  uppercase font-semibold">
              PHASE II
            </h3>
            <ul className="text-white">
              <li>Will release nft staking for the v2 game</li>
              <li>
                Keep working on the game meanwhile will go for cross chain nfts
              </li>{" "}
              <li>V1 game will be releasing levels</li>{" "}
              <li>Will release trailer for the next game</li>
            </ul>
          </div>
        </div>
        <div className="col-span-1"></div>

        <div className="col-span-1"></div>

        <div
          className="card col-span-2 mx-20 sm:mx-6 my-5 py-6 backdrop-filter backdrop-blur-xl bg-white 
              hover:bg-white hover:bg-opacity-20 border-0.5 border-transparent  bg-opacity-1
            rounded-xl  team-card transition-all duration-500 "
        >
          <div className="mb-5  px-12">
            <div className="h-24 w-24 bg-white rounded-full mx-auto m-5"></div>
            <h3 className="text-white text-lg leading-5  uppercase font-semibold">
              PHASE III
            </h3>
            <ul className="text-white">
              <li>Release the next game 2.</li>
              <li>
                {" "}
                keep in imporving the game Will release levels and governece in
                the game
              </li>{" "}
            </ul>
          </div>
        </div>
        <div className="col-span-3"></div>
        <div className="col-span-3"></div>

        <div
          className="card col-span-2 mx-20 sm:mx-6 my-5 py-6 backdrop-filter backdrop-blur-xl bg-white 
              hover:bg-white hover:bg-opacity-20 border-0.5 border-transparent  bg-opacity-1
            rounded-xl  team-card transition-all duration-500 "
        >
          <div className="mb-5  px-12">
            <div className="h-24 w-24 bg-white rounded-full mx-auto m-5"></div>
            <h3 className="text-white text-lg leading-5  uppercase font-semibold">
              PHASE IV
            </h3>
            <ul className="text-white">
              <li>Releasing tralier for the game</li>
              <li>
                Releasing the erc20 token on multichains like bsc, polygon,
                ethereum
              </li>{" "}
              <li>Public Sale</li> <li>Releasing token on eth, bsc, polygon</li>
              <li>Releasing liquidity pools to farm key key token</li>
              <li>Key token will mint nft</li>
              <li>Releasing in game nfts for the game</li>
              <li>Relasing game 2.5 D</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
