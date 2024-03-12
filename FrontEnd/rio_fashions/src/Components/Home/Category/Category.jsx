import React from "react";
import { Link } from "react-router-dom";
import men from "../../../assets/Category/men.jpg";
import Accessories from "../../../assets/Category/Accessories.jpg";
import Watches from "../../../assets/Category/Watches.jpg";
import Footwears from "../../../assets/Category/Footwears.jpg";
import Gadgets from "../../../assets/Hero/Gadgets.png";

const Category = () => {
  return (
    <div className="mb-16">
      <div className="flex justify-center flex-col md:flex-row gap-3">
        <div className="mx-auto md:mx-0 group">
          <div className="relative card hover:drop-shadow-2xl transition-all duration-300">
            <img
              src={men}
              alt=""
              className="h-[500px] md:h-[550px] w-[375px]  group-hover:rotate-3 group-hover:scale-[1.1] transition-all duration-1000"
            />
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-6 md:bottom-3 ">
              <button className="bg-[#fff] rounded-lg px-10 py-2 hover:bg-[#222] hover:text-[#fff] transition-all duration-300">
                <Link to={'/mens_wears'}>Men's<span className="text-[#fff] ">_</span>Wear</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="flex md:gap-3 justify-center">
          <div className="grid grid-rows-2 gap-2">
            <div className="relative card transition-all duration-300 group">
              <img
                src={Accessories}
                alt=""
                className="h-[250px] md:h-[275px]  w-[250px] md:w-[300px] group-hover:rotate-3 group-hover:scale-[1.2] transition-all duration-1000 p-2  md:p-1"
              />
              <div className="absolute bottom-6 md:bottom-3  left-1/2 transform -translate-x-1/2 ">
                <button className="bg-[#fff] rounded-lg px-4 py-2 hover:bg-[#222] hover:text-[#fff] transition-all duration-300">
                  <Link to={'mens_accessories'}>Men's<span className="text-[#fff] ">_</span>Accessories</Link>
                </button>
              </div>
            </div>
            <div className="relative card transition-all duration-300 group">
              <img
                src={Watches}
                alt=""
                className="h-[250px] md:h-[275px]  w-[250px] md:w-[300px] p-2 md:p-1 object-fill group-hover:rotate-3 group-hover:scale-[1.2] transition-all duration-1000"
              />
              <div className="absolute bottom-6 md:bottom-3  left-1/2 transform -translate-x-1/2 ">
                <button className="bg-[#fff] rounded-lg px-10 py-2 hover:bg-[#222] hover:text-[#fff] transition-all duration-300">
                  <Link to={'/watches'}>Watches</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-2">
            <div className="relative card transition-all duration-300 group">
              <img
                src={Gadgets}
                alt=""
                className="h-[250px] md:h-[275px]  w-[250px] md:w-[300px] p-2 md:p-1 group-hover:rotate-3 group-hover:scale-[1.2] transition-all duration-1000"
              />
              <div className="absolute bottom-6 md:bottom-3  left-1/2 transform -translate-x-1/2 ">
                <button className="bg-[#fff] rounded-lg px-10 py-2 hover:bg-[#222] hover:text-[#fff] transition-all duration-300">
                  <Link to={'/gadgets'}>Gadgets</Link>
                </button>
              </div>
            </div>
            <div className="relative card transition-all duration-300 group">
              <img
                src={Footwears}
                alt=""
                className="h-[250px] md:h-[275px]  w-[250px] md:w-[300px] p-2 md:p-1 group-hover:rotate-3 group-hover:scale-[1.2] transition-all duration-1000"
              />
              <div className="absolute bottom-6 md:bottom-3  left-1/2 transform -translate-x-1/2 ">
                <button className="bg-[#fff] rounded-lg hover:bg-[#222] hover:text-[#fff] transition-all duration-300  px-10 py-2 ">
                  <Link to={'/shoes'}>Shoes</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
