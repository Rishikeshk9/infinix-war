import "./footer.css";

export default function StarField() {
  return (
    <div className="   items-center justify-center     self-center text-center  w-full bg-black my-10 py-10">
      <div className=" mr-auto  w-max" id="scene3">
        <div className="neon-sphere mr-auto  " data-depth="0.6">
          {" "}
        </div>{" "}
      </div>
      <div className=" mx-auto  w-max  my-10 " id="scene4">
        <div className="mat-sphere-large  mx-auto " data-depth="1">
          {" "}
        </div>{" "}
      </div>
      <div class="footer-basic w-full">
        <footer>
          <h3 className="mx-auto text-white lg:text-5xl text-4xl font-extrabold my-10">
            INFINIX WAR
          </h3>
          <div class="social w-max mx-auto">
            <div className="  w-max self-center    flex  lg:px-28 px-8 ">
              <div className="btn btn1 mt-44 ">
                <div className="icon  ">
                  <svg viewBox="0 0 22 18" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M21.162 2.656C20.3986 2.9937 19.589 3.21548 18.76 3.314C19.6337 2.79144 20.2877 1.96902 20.6 1C19.78 1.488 18.881 1.83 17.944 2.015C17.3146 1.34158 16.4804 0.894966 15.5709 0.744588C14.6615 0.594209 13.7279 0.748494 12.9153 1.18346C12.1026 1.61842 11.4564 2.30969 11.0771 3.1498C10.6978 3.9899 10.6067 4.93178 10.818 5.829C9.1551 5.74566 7.52832 5.31353 6.04328 4.56067C4.55823 3.80781 3.24812 2.75105 2.19799 1.459C1.82628 2.09745 1.63095 2.82323 1.63199 3.562C1.63199 5.012 2.36999 6.293 3.49199 7.043C2.828 7.0221 2.17862 6.84278 1.59799 6.52V6.572C1.59819 7.5377 1.93236 8.47362 2.54384 9.22106C3.15532 9.96851 4.00647 10.4815 4.95299 10.673C4.33661 10.84 3.6903 10.8647 3.06299 10.745C3.32986 11.5762 3.85 12.3032 4.55058 12.8241C5.25117 13.345 6.09712 13.6338 6.96999 13.65C6.10247 14.3313 5.10917 14.835 4.04687 15.1322C2.98458 15.4294 1.87412 15.5143 0.778992 15.382C2.69069 16.6114 4.91609 17.2641 7.18899 17.262C14.882 17.262 19.089 10.889 19.089 5.362C19.089 5.182 19.084 5 19.076 4.822C19.8949 4.23017 20.6016 3.49702 21.163 2.657L21.162 2.656Z"
                      fill="white"
                    ></path>
                  </svg>
                </div>
              </div>

              <div className="btn btn2">
                <div className="icon">
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM6.89 11.17L6.903 11.163L7.773 14.033C7.885 14.344 8.039 14.4 8.226 14.374C8.414 14.349 8.513 14.248 8.636 14.13L9.824 12.982L12.374 14.87C12.84 15.127 13.175 14.994 13.291 14.438L14.948 6.616C15.131 5.888 14.811 5.596 14.246 5.828L4.513 9.588C3.849 9.854 3.853 10.226 4.393 10.391L6.89 11.171V11.17Z"
                      fill="white"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="btn btn3">
                <div className="icon">
                  <svg
                    viewBox="0 0 18 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.076 9C7.676 9 8.162 9.45 8.151 10C8.151 10.55 7.677 11 7.076 11C6.486 11 6 10.55 6 10C6 9.45 6.475 9 7.076 9ZM10.924 9C11.525 9 12 9.45 12 10C12 10.55 11.525 11 10.924 11C10.334 11 9.849 10.55 9.849 10C9.849 9.45 10.323 9 10.924 9ZM15.891 0C17.054 0 18 0.966 18 2.163V21L15.789 19.005L14.544 17.829L13.227 16.579L13.773 18.522H2.109C0.946 18.522 0 17.556 0 16.359V2.163C0 0.966 0.946 0 2.109 0H15.89H15.891ZM11.921 13.713C14.194 13.64 15.069 12.117 15.069 12.117C15.069 8.736 13.587 5.995 13.587 5.995C12.107 4.862 10.697 4.893 10.697 4.893L10.553 5.061C12.302 5.607 13.114 6.395 13.114 6.395C12.1591 5.85699 11.1066 5.51434 10.018 5.387C9.32744 5.309 8.62993 5.31572 7.941 5.407C7.879 5.407 7.827 5.418 7.766 5.428C7.406 5.46 6.531 5.596 5.431 6.09C5.051 6.268 4.824 6.395 4.824 6.395C4.824 6.395 5.678 5.565 7.529 5.019L7.426 4.893C7.426 4.893 6.017 4.862 4.536 5.996C4.536 5.996 3.055 8.736 3.055 12.117C3.055 12.117 3.919 13.639 6.192 13.713C6.192 13.713 6.572 13.241 6.882 12.842C5.575 12.442 5.082 11.602 5.082 11.602C5.082 11.602 5.184 11.676 5.369 11.781C5.379 11.791 5.389 11.802 5.41 11.812C5.441 11.834 5.472 11.844 5.503 11.865C5.76 12.012 6.017 12.127 6.253 12.222C6.675 12.39 7.179 12.558 7.766 12.674C8.64532 12.8464 9.54941 12.8498 10.43 12.684C10.9429 12.5925 11.4433 12.4411 11.921 12.233C12.281 12.096 12.682 11.896 13.104 11.613C13.104 11.613 12.59 12.474 11.242 12.863C11.551 13.262 11.922 13.713 11.922 13.713H11.921Z"
                      fill="white"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <ul class="list-inline flex mx-auto  w-max">
            <li class="list-inline-item">
              <a href="#about">About</a>
            </li>
            <li class="list-inline-item">
              <a href="#roadmap">Roadmap</a>
            </li>
            <li class="list-inline-item">
              <a href="#team">Team</a>
            </li>
            <li class="list-inline-item">
              <a href="#about">About</a>
            </li>
            <li class="list-inline-item">
              <a href="#whitepaper">Whitepaper</a>
            </li>
          </ul>
          <p class="copyright">Infinix War ?? 2021</p>
        </footer>
      </div>
    </div>
  );
}
