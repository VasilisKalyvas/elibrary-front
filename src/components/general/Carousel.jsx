import React, { useRef } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";

const Carousel = ({data, isLoading}) => {
  const navigate = useNavigate()
  const screenWidth = window.innerWidth;
  const elementRef = useRef();

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 80;
  };

  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 80;
  };

  return (
    <div className="relative w-full">
      {
        !isLoading
        ?
          <>
            <div
              className="h-full w-[40px] cursor-pointer
                              absolute  
                              flex items-center justify-center
                              text-black
                              hover:bg-[#0f0f0f] 
                              hover:opacity-70 
                              hover:text-white"
              onClick={() => sliderLeft(elementRef.current)}
            >
              <HiChevronLeft size={60} />
            </div>
            <div
              className="h-full w-[40px] cursor-pointer
                              absolute right-0
                              flex items-center justify-center
                              text-black
                              hover:bg-[#0f0f0f] 
                              hover:opacity-70 
                              hover:text-white"
              onClick={() => sliderRight(elementRef.current)}
            >
              <HiChevronRight size={60} />
            </div>
          </>
        : null
      }
      {
        isLoading
        ?
          <Spinner/>
        :
          <div
            className="flex overflow-x-auto w-full
                no-scrollbar scroll-smooth"
            ref={elementRef}
          >
            {
              data.map((item, index) => (
                <img
                  onClick={() => navigate(`/rent/${item?.id}`)}
                  key={index}
                  src={item?.image}
                  className="w-[120px] md:w-[160px] 
                           mr-5 rounded-md
                          cursor-pointer"
                />
            ))}
          </div>
      }
    </div>
  );
};

export default Carousel;