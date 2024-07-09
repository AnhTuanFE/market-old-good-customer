import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function CustomSlider() {
  return (
    <>
      <div className="flex min-h-[235px] max-h-[235px]">
        <div className="mr-2">
          <Carousel
            showThumbs={false}
            autoPlay
            infiniteLoop
            // transitionTime={7}
            // animationHandler={"fade"}
            className="w-[796px]"
          >
            <div>
              <img
                className="h-[235px]"
                src="./images/shopeeSlide/slide1.jpg"
              />
              {/* <p className="legend">Legend 1</p> */}
            </div>
            <div>
              <img
                className="h-[235px]"
                src="./images/shopeeSlide/slide2.jpg"
              />
            </div>
            <div>
              <img
                className="h-[235px]"
                src="./images/shopeeSlide/slide3.jpg"
              />
            </div>
            <div>
              <img
                className="h-[235px]"
                src="./images/shopeeSlide/slide4.jpg"
              />
            </div>
            <div>
              <img
                className="h-[235px]"
                src="./images/shopeeSlide/slide5.jpg"
              />
            </div>
            <div>
              <img
                className="h-[235px]"
                src="./images/shopeeSlide/slide6.jpg"
              />
            </div>
            <div>
              <img
                className="h-[235px]"
                src="./images/shopeeSlide/slide7.jpg"
              />
            </div>
          </Carousel>
        </div>
        <div>
          <div className="">
            <Carousel
              showThumbs={false}
              autoPlay
              infiniteLoop
              // transitionTime={7}
              // animationHandler={"fade"}
            >
              <div>
                <img
                  className="h-[114px]"
                  src="./images/shopeeSlide/slide7.jpg"
                />
              </div>
              <div>
                <img
                  className="h-[114px]"
                  src="./images/shopeeSlide/slide6.jpg"
                />
              </div>
            </Carousel>
          </div>
          <div className="mt-[7px]">
            <div className="">
              <Carousel
                showThumbs={false}
                autoPlay
                infiniteLoop
                // transitionTime={7}
                // animationHandler={"fade"}
              >
                <div>
                  <img
                    className="h-[114px]"
                    src="./images/shopeeSlide/slide2.jpg"
                  />
                </div>
                <div>
                  <img
                    className="h-[114px]"
                    src="./images/shopeeSlide/slide3.jpg"
                  />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomSlider;
