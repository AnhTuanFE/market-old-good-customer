import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function CustomSlider() {
  return (
    <>
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        // transitionTime={7}
        // animationHandler={"fade"}
      >
        <div>
          <img src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    </>
  );
}

export default CustomSlider;
