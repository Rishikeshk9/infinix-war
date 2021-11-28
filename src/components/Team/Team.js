import "./team.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import "@splidejs/splide/dist/css/splide.min.css";

import { Splide, SplideSlide } from "@splidejs/react-splide";
export default function StarField() {
  return (
    <div className="team" id="team">
      <div className=" m-auto  w-max    transform self-center align-middle items-center  hidden">
        <div className="mat-sphere  mx-auto   "> </div>
      </div>

      <div className="   items-center justify-center sm:items-stretch sm:justify-start mt-14 self-center text-center  h-50 w-full bg-black ">
        <div className=" ml-auto   md:mr-40 w-max hidden lg:block" id="scene">
          <div className="neon-sphere-xlarge ml-auto  " data-depth="0.2"></div>
        </div>

        <div
          className=" mx-auto  w-max  absolute md:left-44 transform "
          id="scene2"
        >
          <div className="mat-sphere  mx-auto   -mt-12" data-depth="0.1"></div>
        </div>

        <div
          className="   w-max  absolute md:left-10 transform hidden lg:block"
          id="scene5"
        >
          <div
            className="mat-sphere-small  mx-auto   -mt-12"
            data-depth="0.1"
          ></div>
        </div>
      </div>

      <h4 className="uppercase text-center text-white text-5xl self-center mx-auto justify-center font-bold mt-3 mb-6 z-100">
        TEAM
      </h4>
      <div className="flex  ">
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
            <div
              className="mx-20 sm:mx-6 my-5 py-6   
              hover:bg-black   border-0.5 border-transparent  
            rounded-xl  team-card transition-all duration-500 bg-shadow"
            >
              <div className="mb-5 ">
                <div className="h-24 w-24 bg-white rounded-full mx-auto m-5"></div>
                <h3 className="text-white text-lg leading-5  uppercase font-semibold ">
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
            <div
              className="mx-20 sm:mx-6 my-5 py-6   
              hover:bg-black   border-0.5 border-transparent  
            rounded-xl  team-card transition-all duration-500 bg-shadow"
            >
              <div className="mb-5 ">
                <div className="h-24 w-24 bg-white rounded-full mx-auto m-5"></div>
                <h3 className="text-white text-lg leading-5  uppercase font-semibold ">
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
            <div
              className="mx-20 sm:mx-6 my-5 py-6   
              hover:bg-black   border-0.5 border-transparent  
            rounded-xl  team-card transition-all duration-500 bg-shadow"
            >
              <div className="mb-5 ">
                <div className="h-24 w-24 bg-white rounded-full mx-auto m-5"></div>
                <h3 className="text-white text-lg leading-5  uppercase font-semibold ">
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
            <div
              className="mx-20 sm:mx-6 my-5 py-6   
              hover:bg-black   border-0.5 border-transparent  
            rounded-xl  team-card transition-all duration-500 bg-shadow"
            >
              <div className="mb-5 ">
                <div className="h-24 w-24 bg-white rounded-full mx-auto m-5"></div>
                <h3 className="text-white text-lg leading-5  uppercase font-semibold ">
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
            <div
              className="mx-20 sm:mx-6 my-5 py-6   
              hover:bg-black   border-0.5 border-transparent  
            rounded-xl  team-card transition-all duration-500 bg-shadow"
            >
              <div className="mb-5 ">
                <div className="h-24 w-24 bg-white rounded-full mx-auto m-5"></div>
                <h3 className="text-white text-lg leading-5  uppercase font-semibold ">
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
            <div
              className="mx-20 sm:mx-6 my-5 py-6   
              hover:bg-black   border-0.5 border-transparent  
            rounded-xl  team-card transition-all duration-500 bg-shadow"
            >
              <div className="mb-5 ">
                <div className="h-24 w-24 bg-white rounded-full mx-auto m-5"></div>
                <h3 className="text-white text-lg leading-5  uppercase font-semibold ">
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
            <div
              className="mx-20 sm:mx-6 my-5 py-6   
              hover:bg-black   border-0.5 border-transparent  
            rounded-xl  team-card transition-all duration-500 bg-shadow"
            >
              <div className="mb-5 ">
                <div className="h-24 w-24 bg-white rounded-full mx-auto m-5"></div>
                <h3 className="text-white text-lg leading-5  uppercase font-semibold ">
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
            <div
              className="mx-20 sm:mx-6 my-5 py-6   
              hover:bg-black   border-0.5 border-transparent  
            rounded-xl  team-card transition-all duration-500 bg-shadow"
            >
              <div className="mb-5 ">
                <div className="h-24 w-24 bg-white rounded-full mx-auto m-5"></div>
                <h3 className="text-white text-lg leading-5  uppercase font-semibold ">
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
            <div
              className="mx-20 sm:mx-6 my-5 py-6   
              hover:bg-black   border-0.5 border-transparent  
            rounded-xl  team-card transition-all duration-500 bg-shadow"
            >
              <div className="mb-5 ">
                <div className="h-24 w-24 bg-white rounded-full mx-auto m-5"></div>
                <h3 className="text-white text-lg leading-5  uppercase font-semibold ">
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
            <div
              className="mx-20 sm:mx-6 my-5 py-6   
              hover:bg-black   border-0.5 border-transparent  
            rounded-xl  team-card transition-all duration-500 bg-shadow"
            >
              {" "}
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
            <div
              className="mx-20 sm:mx-6 my-5 py-6   
              hover:bg-black   border-0.5 border-transparent  
            rounded-xl  team-card transition-all duration-500 bg-shadow"
            >
              {" "}
              <div className="mb-5">
                <div className="h-24 w-24 bg-white rounded-full mx-auto m-5"></div>
                <h3 className="text-white text-lg leading-5  uppercase font-semibold">
                  Samarth Gugnani 2
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
            <div
              className="mx-20 sm:mx-6 my-5 py-6   
              hover:bg-black   border-0.5 border-transparent  
            rounded-xl  team-card transition-all duration-500 bg-shadow"
            >
              {" "}
              <div className="mb-5">
                <div className="h-24 w-24 bg-white rounded-full mx-auto m-5"></div>
                <h3 className="text-white text-lg leading-5  uppercase font-semibold">
                  Samarth Gugnani 3
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
