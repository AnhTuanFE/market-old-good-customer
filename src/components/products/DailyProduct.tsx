import { trimText } from "@/utils/trimText";

const arrProductList: {
  id: number;
  text: string;
  image: string;
  money: string;
  skin: string;
}[] = [
  {
    id: 1,
    text: "Quần jean nam Dsq2 đen trơn in sơn chữ ICON trắng dọc viền",
    image: "./images/productDemo/product1.webp",
    money: "275.000",
    skin: "./images/productDemo/ProductSkin.png",
  },
  {
    id: 2,
    text: "Quần jean nam Dsq2 đen trơn in sơn chữ ICON trắng dọc viền",
    image: "./images/productDemo/product1.webp",
    money: "275.000",
    skin: "./images/productDemo/ProductSkin2.png",
  },
  {
    id: 3,
    text: "Quần jean nam Dsq2 đen trơn in sơn chữ ICON trắng dọc viền",
    image: "./images/productDemo/product1.webp",
    money: "275.000",
    skin: "./images/productDemo/ProductSkin3.png",
  },
  {
    id: 4,
    text: "Quần jean nam Dsq2 đen trơn in sơn chữ ICON trắng dọc viền",
    image: "./images/productDemo/product1.webp",
    money: "275.000",
    skin: "./images/productDemo/ProductSkin2.png",
  },
  {
    id: 5,
    text: "Quần jean nam Dsq2 đen trơn in sơn chữ ICON trắng dọc viền",
    image: "./images/productDemo/product1.webp",
    money: "275.000",
    skin: "./images/productDemo/ProductSkin1.png",
  },
  {
    id: 6,
    text: "Quần jean nam Dsq2 đen trơn in sơn chữ ICON trắng dọc viền",
    image: "./images/productDemo/product1.webp",
    money: "275.000",
    skin: "./images/productDemo/ProductSkin3.png",
  },
  {
    id: 7,
    text: "Quần jean nam Dsq2 đen trơn in sơn chữ ICON trắng dọc viền",
    image: "./images/productDemo/product1.webp",
    money: "275.000",
    skin: "./images/productDemo/ProductSkin3.png",
  },
  {
    id: 8,
    text: "Quần jean nam Dsq2 đen trơn in sơn chữ ICON trắng dọc viền",
    image: "./images/productDemo/product1.webp",
    money: "275.000",
    skin: "./images/productDemo/ProductSkin2.png",
  },
  {
    id: 9,
    text: "Quần jean nam Dsq2 đen trơn in sơn chữ ICON trắng dọc viền",
    image: "./images/productDemo/product1.webp",
    money: "275.000",
    skin: "./images/productDemo/ProductSkin.png",
  },
  {
    id: 10,
    text: "Quần jean nam Dsq2 đen trơn in sơn chữ ICON trắng dọc viền",
    image: "./images/productDemo/product1.webp",
    money: "275.000",
    skin: "./images/productDemo/ProductSkin1.png",
  },
  {
    id: 11,
    text: "Quần jean nam Dsq2 đen trơn in sơn chữ ICON trắng dọc viền",
    image: "./images/productDemo/product1.webp",
    money: "275.000",
    skin: "./images/productDemo/ProductSkin3.png",
  },
];

function DailyProduct() {
  return (
    <>
      <div className="pb-[4.375rem]">
        <div className="bg-white py-[15px] px-[46px]">
          <p className="text-center text-xl text-[var(--main-color)]">
            Daily Product
          </p>
        </div>
        <hr className="bg-red-500 py-[2px] w-full"></hr>
        <>
          <div className="grid grid-cols-6 gap-2 mt-[10px]">
            {arrProductList.map((item) => {
              return (
                <div key={item.id} className=" bg-white relative ">
                  <div className="hover:border-[1px] hover:border-red-500 group hover:cursor-pointer">
                    <div className="relative">
                      <img className="" src={item.image} />
                      <div className="absolute bottom-0 left-0">
                        <img src={item.skin} />
                      </div>
                      <div>
                        <img
                          src="./images/productDemo/like.png"
                          className="absolute w-[46px] h-[18px] z-[2] top-0 mt-[0.5rem] left-[-2px]"
                        />
                      </div>
                      <div>
                        <p className="text-[0.75rem] leading-[0.875rem] absolute top-0 right-0 bg-[#feeeea] text-[var(--main-color)]">
                          -50%
                        </p>
                      </div>
                    </div>
                    <div className="p-2">
                      <div className="text-[0.875rem] leading-[1.25rem] max-w-full pb-1">
                        {trimText(item.text, 40)}
                      </div>
                      <div className="pb-2   ">
                        <div className=" flex justify-start min-h-[16px]  min-w-10 text-center text-[var(--main-color)] text-[0.625rem]  leading-[.75rem]">
                          <p className="border-1 border-[var(--main-color)] p-[2px]">
                            Cheapest
                          </p>
                        </div>
                      </div>

                      <div>
                        <label className="text-xs text-orange-500">₫</label>
                        <label className="text-base text-orange-500 font-medium">
                          {item.money}
                        </label>
                      </div>
                    </div>
                    <div className="absolute hidden group-hover:block py-[6px] text-center bottom-[-26px] z-[1] left-0 right-0 bg-[var(--main-color-hover)] text-white text-sm">
                      Find Similar
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
        <div className="flex justify-center mt-[22px]">
          <div className="bg-white text-center border-[1px] hover:cursor-pointer border-slate-200 py-2 w-[24.375rem] h-[2.5rem] text-[var(--text-color)] hover:bg-[var(--text-color-hover)]">
            Login To See More
          </div>
        </div>
      </div>
    </>
  );
}

export default DailyProduct;
