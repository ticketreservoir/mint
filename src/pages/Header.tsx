import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import linkArrow from "../assets/icon/up-right-arrow.png";
import Logo from "../assets/logo.png";
import Footer from "../layout/Footer";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="relative z-[99999] mb-6 flex items-center justify-between pt-4 px-5 hide-scrollbar sm:mb-10 sm:pt-[30px] md:mb-[50px]">
        <div className="flex items-center">
          <Link to="/" className="mr-[50px]">
            <img
              src={Logo}
              width="80"
              height="80"
              alt="logo"
              className="h-9 w-9 sm:h-10 sm:w-10"
            />
          </Link>
          <div className="hidden items-center gap-[30px] text-sm font-bold text-textGrey md:flex">
            <Link to="functionalities">Functionalities</Link>
            <Link to="/">Register</Link>
          </div>
        </div>
        {/*  */}
        {isOpen && (
          <div
            className="mr-5 absolute right-0 top-full flex w-[250px] flex-col rounded-lg border border-textGrey bg-buttonBg p-5 text-sm shadow-lg"
            style={{ opacity: "1", marginTop: "15px" }}
          >
            <div className="hidden flex-col items-start gap-2.5 text-textGrey md:flex">
              <a href="#">Creator Dashboard</a>
            </div>
            <div className="block md:hidden">
              <div className="flex flex-col items-start gap-3 text-base text-textGrey sm:gap-2.5 sm:text-sm">
                <a className="block md:hidden" href="/functionalities">
                  <div tabIndex={0}>Functionalities</div>
                </a>

                <a className="block md:hidden" href="/">
                  <div tabIndex={0}>About</div>
                </a>
              </div>
              <div className="my-5 border-y border-borderGrey"></div>
              <div className="flex flex-col items-start gap-3 text-base text-textGrey sm:gap-2.5 sm:text-xs">
                <a target="_blank" href="/">
                  <div className="flex items-center" tabIndex={0}>
                    Docs
                    <img
                      alt="link"
                      loading="lazy"
                      width="10"
                      height="10"
                      decoding="async"
                      data-nimg="1"
                      className="ml-2 inline"
                      src={linkArrow}
                      style={{ color: "transparent" }}
                    />
                  </div>
                </a>
                <a target="_blank" href="/">
                  <div className="flex items-center" tabIndex={0}>
                    Mint Club V2 SDK
                    <img
                      alt="link"
                      loading="lazy"
                      width="10"
                      height="10"
                      decoding="async"
                      data-nimg="1"
                      className="ml-2 inline"
                      src={linkArrow}
                      style={{ color: "transparent" }}
                    />
                  </div>
                </a>
                <a href="/">
                  <div className="flex items-center" tabIndex={0}>
                    Terms &amp; Privacy
                    <img
                      alt="link"
                      loading="lazy"
                      width="10"
                      height="10"
                      decoding="async"
                      data-nimg="1"
                      className="ml-2 inline"
                      src={linkArrow}
                      style={{ color: "transparent" }}
                    />
                  </div>
                </a>
                <a href="/">
                  <div className="flex items-center" tabIndex={0}>
                    Protocol Disclaimer
                    <img
                      alt="link"
                      loading="lazy"
                      width="10"
                      height="10"
                      decoding="async"
                      data-nimg="1"
                      className="ml-2 inline"
                      src={linkArrow}
                      style={{ color: "transparent" }}
                    />
                  </div>
                </a>
                <a target="_blank" className="flex items-center" href="/">
                  <div tabIndex={0}>
                    News
                    <img
                      alt="link"
                      loading="lazy"
                      width="10"
                      height="10"
                      decoding="async"
                      data-nimg="1"
                      className="ml-2 inline"
                      src={linkArrow}
                      style={{ color: "transparent" }}
                    />
                  </div>
                </a>
              </div>
              <div className="mt-5 flex items-center gap-3 sm:gap-1">
                <a target="_blank" href="/">
                  <div tabIndex={0}>
                    <svg
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      className="scale-150 sm:scale-100"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 5.25C8.27062 5.25 5.25 8.34703 5.25 12.1707C5.25 15.2332 7.18219 17.8198 9.86531 18.7368C10.2028 18.7973 10.3294 18.5897 10.3294 18.408C10.3294 18.2437 10.3209 17.6987 10.3209 17.1191C8.625 17.4391 8.18625 16.6952 8.05125 16.3059C7.97531 16.1069 7.64625 15.4927 7.35938 15.3283C7.12312 15.1986 6.78562 14.8785 7.35094 14.8698C7.8825 14.8612 8.26219 15.3716 8.38875 15.5792C8.99625 16.626 9.96656 16.3318 10.3547 16.1502C10.4138 15.7003 10.5909 15.3975 10.785 15.2245C9.28312 15.0515 7.71375 14.4546 7.71375 11.8074C7.71375 11.0548 7.97531 10.4319 8.40563 9.94745C8.33812 9.77443 8.10187 9.06505 8.47312 8.11345C8.47312 8.11345 9.03844 7.93178 10.3294 8.82283C10.8694 8.66711 11.4431 8.58925 12.0169 8.58925C12.5906 8.58925 13.1644 8.66711 13.7044 8.82283C14.9953 7.92313 15.5606 8.11345 15.5606 8.11345C15.9319 9.06505 15.6956 9.77443 15.6281 9.94745C16.0584 10.4319 16.32 11.0461 16.32 11.8074C16.32 14.4632 14.7422 15.0515 13.2403 15.2245C13.485 15.4408 13.6959 15.856 13.6959 16.5048C13.6959 17.4305 13.6875 18.1745 13.6875 18.408C13.6875 18.5897 13.8141 18.806 14.1516 18.7368C16.8178 17.8198 18.75 15.2245 18.75 12.1707C18.75 8.34703 15.7294 5.25 12 5.25Z"
                        fill="#848795"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a target="_blank" href="/">
                  <div tabIndex={0}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      shape-rendering="geometricPrecision"
                      text-rendering="geometricPrecision"
                      image-rendering="optimizeQuality"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      viewBox="0 0 512 462.799"
                      width="14"
                      height="14"
                    >
                      <path
                        fill-rule="nonzero"
                        d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
                        fill="#848795"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a target="_blank" href="/">
                  <div tabIndex={0}>
                    <svg
                      version="1.1"
                      viewBox="0 0 512 512"
                      width="18"
                      height="18"
                      xmlns="http://www.w3.org/2000/svg"
                      className="scale-150 sm:scale-100"
                    >
                      <defs id="defs12"></defs>
                      <g id="g3885" transform="translate(297.22034,0)">
                        <path
                          d="M 127.88103,94.198045 -218.4667,227.78507 c -23.63879,9.48433 -23.4986,22.66901 -4.30871,28.54816 l 86.38017,26.96101 33.05108,101.33207 c 4.018041,11.09077 2.03732,15.48953 13.683731,15.48953 8.98786,0 12.97504,-4.09778 17.98087,-8.98786 3.1833,-3.11513 22.08378,-21.49087 43.18752,-42.00936 l 89.85158,66.38643 c 16.5339,9.12161 28.47227,4.39617 32.58935,-15.35577 L 152.92948,122.20987 C 158.96812,98.000015 143.69981,87.018565 127.88103,94.198045 z M -122.83885,277.09998 71.862531,154.2616 c 9.71969,-5.89458 18.63166,-2.72542 11.31455,3.76981 l -166.71528,150.41932 -6.49136,69.23533 -32.809291,-100.58608 z"
                          id="path9"
                          fill="#848795"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}
        <div
          className="relative h-fit w-fit items-center justify-center overflow-hidden rounded-[6px] text-sm font-bold block border-[2px] border-primary/80 bg-black text-white md:hidden"
          tabIndex={0}
          style={{
            boxShadow: "rgb(19, 230, 183) 0px 0px 12px -4px",
            transform: "none",
          }}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <button className="z-1 relative flex h-10 flex-grow items-center justify-center whitespace-nowrap rounded-[8px] p-2 transition-all ease-in-out placeholder:text-textGrey hover:opacity-80 md:p-2.5 md:min-w-0 min-w-fit aspect-square hover:text-white">
            <svg
              className="block md:hidden"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="16"
              height="16"
            >
              <path
                fill="#15e6b7"
                d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Header;
