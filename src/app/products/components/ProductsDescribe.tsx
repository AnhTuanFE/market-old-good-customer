import { ReactNode } from "react";

function ProductsDescribe() {
  const Category = () => {
    return (
      <>
        <div className="flex items-center h-[15px]">
          <a className="text-[#05a] text-[14px]" href="/">
            Shopee
          </a>
          <img
            alt="icon arrow right"
            className="h-[10px] w-[1-px] mx-[5px]"
            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/966fbe37fe1c72e3f2dd.svg"
          />
          <a
            className="text-[#05a] text-[14px]"
            href="/Moms-Kids-Babies-cat.11036194"
          >
            Moms, Kids &amp; Babies
          </a>
          <img
            alt="icon arrow right"
            className="h-[10px] w-[1-px] mx-[5px]"
            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/966fbe37fe1c72e3f2dd.svg"
          />
          <a
            className="text-[#05a] text-[14px]"
            href="/Baby-Healthcare-cat.11036194.11036253"
          >
            Baby Healthcare
          </a>
          <img
            alt="icon arrow right"
            className="h-[10px] w-[1-px] mx-[5px]"
            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/966fbe37fe1c72e3f2dd.svg"
          />
          <a
            className="text-[#05a] text-[14px]"
            href="/Baby-Vitamins-Supplements-cat.11036194.11036253.11036254"
          >
            Baby Vitamins &amp; Supplements
          </a>
        </div>
      </>
    );
  };
  const Brand = () => {
    return (
      <>
        <a className="text-[#05a] text-[14px]" href="">
          <div>Nature's Way</div>
        </a>
      </>
    );
  };
  const arrDataVoucher: {
    id: number;
    degree: string;
    min: string;
    title: string;
    time: string;
  }[] = [
    {
      id: 0,
      degree: "₫10k off",
      min: "Min. Spend ₫250k",
      title: "Second Order V..",
      time: "Valid Till: 31.07.2024",
    },
    {
      id: 1,
      degree: "₫10k off",
      min: "Min. Spend ₫250k",
      title: "Second Order V..",
      time: "Valid Till: 31.07.2024",
    },
    {
      id: 2,
      degree: "₫10k off",
      min: "Min. Spend ₫250k",
      title: "Second Order V..",
      time: "Valid Till: 31.07.2024",
    },
    {
      id: 3,
      degree: "₫10k off",
      min: "Min. Spend ₫250k",
      title: "Second Order V..",
      time: "Valid Till: 31.07.2024",
    },
  ];
  const Vouchers = () => {
    return (
      <>
        {arrDataVoucher.map((item) => {
          return (
            <div key={item.id}>
              {/* mt-[0.3125rem] mb-[1.25rem] */}
              <div className="h-[7.375rem]">
                <div className="relative">
                  <div className="bg-[#fff4f4] flex border-[1px] border-[#e9b8b8] h-full relative border-dashed">
                    <div className="flex-[1] text-xs flex justify-center flex-col h-full overflow-hidden pr-[4px] pl-[12px] py-[2px] ">
                      <div className="text-[#d0011b] text-[1rem] leading-[1.25rem] font-normal">
                        <div className="UsdMJE tb4eIQ">{item.degree}</div>
                      </div>
                      <div className="text-[#d0011b] text-xs leading-[1rem]">
                        {item.min}
                      </div>
                      <div className="py-[.3125rem] px-[0 .25rem]">
                        <div className="border border-[#ee4d2d] rounded-[0.125rem] box-border text-[#ee4d2d] my-[0.0625rem] max-w-full overflow-hidden px-[0.25rem] py-[0.0625rem] truncate whitespace-nowrap">
                          <div className="text-[0.75rem] leading-[0.875rem]">
                            {item.title}
                          </div>
                        </div>
                      </div>
                      <div className="mt-[0.25rem] text-[#0000008a] text-[0.75rem] leading-[0.875rem]">
                        <div className="">
                          <span className="">{item.time}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center border-l border-[#e9b8b8]  border-dashed ">
                      <div className="flex justify-center items-center ">
                        <div className="mx-[6px]">
                          <button className="bg-[#d0011b] text-white text-xs flex items-center py-[8px] px-[8px]  rounded-[0.125rem]">
                            Claim
                          </button>
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };
  const arrData: {
    id: number;
    title: string;
    value: string | ReactNode;
  }[] = [
    {
      id: 0,
      title: "Category",
      value: <Category />,
    },
    {
      id: 1,
      title: "Stock",
      value: "65",
    },
    {
      id: 2,
      title: "Brand",
      value: <Brand />,
    },
    {
      id: 3,
      title: "Recommended ",
      value: ">=6 months old",
    },
    {
      id: 4,
      title: "Ships From",
      value: "Hà Nội",
    },
  ];

  return (
    <>
      <div className="">
        <div className="flex min-h-[30rem]">
          <div className="flex-1 ">
            <div className="bg-white rounded-sm shadow-sm mt-[0.9375rem] overflow-hidden p-[0.625rem]">
              <section>
                <h2 className="bg-gray-100 text-gray-900 text-[1.125rem] font-normal p-[0.875rem] capitalize">
                  Product Specifications
                </h2>
                <div className="mt-[1.875rem] mx-[0.9375rem]">
                  {arrData.map((item) => {
                    return (
                      <div className="flex mb-[1.125rem]">
                        <label className="box-border text-gray-400 text-[0.875rem] pr-[0.75rem] w-[8.75rem] break-words">
                          {item.title}
                        </label>
                        <div className="text-sm">{item.value}</div>
                      </div>
                    );
                  })}
                </div>
              </section>
              <section className="pt-[0.875rem]">
                <h2 className="bg-gray-100 text-gray-900 text-[1.125rem] font-normal p-[0.875rem] capitalize">
                  Product Specifications
                </h2>
                <div className="mt-[1.875rem] mx-[0.9375rem]">
                  <div className="text-gray-800 text-sm leading-7 overflow-hidden truncate whitespace-pre-wrap">
                    <p>Công Dụng</p>
                    <p>
                      -Bổ sung sắt Nature's Way giúp cơ thể trẻ được bổ sung
                      sắt, kẽm và các vi chất thiết yếu
                    </p>
                    <p>
                      -Hỗ trợ tăng cường sức đề kháng, tăng miễn dịch tự nhiên.
                    </p>
                    <p>
                      -Giúp trẻ ăn ngon, ngủ ngon, tăng cân, lớn nhanh phát
                      triển toàn diện.
                    </p>
                    <p>
                      -Multi Iron Nature's Way cũng bổ sung Choline tăng cường
                      chức năng nhận thức cho trẻ.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div>
            <div className="bg-white ml-[0.9375rem] w-[14.5rem]">
              <div className="rounded-sm shadow-sm mt-[0.9375rem] overflow-hidden p-[0.625rem]">
                <div className="text-gray-400 mt-[0.625rem] mb-[1.25rem] text-sm">
                  Shop Vouchers
                </div>
                <div className="max-h-[23.25rem] pl-[0.25rem] overflow-y-auto">
                  <Vouchers />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsDescribe;
