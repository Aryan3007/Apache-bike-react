import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

import Footer from "./Footer";
// import Menu from "./Menu";

function Main() {

  const slideright = () => {
    let slides = document.getElementById("slider");
    slides.scrollLeft = slides.scrollLeft + slides.clientWidth;
    slidetop();
  };

  const slideleft = () => {
    let slides = document.getElementById("slider");
    slides.scrollLeft = slides.scrollLeft - slides.clientWidth;
    slidedown();
  };
  const slidetop = () => {
    let nameslider = document.getElementById("nameslider");
    nameslider.scrollTop = nameslider.scrollTop + 210;
  };
  const slidedown = () => {
    let nameslider = document.getElementById("nameslider");
    nameslider.scrollTop = nameslider.scrollTop - 210;
  };

  const sliderightmob = () => {
    let slides = document.getElementById("slider");
    slides.scrollLeft = slides.scrollLeft + slides.clientWidth;
    slidetopmob();
  };

  const slideleftmob = () => {
    let slides = document.getElementById("slider");
    slides.scrollLeft = slides.scrollLeft - slides.clientWidth;
    slidedownmob();
  };
  const slidetopmob = () => {
    let downslide = document.getElementById("downslide");
    downslide.scrollTop = downslide.scrollTop + 50;
  };
  const slidedownmob = () => {
    let downslide = document.getElementById("downslide");
    downslide.scrollTop = downslide.scrollTop - 50;
  };
  return (
    <div className="h-full w-full">
      <div className="flex -flex-row w-full h-full">
        <div className="bg-white w-1/2 h-screen"></div>
        <div className="bg-red-700 w-3 h-screen"></div>
        <div className="bg-zinc-800 w-1/2 h-screen flex overflow-hidden justify-end"></div>
      </div>

      <div
        id="nameslider"
        className=" h-44 flex justify-start items-center flex-col overflow-auto kawasaki scroll-smooth w-full text-center"
      >
        <h1 className=" font-bold w-full">TVS Apache RTR 160</h1>
        <h1 className=" font-bold w-full">TVS Apache RR 310</h1>
        <h1 className=" font-bold w-full">TVS Apache RP 165</h1>
        <h1 className=" font-bold w-full">TVS Apache RTR 180</h1>
        <h1 className=" font-bold w-full">TVS Apache RTR 200</h1>
      </div>
      <div
        id="slider"
        className="h-96 w-full drag image justify-start flex flex-row overflow-auto scroll-smooth"
      >
        <div className=" h-full w-[100%] flex justify-center flex-row items overflow-x-scroll whitespace-nowrap scroll flex-shrink-0 scroll-smooth">
          <img
            className=""
            src="https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/homepage/Apache-Series/webp-images/Apache-160-4V---593-x-479-Pix---Slant-Male-Side-1.webp"
            alt=""
          />
        </div>

        <div className=" h-full w-[100%] flex justify-center flex-row items overflow-x-scroll whitespace-nowrap scroll flex-shrink-0 scroll-smooth">
          <img
            className=""
            src="https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/homepage/Apache-Series/webp-images/rr-310.webp"
            alt=""
          />
        </div>

        <div className=" h-full w-[100%] flex justify-center flex-row items overflow-x-scroll whitespace-nowrap scroll flex-shrink-0 scroll-smooth">
          <img
            className=""
            src="https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/Rp-165/webp-images/New-Rp-165.webp"
            alt=""
          />
        </div>
        <div className=" h-full w-[100%] flex justify-center flex-row items overflow-x-scroll whitespace-nowrap scroll flex-shrink-0 scroll-smooth">
          <img
            className=""
            src="https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/Apache-RTR/Apache-RTR-180/08-09-22/webp-images/RTR-180.webp"
            alt=""
          />
        </div>
        <div className=" h-full w-[100%] flex justify-center flex-row items overflow-x-scroll whitespace-nowrap scroll flex-shrink-0 scroll-smooth">
          <img
            className=""
            src="https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/homepage/Apache-Series/2022/webp-images/RTR-200-4V-Blue---593-x-479-pix-new.webp"
            alt=""
          />
        </div>
      </div>

      <div className="details w-full flex flex-row gap-4 col ">
        <div className="w-[40%] downdetail">
          <p className="para">
            Innovation at the Helm TVS Motor’s strength lies in its extensive
            research and development, resulting in products that are industry
            leading in terms of innovation.
          </p>
          <div id="downslide" className="drag h-12 overflow-auto scroll-smooth nn w-full namediv">
            <h1 className="py-2 text-2xl font-semibold">
              TVS Apache RTR 160 4V
            </h1>
            <h1 className="py-2 text-2xl font-semibold">TVS Apache RR 310</h1>
            <h1 className="py-2 text-2xl font-semibold">TVS Apache RP 165</h1>
            <h1 className="py-2 text-2xl font-semibold">TVS Apache RTR 180</h1>
            <h1 className="py-2 text-2xl font-semibold">TVS Apache RTR 200 4V</h1>
          </div>
        </div>

        <div className="flex flex-row gap-8 items-center justify-center mr-10 btns btnmob">
          <div
            onClick={slideleftmob}
            className="bg-white rounded-full p-3 flex items-center nextbtn"
          >
            <HiArrowLeft className=" text-xl" />
          </div>
          <div
            onClick={sliderightmob}
            className="bg-white rounded-full p-3 flex items-center nextbtn"
          >
            <HiArrowRight className=" text-xl" />
          </div>


        </div>
        <div className="flex flex-row gap-8 items-center justify-center mr-10 btns btnpc">
          <div
            onClick={slideleft}
            className="bg-white rounded-full p-3 flex items-center nextbtn"
          >
            <HiArrowLeft className=" text-xl" />
          </div>
          <div
            onClick={slideright}
            className="bg-white rounded-full p-3 flex items-center nextbtn"
          >
            <HiArrowRight className=" text-xl" />
          </div>
        </div>
      </div>
      {/* <div className="shadow h-6 w-2/5 rounded-full"></div> */}
      <Footer />
    </div>
  );
}

export default Main;
