import { Rate } from "antd";
import ImagesRating from "../ImagesRating";
import { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
function ProductRatingDetail() {
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
      <div className="flex items-start border-b border-[rgba(0,0,0,0.09)] py-4 pl-[1.25rem]">
        <a className="mr-[0.625rem] text-center w-[2.5rem]" href="">
          <div className="h-[2.5rem] w-[2.5rem]">
            <div className="relative w-full pt-full overflow-hidden rounded-full bg-[#f5f5f5]">
              <img src="https://t3.ftcdn.net/jpg/03/46/83/96/240_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" />
            </div>
          </div>
        </a>
        <div className="flex-[1]">
          <a
            className="text-[rgba(0,0,0,0.87)] text-[0.75rem] no-underline"
            href="/shop/779199086"
          >
            huatrang246
          </a>
          <div className="">
            <Rate
              className="text-[var(--main-color)] py-1 text-[12px] max-w-[100px] max-h-[20px] overflow-hidden"
              allowHalf
              disabled
              defaultValue={5}
            />
          </div>
          <div className="text-[rgba(0,0,0,0.54)] text-[0.75rem] mb-[0.9375rem] mt-[0.25rem]">
            2024-05-22 20:58 | Variation: Tím 1000ml
          </div>
          <div className="relative box-border my-[15px] text-[14px] leading-[20px] text-[rgba(0,0,0,0.87)] break-words whitespace-pre-wrap">
            <div>
              <span className="text-[#00000066]">Phù hợp với loại da: </span>
              đúng
            </div>
            <div className="mt-[6px]">
              <span className="text-[#00000066]">Mùi hương: </span>
              cực kì thơm lun
            </div>
            <div className="mt-[6px]">
              <span className="text-[#00000066]">Công dụng: </span>
              trắng da
            </div>
            <div className="mt-[12px]">
              Mình sử dụng rồi thích lắm nha ,sáng da, sạch mụn, giao hàng còn
              nhanh và rẻ nữa nên mua nha mọi người 🫶
            </div>
            <div></div>
          </div>
          <div className="mt-[0.9375rem]">
            <div className="flex flex-wrap w-full ">
              <div onClick={() => setShow(!show)}>
                <ImagesRating />
              </div>
              <div onClick={() => setShow(!show)}>
                <ImagesRating />
              </div>
              <div onClick={() => setShow(!show)}>
                <ImagesRating />
              </div>
              <div onClick={() => setShow(!show)}>
                <ImagesRating />
              </div>
            </div>
          </div>
          {show ? (
            <>
              <div className="h-[500px] w-[512px] overflow-hidden">
                <div className="px-[10px]">
                  <img
                    className="h-[500px]"
                    src="https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lw0uq0fp08uz6c.webp"
                  />
                </div>
              </div>
            </>
          ) : (
            ""
          )}
          <div className="text-[#00000066] flex justify-between mt-[1.25rem]">
            <div>
              <div className="flex">
                <div className="text-[#cccccc] cursor-pointer mr-[0.25rem] mt-[2px]">
                  <svg
                    fill="#cccccc"
                    width="14px"
                    height="13px"
                    viewBox="0 0 14 13"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs></defs>
                    <g stroke="none" stroke-width="1" fill-rule="evenodd">
                      <g
                        id="Product-Ratings-Working"
                        transform="translate(-245.000000, -855.000000)"
                        fill-rule="nonzero"
                      >
                        <g transform="translate(155.000000, 92.000000)">
                          <g transform="translate(40.000000, 184.000000)">
                            <g transform="translate(0.000000, 326.000000)">
                              <g transform="translate(50.000000, 253.000000)">
                                <g>
                                  <path d="M0,12.7272727 L2.54545455,12.7272727 L2.54545455,5.09090909 L0,5.09090909 L0,12.7272727 Z M14,5.72727273 C14,5.02727273 13.4272727,4.45454545 12.7272727,4.45454545 L8.71818182,4.45454545 L9.35454545,1.52727273 L9.35454545,1.33636364 C9.35454545,1.08181818 9.22727273,0.827272727 9.1,0.636363636 L8.4,0 L4.2,4.2 C3.94545455,4.39090909 3.81818182,4.70909091 3.81818182,5.09090909 L3.81818182,11.4545455 C3.81818182,12.1545455 4.39090909,12.7272727 5.09090909,12.7272727 L10.8181818,12.7272727 C11.3272727,12.7272727 11.7727273,12.4090909 11.9636364,11.9636364 L13.8727273,7.44545455 C13.9363636,7.31818182 13.9363636,7.12727273 13.9363636,7 L13.9363636,5.72727273 L14,5.72727273 C14,5.79090909 14,5.72727273 14,5.72727273 Z"></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="capitalize">84</div>
              </div>
            </div>
            <div className="cursor-pointer">
              <MoreVertIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductRatingDetail;
