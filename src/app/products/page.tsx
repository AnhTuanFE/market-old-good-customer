"use client";
import { Rate } from "antd";
import UseInput from "./components/UseInput";
import ProductsDescribe from "./components/ProductsDescribe";
import ProductRating from "./components/ProductRating";
import ShopInfor from "./components/ShopInfor";

function Products() {
  const arrImage1: {
    id: number;
    url: string;
    name: string;
  }[] = [
    {
      id: 0,
      url: "./images/detaiProduct/product1.jpg",
      name: "Mô hình Anime",
    },
    {
      id: 1,
      url: "./images/detaiProduct/product2.jpg",
      name: "Mô hình Anime",
    },
    {
      id: 2,
      url: "./images/detaiProduct/product3.jpg",
      name: "Kẹp tóc nữ càng cua đơn giản",
    },
    {
      id: 3,
      url: "./images/detaiProduct/product4.jpg",
      name: "Mô hình Anime",
    },
    {
      id: 4,
      url: "./images/detaiProduct/product1.jpg",
      name: "Mô hình Anime",
    },
    {
      id: 5,
      url: "./images/detaiProduct/product4.jpg",
      name: "Mô hình Anime",
    },
    {
      id: 6,
      url: "./images/detaiProduct/product1.jpg",
      name: "Mô hình Anime",
    },
    {
      id: 7,
      url: "./images/detaiProduct/product4.jpg",
      name: "Mô hình Anime",
    },
    {
      id: 8,
      url: "./images/detaiProduct/product1.jpg",
      name: "Mô hình Anime",
    },
    {
      id: 9,
      url: "./images/detaiProduct/product4.jpg",
      name: "Mô hình Anime",
    },
    {
      id: 10,
      url: "./images/detaiProduct/product1.jpg",
      name: "Mô hình Anime",
    },
    {
      id: 11,
      url: "./images/detaiProduct/product4.jpg",
      name: "Mô hình Anime",
    },
    {
      id: 12,
      url: "./images/detaiProduct/product1.jpg",
      name: "Mô hình Anime",
    },
    {
      id: 13,
      url: "./images/detaiProduct/product4.jpg",
      name: "Mô hình Anime",
    },
    {
      id: 14,
      url: "./images/detaiProduct/product1.jpg",
      name: "Mô hình Anime",
    },
    {
      id: 15,
      url: "./images/detaiProduct/product4.jpg",
      name: "Mô hình Anime",
    },
    {
      id: 16,
      url: "./images/detaiProduct/product1.jpg",
      name: "Mô hình Anime",
    },
    {
      id: 17,
      url: "./images/detaiProduct/product4.jpg",
      name: "Mô hình Anime",
    },
    {
      id: 18,
      url: "./images/detaiProduct/product1.jpg",
      name: "Mô hình Anime",
    },
    {
      id: 19,
      url: "./images/detaiProduct/product4.jpg",
      name: "Mô hình Anime",
    },
    {
      id: 20,
      url: "./images/detaiProduct/product1.jpg",
      name: "Mô hình Anime",
    },
  ];
  const arrImage: {
    id: number;
    url: string;
    name: string;
  }[] = [
    {
      id: 0,
      url: "./images/detaiProduct/product1.jpg",
      name: "Mô hình Anime",
    },
    {
      id: 1,
      url: "./images/detaiProduct/product2.jpg",
      name: "Mô hình Anime",
    },
    {
      id: 2,
      url: "./images/detaiProduct/product3.jpg",
      name: "Kẹp tóc nữ càng cua đơn giản",
    },
    {
      id: 3,
      url: "./images/detaiProduct/product4.jpg",
      name: "Mô hình Anime",
    },
    {
      id: 4,
      url: "./images/detaiProduct/product1.jpg",
      name: "Mô hình Anime",
    },
  ];
  return (
    <>
      <div className="pt-28">
        <div className="w-[1200px] mx-auto pt-[30px]">
          <div className="flex">
            <div className="bg-white p-[15px] w-[480px]">
              <div>
                <div className="flex justify-center">
                  <img className="" src="./images/detaiProduct/product2.jpg" />
                </div>
                <div className="flex justify-around my-[5px] mx-[-5px]">
                  {arrImage.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className=" box-border bg-white p-[5px] h-[96px] w-1/5"
                      >
                        <div className="relative">
                          <div className=" w-full h-full flex justify-center">
                            <img className="h-[82px] " src={item.url} />
                          </div>
                          <div className=" absolute w-full h-full left-0 right-0 bottom-0 z-[2] border-[2px] border-white hover:border-[var(--main-color)]"></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex-[1] p-5 bg-white">
              <div className="inline-block">
                <img
                  className="inline mr-2"
                  src="./images/detaiProduct/mail.svg"
                />
                <label className="text-[20px] leading-[24px]">
                  Ga Giường và 2 vỏ gối cotton poly cao cấp hàng tại xưởng mẫu
                  mã đa dạng được chọn mẫu/ gohomebedding
                </label>
              </div>
              <div>
                <div className="mt-[10px] ">
                  <div className="flex max-h-[32px] overflow-hidden">
                    <button className=" hover:cursor-pointer min-w-[175px]">
                      <div className="flex pr-[15px]">
                        <div className="mr-[5px] text-[var(--main-color)]">
                          <label className=" border-b-1 text-[1rem] border-[var(--main-color)] pb-[2px]">
                            4.6
                          </label>
                        </div>
                        <div className="">
                          <Rate
                            className="text-[var(--main-color)] py-1 text-[14px]"
                            allowHalf
                            disabled
                            defaultValue={4.6}
                          />
                        </div>
                      </div>
                    </button>
                    <button className=" border-l-1 hover:cursor-pointer border-l-black">
                      <div className="flex px-[15px]">
                        <div className="mr-[5px] py-1">
                          <label>12,9k</label>
                        </div>
                        <div className="py-1 mr-[5px]">
                          <label className="text-sm">Ratings</label>
                        </div>
                      </div>
                    </button>
                    <button className="ml-auto px-[6px] py-[1px] text-sm">
                      Report
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-[10px]">
                <div
                  style={{
                    backgroundImage:
                      "url(./images/detaiProduct/flashSale/backgroundImage.jpg)",
                  }}
                  className="flex items-center h-[2.25rem] mt-[0.625rem] px-[0.625rem]"
                >
                  <img
                    className="h-[1.3125rem] object-contain w-[7.625rem]"
                    src="./images/detaiProduct/flashSale/flashSaleText.svg"
                  />
                  <img
                    className="h-[1.3125rem] object-contain mr-[0.375rem] ml-auto"
                    src="./images/detaiProduct/flashSale/iconClock.svg"
                  />
                  <div className="uppercase mr-[0.675rem] text-white">
                    ends in
                  </div>
                </div>
              </div>
              <div className="mt-[10px]">
                <div className="px-5 py-[15px] bg-[var(--content-color)]">
                  <div className="flex items-center">
                    <div className="text-[1rem] mr-[10px] text-[var(--text-color1)] line-through">
                      ₫176.000
                    </div>
                    <div>
                      <div className="flex items-center">
                        <div className="text-[1.875rem] text-[var(--main-color)] font-normal">
                          ₫120.000 - ₫125.000
                        </div>
                        <div className="ml-[10px] bg-[var(--main-color)] text-white rounded-sm text-[0.75rem] leading-[1rem] px-1 py-[2px] uppercase font-medium ">
                          32% off
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[1.5625rem] px-[1.25rem]">
                <div className=" flex flex-col ">
                  <div className="flex p-1 mb-[25px]">
                    <p className="w-[110px] text-[var(--text-color2)] text-[15px]">
                      Return
                    </p>
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <img
                          className="inline h-4 w-4 mr-[5px]"
                          src="./images/detaiProduct/iconReturn.svg"
                        />
                        <div className="text-[14px] mr-3 text-[var(--text-color)]">
                          15 Days Return
                        </div>
                      </div>
                      <div className="text-[14px] mr-[10px] text-[var(--text-color2)]">
                        Change Of Mind
                      </div>
                      <img
                        className="inline h-[14px] mr-[5px] w-[14px] "
                        src="./images/detaiProduct/iconQuest.svg"
                      />
                    </div>
                  </div>

                  <div className="flex p-1 mb-[25px]">
                    <p className="w-[110px] text-[var(--text-color2)] text-[15px]">
                      Shipping
                    </p>
                    <div className="">
                      <div className="grid grid-cols-[auto,1fr] ">
                        <img
                          className="inline h-5 w-5 mr-[5px] mb-3 "
                          src="./images/detaiProduct/iconFreeship.png"
                        />
                        <div className="text-[14px]  mr-3 text-[var(--text-color)] ml-[7px] mb-3">
                          Free shipping
                        </div>
                        <div>
                          <img
                            className="inline h-5 w-5 mr-[5px] mb-3 "
                            src="./images/detaiProduct/iconCar.svg"
                          />
                        </div>
                        <div className="text-[14px] mr-3  ml-[7px] flex flex-col ">
                          <div className="flex items-center mb-[10px]">
                            <div className="w-[110px] mr-[10px] text-[var(--text-color3)]">
                              Shipping To
                            </div>
                            <div>Huyện Ba Vì</div>
                          </div>
                          <div className="flex items-center">
                            <div className="w-[110px] mr-[10px] text-[var(--text-color3)]">
                              Shipping Fee
                            </div>
                            <div>20k</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex p-1 mb-[24px]">
                    <p className="w-[110px] text-[var(--text-color2)] uppercase text-[15px]">
                      Loại
                    </p>
                    <div className="flex items-center flex-wrap mt-[-8px] max-h-56 max-w-[515px] overflow-y-auto">
                      {arrImage1.map((item) => {
                        return (
                          <div key={item.id}>
                            <button className=" border-[1px] uppercase text-sm inline-flex items-center justify-center bg-white  border-gray-200 rounded-md text-gray-800 cursor-pointer mt-2 mr-2 min-h-10 min-w-20 outline-none overflow-visible p-2 relative text-left break-words">
                              <img
                                className="inline h-6 w-6 mr-[5px]"
                                src={item.url}
                              />
                              {item.name}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="flex p-1 mb-[25px]">
                    <p className="w-[110px] text-[var(--text-color2)] uppercase text-[15px]">
                      Quantity
                    </p>
                    <div>
                      <UseInput />
                    </div>
                  </div>
                  <div className="mt-[15px]">
                    <div className="flex pl-5">
                      <div>
                        <button className="h-[48px] border border-[#f5eae6] flex justify-center items-center bg-[var(--color-button1)] hover:bg-[var(--color-button1-hover)] text-[var(--main-color)] mr-4 w-[180px]">
                          <img
                            className="h-5 w-5 mr-[10px]"
                            src="./images/detaiProduct/iconCart.svg"
                          />
                          <div>Add To Cart</div>
                        </button>
                      </div>
                      <div>
                        <button className="h-[48px] bg-[var(--color-button2)] hover:bg-[var(--color-button2-hover)] text-white w-[180px]">
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-[30px] border-t-1 border-[#f5eae6]">
                    <div className="flex flex-col mt-[25px] mx-[15px]">
                      <a className="flex items-center">
                        <img
                          className="w-5 h-5 mr-[5px]"
                          src="./images/detaiProduct/iconGuarantee.png"
                        />
                        <span className="text-[#222] pr-5 text-sm capitalize">
                          shopee guarantee
                        </span>
                        <span className="text-[var(--text-color1)] pr-5 text-sm capitalize">
                          Get the items you ordered or get your money back.
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ShopInfor />
          <ProductsDescribe />
          <ProductRating />
        </div>
      </div>
    </>
  );
}

export default Products;
