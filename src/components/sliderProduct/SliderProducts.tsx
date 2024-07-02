import Link from "next/link";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Rating from '~/components/Rating/Rating';
import { Divider, Chip } from "@mui/material";

const products = [
  {
    id: "123",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ60p7T44uwQN0ZlnMrXtMEDoLMhbd4EVBjZg&s",
    name: "Sản phẩm 1",
    price: 120000,
  },
  {
    id: "124",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ60p7T44uwQN0ZlnMrXtMEDoLMhbd4EVBjZg&s",
    name: "Sản phẩm 1",
    price: 130000,
  },
  {
    id: "125",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ60p7T44uwQN0ZlnMrXtMEDoLMhbd4EVBjZg&s",
    name: "Sản phẩm 1",
    price: 140000,
  },
];

export default function SliderProducts({}) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    customPaging: (a) => <button className="bg-red-500 p-6">button {a}</button>,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
    ],
  };
  return (
    <div className="mx-auto my-auto max-w-screen-2xl pt-3 max-md:mt-1 md:mt-3">
      <h2 className="pb-3 text-center">
        <Divider>
          <Chip
            className="font-semibold"
            sx={{
              fontSize: "18px",
              bgcolor: "#ffff",
            }}
            label={"Sản phẩm đề xuất"}
          />
        </Divider>
      </h2>
      <div className="min-h-[300px]">
        <Slider className=" " {...settings}>
          {products?.map((product) => {
            return (
              <div key={product._id} className="max-h-[300px] ">
                <Link className="" href={`/product/${product.id}`}>
                  <div className="mx-2 bg-white py-3">
                    <div className="hover:-translate-y-4 hover:transform hover:transition hover:duration-200 hover:ease-linear">
                      <img
                        src={`${product?.image}`}
                        className="filter-[brightness(1)] m-auto h-[200px]"
                        alt=""
                      />
                    </div>
                    <div className="flex justify-center  text-center">
                      <div>
                        <p className="">
                          {product.name.length > 16
                            ? `${product.name.substring(0, 16)}...`
                            : `${product.name}`}
                        </p>
                        <p className="text-base font-semibold">
                          {product?.price?.toLocaleString("de-DE")}đ
                        </p>
                        {/* <div>
                              <Rating
                                  value={product.rating}
                                  text={`(${product.reviews.length})`}
                              />
                          </div> */}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
