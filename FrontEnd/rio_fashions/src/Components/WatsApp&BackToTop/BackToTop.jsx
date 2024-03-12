import React from "react";
import { useState, useEffect } from "react";
import "animate.css";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleBackToTop = () => {
    window.scrollTo({ top: "0", left: "0", behavior: "smooth" });
  };

  const listsenScroll = () => {
    let heightToHidden = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listsenScroll);
  });
  return (
    <>
      {isVisible && (
        <div
          onClick={handleBackToTop}
          className="fixed bottom-[100px] lg:bottom-[55px] font-bold text-[1.5rem] w-[50px] h-[50px] right-4 bg-blue-500 text-white rounded-full transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none transform hover:scale-110 flex justify-center items-center"
        >
          <button className="animate-bounce">&uarr;</button>
        </div>
      )}
    </>
  );
};

export default BackToTop;
