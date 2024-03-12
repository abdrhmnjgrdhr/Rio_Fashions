import React from "react";
import Banner1 from "../../../assets/Banner/Banner.jpg";

function Banner() {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center mb-16">
      <div>
        <img
          src={Banner1}
          alt=""
          className="w-[400px] h-[325px] md:w-[535px] md:h-[400px]"
        />
      </div>
      <div className="bg-[#f4f4f4] w-[400px] h-[350px] md:w-[535px] md:h-[400px] flex justify-center items-center -z-10">
        <div className="border-white border-[3px] h-[95%] w-[95%] relative">
          <div className=' before:content-[""] before:bg-[#fff] before:h-[50%] before:w-[40%] md:before:h-[45%] md:before:w-[35%] before:absolute before:top-3 md:before:top-8 before:rounded-full before:left-[30%] md:before:left-[33%] before:-z-[1]'>
            <div className="text-center z-50 mt-8 md:mt-14">
              <p>MEGASALE</p>
              <h2 className="font-[cookie,cursive] text-6xl text-red-600">
                Fashion Flash
              </h2>
              <p>
                Just For{" "}
                <span className="font-[cookie,cursive] text-3xl">You</span>
              </p>
            </div>
          </div>
          <div className="flex mt-10 md:mt-16 justify-center gap-16 text-center">
            <div>Clothing starts <br/> from <span className="text-[18px] text-red-600">Rs.250/-</span></div>
            <div>Gadgets starts <br/> from <span className="text-[18px] text-red-600">Rs.199/-</span></div>
          </div>
          <div className="mt-8 md:mt-8 text-center">
            <a className=" after:content-[''] after:flex after:mx-auto after:bg-red-600 after:h-[2px] after:w-[100%] after:absolute after:-bottom-1 after:left-0 relative">SHOP NOW</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
