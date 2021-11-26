import "./team.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import "@splidejs/splide/dist/css/splide.min.css";

import { Splide, SplideSlide } from "@splidejs/react-splide";
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
        <div className="mat-sphere  mx-auto   "> </div>{" "}
      </div>

      <div className="   items-center justify-center sm:items-stretch sm:justify-start mt-14 self-center text-center  h-50 w-full bg-black ">
        <div className=" ml-auto   md:mr-40 w-max hidden lg:block" id="scene">
          <div className="neon-sphere-xlarge ml-auto  " data-depth="0.2"></div>
        </div>

        <div
          className=" mx-auto  w-max  absolute md:left-44 transform "
          id="scene2"
        >
          <div className="mat-sphere  mx-auto   -mt-12" data-depth="1"></div>
        </div>

        <div
          className=" mx-auto  w-max  absolute md:left-10 transform hidden lg:block"
          id="scene5"
        >
          <div
            className="mat-sphere-small  mx-auto   -mt-12"
            data-depth="1"
          ></div>
        </div>
      </div>

      <div className="hidden ">
        <div className="  grid grid-cols-1  md:grid-cols-3 xl:grid-cols-6     grid-flow-row w-full gap-6 my-5  ">
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

        <div className="  grid grid-cols-1   md:grid-cols-3 xl:grid-cols-6  grid-flow-row w-full gap-6 my-5">
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
        <div className=" grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6  grid-flow-row w-full gap-6 my-5">
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
      <h4 className="uppercase text-center text-white text-5xl self-center mx-auto justify-center font-bold mt-3">
        TEAM
      </h4>
      <div className="flex ">
        <Splide
          className="w-full lg:mx-32"
          options={{
            rewind: true,

            perPage: 4,
            breakpoints: {
              640: {
                perPage: 1,
              },
              960: {
                perPage: 2,
              },
              1280: {
                perPage: 3,
              },
              1920: {
                perPage: 4,
              },
            },
          }}
        >
          <SplideSlide>
            <div className="mx-20 sm:mx-6 my-5 py-6 backdrop-filter backdrop-blur-xl hover:bg-white hover:bg-opacity-10 border-0.5 border-transparent  rounded-xl  team-card transition-all duration-500 ">
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
          </SplideSlide>
          <SplideSlide>
            <div className="mx-20 sm:mx-6 my-5 py-6 backdrop-filter backdrop-blur-xl hover:bg-white hover:bg-opacity-10 border-0.5 border-transparent  rounded-xl  team-card transition-all duration-500 ">
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
          </SplideSlide>
          <SplideSlide>
            <div className="mx-20 sm:mx-6 my-5 py-6 backdrop-filter backdrop-blur-xl hover:bg-white hover:bg-opacity-10 border-0.5 border-transparent  rounded-xl  team-card transition-all duration-500 ">
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
          </SplideSlide>
          <SplideSlide>
            <div className="mx-20 sm:mx-6 my-5 py-6 backdrop-filter backdrop-blur-xl hover:bg-white hover:bg-opacity-10 border-0.5 border-transparent  rounded-xl  team-card transition-all duration-500 ">
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
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}
