"use client";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useState, useRef } from "react";
function Sliders() {
  const arrImages: string[] = [
    "image123.jpg",
    "image1231.jpg",
    "image1232.jpg",
    "image1233.jpg",
    "image1234.jpg",

    "image1231.jpg",
    "image123.jpg",
    "image1233.jpg",
    "image1232.jpg",
    "image1234.jpg",

    "image1231.jpg",
    "image123.jpg",
    "image1233.jpg",
    "image1232.jpg",
    "image1234.jpg",

    "image1231.jpg",
    "image123.jpg",
    "image1233.jpg",
    "image1232.jpg",
    "image1234.jpg",
  ];
  const sliderRef = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlide = (direction: any) => {
    const slider = sliderRef.current;
    const sliderWidth = slider.offsetWidth; // 1200px
    const slideDistance = 4;
    const lenghtImage = 300;
    const lenghtTranslate = 3.5;

    // let newSlide = currentSlide + direction * slideDistance;
    let newSlide = direction * slideDistance;

    // newSlide = Math.max(
    //   0,
    //   Math.min(newSlide, arrImages.length - slideDistance)
    // );
    setCurrentSlide(newSlide);
    // slider.style.transform = `translateX(-${
    //   newSlide * (sliderWidth / slideDistance + 8)
    // }px)`;
    console.log("scroll", `${newSlide * (sliderWidth / slideDistance + 8)}`);
    console.log("newSlide = ", newSlide);
    console.log("sliderWidth = ", sliderWidth);
    console.log("slideDistance = ", slideDistance);

    slider.scrollLeft += 400;
  };
  return (
    <>
      <div className="mx-10">
        <div className="bg-[var(--color-layout)] h-96 relative">
          {currentSlide > 0 && (
            <>
              <div
                // onClick={() => handlePrev()}
                onClick={() => handleSlide(-1)}
                className="bg-slate-50 rounded-[50%] z-40 hover:bg-slate-200 cursor-pointer flex justify-center absolute left-6 top-[50%] w-12 h-12 "
              >
                <ChevronLeft className="m-auto text-4xl" />
              </div>
            </>
          )}
          <div className="flex">
            <div
              ref={sliderRef}
              className=" w-[1200px] max-w-[1200px] bg-[var(--color-layout)] h-[540px] flex overflow-x-scroll"
            >
              {arrImages.map((item, index) => {
                return (
                  <div className="mr-2" key={index}>
                    <img
                      className="min-w-[300px] h-[500px] my-2 rounded-3xl "
                      src={`./images/${item}`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          {currentSlide < arrImages.length - 4 && (
            <>
              <div
                // onClick={() => handleNext()}
                onClick={() => handleSlide(1)}
                className="bg-slate-50 rounded-[50%] z-10 hover:bg-slate-200 cursor-pointer flex justify-center absolute right-6 top-[50%] w-12 h-12 "
              >
                <ChevronRight className="m-auto text-4xl" />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Sliders;
