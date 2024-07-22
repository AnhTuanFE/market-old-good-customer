import { Rate } from "antd";
import ImagesRating from "./ImagesRating";
import { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ProductRatingDetail from "./rating/ProductRatingDetail";

function ProductRating() {
  const [show, setShow] = useState<boolean>(false);
  const arrData: {
    id: number;
    title: string;
    number: string;
  }[] = [
    {
      id: 1,
      title: "5 Star",
      number: "(745)",
    },
    {
      id: 2,
      title: "4 Star",
      number: "(87)",
    },
    {
      id: 3,
      title: "3 Star",
      number: "(33)",
    },
    {
      id: 4,
      title: "2 Star",
      number: "(13)",
    },

    {
      id: 5,
      title: "1 Star",
      number: "(16)",
    },
    {
      id: 6,
      title: "with comments",
      number: "(319)",
    },
    {
      id: 7,
      title: "With Media",
      number: "(133)",
    },
  ];
  return (
    <>
      <section className="bg-white rounded-[0.125rem] shadow-sm mt-[0.9375rem] overflow-hidden p-[1.5625rem]">
        <div className="mb-[1em]">
          <div className="text-[1.125rem] mr-[0.2em] capitalize">
            Product Ratings
          </div>
        </div>
        <div className="flex items-center bg-[#fffbf8] border border-[#f9ede5] rounded-[2px] box-border mb-[1rem] min-h-[5rem] p-[1.875rem]">
          <div className="mr-[1.875rem] text-center">
            <div className="text-[#ee4d2d] text-[1.125rem]">
              <span className="text-[1.875rem]">4.7</span>
              <span className="text-[1.125rem]">out of 5</span>
            </div>
            <div className="mt-[10px]">
              <Rate
                className="text-[var(--main-color)] py-1 text-[20px]"
                allowHalf
                disabled
                defaultValue={4.6}
              />
            </div>
          </div>
          <div className="flex-[1] ml-[15px]">
            <div className="inline-block bg-white border rounded-[2px] box-border cursor-pointer h-8 leading-8 mb-[0.3125rem] mr-2 mt-[0.3125rem] min-w-[6.25rem] px-[0.625rem] text-center no-underline capitalize select-none border-[#ee4d2d] text-[#ee4d2d]">
              all
            </div>
            {arrData.map((item) => {
              return (
                <div
                  key={item.id}
                  className="inline-block bg-white border border-[rgba(0,0,0,0.09)] rounded-[2px] box-border text-[rgba(0,0,0,0.87)] cursor-pointer h-8 leading-8 mb-[0.3125rem] mr-2 mt-[0.3125rem] min-w-[6.25rem] px-[0.625rem] text-center no-underline capitalize select-none"
                >
                  {item.title} {item.number}
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <ProductRatingDetail />
          <ProductRatingDetail />
          <ProductRatingDetail />
          <ProductRatingDetail />
        </div>
      </section>
    </>
  );
}

export default ProductRating;
