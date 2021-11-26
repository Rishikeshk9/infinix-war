import "./team.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
export default function StarField() {
  return (
    <div className="team" id="team">
      <div className="container hidden">
        <h3 className="title tex">Our Team</h3>
        <div className="team-grids">
          <div className="col-xs-4 team-grid">
            <div className="pic">
              <div className="stack twisted">
                <img
                  src="https://www.revolution.com/wp-content/uploads/2015/03/Meredith_Serious.jpg"
                  alt=" "
                  className="img-responsive"
                />
              </div>
            </div>
            <h4 className="text-white">Peter Parker</h4>
            <i className="fa-solid fa-user"></i>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>

      <div className=" m-auto  w-max    transform self-center align-middle items-center  hidden">
        <div className="mat-sphere  mx-auto lg:mat-sphere-large "> </div>{" "}
      </div>

      <div className="   items-center justify-center sm:items-stretch sm:justify-start mt-14 self-center text-center  h-50 w-full bg-black ">
        <div className=" ml-auto -mr-20 md:mr-10 w-max" id="scene">
          <div className="neon-sphere-xlarge ml-auto  " data-depth="0.2"></div>
        </div>

        <div
          className=" mx-auto  w-max  absolute md:left-44 transform "
          id="scene2"
        >
          <div
            className="mat-sphere  mx-auto lg:mat-sphere-large -mt-12"
            data-depth="1"
          ></div>
        </div>

        <div
          className=" mx-auto  w-max  absolute md:left-10 transform hidden lg:block"
          id="scene5"
        >
          <div
            className="mat-sphere-small  mx-auto lg:mat-sphere-large -mt-12"
            data-depth="1"
          ></div>
        </div>
      </div>

      <div className="  grid grid-cols-2   lg:grid-cols-6     grid-flow-row w-full gap-6 my-5 px-5">
        <div className="col-span-1 lg:block hidden"></div>
        {/* hover:border-gray-500 bg-gradient-to-br hover:bg-gradient-to-br hover:from-offwhite  hover:to-transparent  */}
        <div className="backdrop-filter backdrop-blur-md hover:bg-white hover:bg-opacity-5 border-0.5 border-transparent  rounded-xl  team-card transition-all duration-500">
          <div className="mb-5">
            <div className="h-24 w-24 bg-white rounded-full mx-auto m-5"></div>
            <h3 className="text-white text-lg leading-5  uppercase font-semibold">
              Samarth Gugnani
            </h3>
            <p className="text-white text-sm mb-3">
              Founder and blockchain developer
            </p>

            <ul className="social-nav model-3d-0">
              <li>
                <a href="www.infinix.com" className="facebook">
                  <div className="front">
                    <FontAwesomeIcon icon={brands("facebook")} />
                  </div>
                  <div className="back">
                    <FontAwesomeIcon icon={brands("facebook")} />
                  </div>
                </a>
              </li>
              <li>
                <a href="www.infinix.com" className="twitter">
                  <div className="front">
                    <FontAwesomeIcon icon={brands("twitter")} />
                  </div>
                  <div className="back">
                    <FontAwesomeIcon icon={brands("twitter")} />
                  </div>
                </a>
              </li>
              <li>
                <a href="www.infinix.com" className="instagram">
                  <div className="front">
                    <FontAwesomeIcon icon={brands("linkedin")} />
                  </div>
                  <div className="back">
                    <FontAwesomeIcon icon={brands("linkedin")} />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="backdrop-filter backdrop-blur-md hover:bg-white hover:bg-opacity-5 border-0.5 border-transparent  rounded-xl  team-card transition-all duration-500">
          <div className="mb-5">
            <div className="h-24 w-24 bg-white rounded-full mx-auto m-5"></div>
            <h3 className="text-white text-lg leading-5  uppercase font-semibold">
              Samarth Gugnani
            </h3>
            <p className="text-white text-sm mb-3">
              Founder and blockchain developer
            </p>

            <ul className="social-nav model-3d-0">
              <li>
                <a href="www.infinix.com" className="facebook">
                  <div className="front">
                    <FontAwesomeIcon icon={brands("facebook")} />
                  </div>
                  <div className="back">
                    <FontAwesomeIcon icon={brands("facebook")} />
                  </div>
                </a>
              </li>
              <li>
                <a href="www.infinix.com" className="twitter">
                  <div className="front">
                    <FontAwesomeIcon icon={brands("twitter")} />
                  </div>
                  <div className="back">
                    <FontAwesomeIcon icon={brands("twitter")} />
                  </div>
                </a>
              </li>
              <li>
                <a href="www.infinix.com" className="instagram">
                  <div className="front">
                    <FontAwesomeIcon icon={brands("linkedin")} />
                  </div>
                  <div className="back">
                    <FontAwesomeIcon icon={brands("linkedin")} />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="backdrop-filter backdrop-blur-md hover:bg-white hover:bg-opacity-5 border-0.5 border-transparent  rounded-xl  team-card transition-all duration-500">
          <div className="mb-5">
            <div className="h-24 w-24 bg-white rounded-full mx-auto m-5"></div>
            <h3 className="text-white text-lg leading-5  uppercase font-semibold">
              Samarth Gugnani
            </h3>
            <p className="text-white text-sm mb-3">
              Founder and blockchain developer
            </p>

            <ul className="social-nav model-3d-0">
              <li>
                <a href="www.infinix.com" className="facebook">
                  <div className="front">
                    <FontAwesomeIcon icon={brands("facebook")} />
                  </div>
                  <div className="back">
                    <FontAwesomeIcon icon={brands("facebook")} />
                  </div>
                </a>
              </li>
              <li>
                <a href="www.infinix.com" className="twitter">
                  <div className="front">
                    <FontAwesomeIcon icon={brands("twitter")} />
                  </div>
                  <div className="back">
                    <FontAwesomeIcon icon={brands("twitter")} />
                  </div>
                </a>
              </li>
              <li>
                <a href="www.infinix.com" className="instagram">
                  <div className="front">
                    <FontAwesomeIcon icon={brands("linkedin")} />
                  </div>
                  <div className="back">
                    <FontAwesomeIcon icon={brands("linkedin")} />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="backdrop-filter backdrop-blur-md hover:bg-white hover:bg-opacity-5 border-0.5 border-transparent  rounded-xl  team-card transition-all duration-500">
          <div className="mb-5">
            <div className="h-24 w-24 bg-white rounded-full mx-auto m-5"></div>
            <h3 className="text-white text-lg leading-5  uppercase font-semibold">
              Samarth Gugnani
            </h3>
            <p className="text-white text-sm mb-3">
              Founder and blockchain developer
            </p>

            <ul className="social-nav model-3d-0">
              <li>
                <a href="www.infinix.com" className="facebook">
                  <div className="front">
                    <FontAwesomeIcon icon={brands("facebook")} />
                  </div>
                  <div className="back">
                    <FontAwesomeIcon icon={brands("facebook")} />
                  </div>
                </a>
              </li>
              <li>
                <a href="www.infinix.com" className="twitter">
                  <div className="front">
                    <FontAwesomeIcon icon={brands("twitter")} />
                  </div>
                  <div className="back">
                    <FontAwesomeIcon icon={brands("twitter")} />
                  </div>
                </a>
              </li>
              <li>
                <a href="www.infinix.com" className="instagram">
                  <div className="front">
                    <FontAwesomeIcon icon={brands("linkedin")} />
                  </div>
                  <div className="back">
                    <FontAwesomeIcon icon={brands("linkedin")} />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="  grid grid-cols-2 px-5 lg:grid-cols-6  grid-flow-row w-full gap-6 my-5">
        <div className="col-span-1 lg:block hidden"></div>
        <div className="backdrop-filter backdrop-blur-md hover:bg-white hover:bg-opacity-5 border-0.5 border-transparent  rounded-xl  team-card transition-all duration-500">
          <div className="mb-5">
            <div className="h-24 w-24 bg-white rounded-full mx-auto m-5"></div>
            <h3 className="text-white text-lg leading-5  uppercase font-semibold">
              Samarth Gugnani
            </h3>
            <p className="text-white text-sm mb-3">
              Founder and blockchain developer
            </p>

            <ul className="social-nav model-3d-0">
              <li>
                <a href="www.infinix.com" className="facebook">
                  <div className="front">
                    <FontAwesomeIcon icon={brands("facebook")} />
                  </div>
                  <div className="back">
                    <FontAwesomeIcon icon={brands("facebook")} />
                  </div>
                </a>
              </li>
              <li>
                <a href="www.infinix.com" className="twitter">
                  <div className="front">
                    <FontAwesomeIcon icon={brands("twitter")} />
                  </div>
                  <div className="back">
                    <FontAwesomeIcon icon={brands("twitter")} />
                  </div>
                </a>
              </li>
              <li>
                <a href="www.infinix.com" className="instagram">
                  <div className="front">
                    <FontAwesomeIcon icon={brands("linkedin")} />
                  </div>
                  <div className="back">
                    <FontAwesomeIcon icon={brands("linkedin")} />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="backdrop-filter backdrop-blur-md hover:bg-white hover:bg-opacity-5 border-0.5 border-transparent  rounded-xl  team-card transition-all duration-500">
          <div className="mb-5">
            <div className="h-24 w-24 bg-white rounded-full mx-auto m-5"></div>
            <h3 className="text-white text-lg leading-5  uppercase font-semibold">
              Samarth Gugnani
            </h3>
            <p className="text-white text-sm mb-3">
              Founder and blockchain developer
            </p>

            <ul className="social-nav model-3d-0">
              <li>
                <a href="www.infinix.com" className="facebook">
                  <div className="front">
                    <FontAwesomeIcon icon={brands("facebook")} />
                  </div>
                  <div className="back">
                    <FontAwesomeIcon icon={brands("facebook")} />
                  </div>
                </a>
              </li>
              <li>
                <a href="www.infinix.com" className="twitter">
                  <div className="front">
                    <FontAwesomeIcon icon={brands("twitter")} />
                  </div>
                  <div className="back">
                    <FontAwesomeIcon icon={brands("twitter")} />
                  </div>
                </a>
              </li>
              <li>
                <a href="www.infinix.com" className="instagram">
                  <div className="front">
                    <FontAwesomeIcon icon={brands("linkedin")} />
                  </div>
                  <div className="back">
                    <FontAwesomeIcon icon={brands("linkedin")} />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="backdrop-filter backdrop-blur-md hover:bg-white hover:bg-opacity-5 border-0.5 border-transparent  rounded-xl  team-card transition-all duration-500">
          <div className="mb-5">
            <div className="h-24 w-24 bg-white rounded-full mx-auto m-5"></div>
            <h3 className="text-white text-lg leading-5  uppercase font-semibold">
              Samarth Gugnani
            </h3>
            <p className="text-white text-sm mb-3">
              Founder and blockchain developer
            </p>

            <ul className="social-nav model-3d-0">
              <li>
                <a href="www.infinix.com" className="facebook">
                  <div className="front">
                    <FontAwesomeIcon icon={brands("facebook")} />
                  </div>
                  <div className="back">
                    <FontAwesomeIcon icon={brands("facebook")} />
                  </div>
                </a>
              </li>
              <li>
                <a href="www.infinix.com" className="twitter">
                  <div className="front">
                    <FontAwesomeIcon icon={brands("twitter")} />
                  </div>
                  <div className="back">
                    <FontAwesomeIcon icon={brands("twitter")} />
                  </div>
                </a>
              </li>
              <li>
                <a href="www.infinix.com" className="instagram">
                  <div className="front">
                    <FontAwesomeIcon icon={brands("linkedin")} />
                  </div>
                  <div className="back">
                    <FontAwesomeIcon icon={brands("linkedin")} />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="backdrop-filter backdrop-blur-md hover:bg-white hover:bg-opacity-5 border-0.5 border-transparent  rounded-xl  team-card transition-all duration-500">
          <div className="mb-5">
            <div className="h-24 w-24 bg-white rounded-full mx-auto m-5"></div>
            <h3 className="text-white text-lg leading-5  uppercase font-semibold">
              Samarth Gugnani
            </h3>
            <p className="text-white text-sm mb-3">
              Founder and blockchain developer
            </p>

            <ul className="social-nav model-3d-0">
              <li>
                <a href="www.infinix.com" className="facebook">
                  <div className="front">
                    <FontAwesomeIcon icon={brands("facebook")} />
                  </div>
                  <div className="back">
                    <FontAwesomeIcon icon={brands("facebook")} />
                  </div>
                </a>
              </li>
              <li>
                <a href="www.infinix.com" className="twitter">
                  <div className="front">
                    <FontAwesomeIcon icon={brands("twitter")} />
                  </div>
                  <div className="back">
                    <FontAwesomeIcon icon={brands("twitter")} />
                  </div>
                </a>
              </li>
              <li>
                <a href="www.infinix.com" className="instagram">
                  <div className="front">
                    <FontAwesomeIcon icon={brands("linkedin")} />
                  </div>
                  <div className="back">
                    <FontAwesomeIcon icon={brands("linkedin")} />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-2 px-5 lg:grid-cols-6  grid-flow-row w-full gap-6 my-5">
        <div className="col-span-1 lg:block hidden"></div>
        <div className="backdrop-filter backdrop-blur-md hover:bg-white hover:bg-opacity-5 border-0.5 border-transparent  rounded-xl  team-card transition-all duration-500">
          <div className="mb-5">
            <div className="h-24 w-24 bg-white rounded-full mx-auto m-5"></div>
            <h3 className="text-white text-lg leading-5  uppercase font-semibold">
              Samarth Gugnani
            </h3>
            <p className="text-white text-sm mb-3">
              Founder and blockchain developer
            </p>

            <ul className="social-nav model-3d-0">
              <li>
                <a href="www.infinix.com" className="facebook">
                  <div className="front">
                    <FontAwesomeIcon icon={brands("facebook")} />
                  </div>
                  <div className="back">
                    <FontAwesomeIcon icon={brands("facebook")} />
                  </div>
                </a>
              </li>
              <li>
                <a href="www.infinix.com" className="twitter">
                  <div className="front">
                    <FontAwesomeIcon icon={brands("twitter")} />
                  </div>
                  <div className="back">
                    <FontAwesomeIcon icon={brands("twitter")} />
                  </div>
                </a>
              </li>
              <li>
                <a href="www.infinix.com" className="instagram">
                  <div className="front">
                    <FontAwesomeIcon icon={brands("linkedin")} />
                  </div>
                  <div className="back">
                    <FontAwesomeIcon icon={brands("linkedin")} />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="backdrop-filter backdrop-blur-md hover:bg-white hover:bg-opacity-5 border-0.5 border-transparent  rounded-xl  team-card transition-all duration-500">
          <div className="mb-5">
            <div className="h-24 w-24 bg-white rounded-full mx-auto m-5"></div>
            <h3 className="text-white text-lg leading-5  uppercase font-semibold">
              Samarth Gugnani
            </h3>
            <p className="text-white text-sm mb-3">
              Founder and blockchain developer
            </p>

            <ul className="social-nav model-3d-0">
              <li>
                <a href="www.infinix.com" className="facebook">
                  <div className="front">
                    <FontAwesomeIcon icon={brands("facebook")} />
                  </div>
                  <div className="back">
                    <FontAwesomeIcon icon={brands("facebook")} />
                  </div>
                </a>
              </li>
              <li>
                <a href="www.infinix.com" className="twitter">
                  <div className="front">
                    <FontAwesomeIcon icon={brands("twitter")} />
                  </div>
                  <div className="back">
                    <FontAwesomeIcon icon={brands("twitter")} />
                  </div>
                </a>
              </li>
              <li>
                <a href="www.infinix.com" className="instagram">
                  <div className="front">
                    <FontAwesomeIcon icon={brands("linkedin")} />
                  </div>
                  <div className="back">
                    <FontAwesomeIcon icon={brands("linkedin")} />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="backdrop-filter backdrop-blur-md hover:bg-white hover:bg-opacity-5 border-0.5 border-transparent  rounded-xl  team-card transition-all duration-500">
          <div className="mb-5">
            <div className="h-24 w-24 bg-white rounded-full mx-auto m-5"></div>
            <h3 className="text-white text-lg leading-5  uppercase font-semibold">
              Samarth Gugnani
            </h3>
            <p className="text-white text-sm mb-3">
              Founder and blockchain developer
            </p>

            <ul className="social-nav model-3d-0">
              <li>
                <a href="www.infinix.com" className="facebook">
                  <div className="front">
                    <FontAwesomeIcon icon={brands("facebook")} />
                  </div>
                  <div className="back">
                    <FontAwesomeIcon icon={brands("facebook")} />
                  </div>
                </a>
              </li>
              <li>
                <a href="www.infinix.com" className="twitter">
                  <div className="front">
                    <FontAwesomeIcon icon={brands("twitter")} />
                  </div>
                  <div className="back">
                    <FontAwesomeIcon icon={brands("twitter")} />
                  </div>
                </a>
              </li>
              <li>
                <a href="www.infinix.com" className="instagram">
                  <div className="front">
                    <FontAwesomeIcon icon={brands("linkedin")} />
                  </div>
                  <div className="back">
                    <FontAwesomeIcon icon={brands("linkedin")} />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="backdrop-filter backdrop-blur-md hover:bg-white hover:bg-opacity-5 border-0.5 border-transparent  rounded-xl  team-card transition-all duration-500">
          <div className="mb-5">
            <div className="h-24 w-24 bg-white rounded-full mx-auto m-5"></div>
            <h3 className="text-white text-lg leading-5  uppercase font-semibold">
              Samarth Gugnani
            </h3>
            <p className="text-white text-sm mb-3">
              Founder and blockchain developer
            </p>

            <ul className="social-nav model-3d-0">
              <li>
                <a href="www.infinix.com" className="facebook">
                  <div className="front">
                    <FontAwesomeIcon icon={brands("facebook")} />
                  </div>
                  <div className="back">
                    <FontAwesomeIcon icon={brands("facebook")} />
                  </div>
                </a>
              </li>
              <li>
                <a href="www.infinix.com" className="twitter">
                  <div className="front">
                    <FontAwesomeIcon icon={brands("twitter")} />
                  </div>
                  <div className="back">
                    <FontAwesomeIcon icon={brands("twitter")} />
                  </div>
                </a>
              </li>
              <li>
                <a href="www.infinix.com" className="instagram">
                  <div className="front">
                    <FontAwesomeIcon icon={brands("linkedin")} />
                  </div>
                  <div className="back">
                    <FontAwesomeIcon icon={brands("linkedin")} />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
