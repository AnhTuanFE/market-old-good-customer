function ShopInfor() {
  const arrImage2: {
    id: number;
    title: string;
    value: string;
  }[] = [
    {
      id: 0,
      title: "Rating",
      value: "1.9k",
    },
    {
      id: 1,
      title: "Response rate",
      value: "99%",
    },
    {
      id: 2,
      title: "Joined",
      value: "3 months ago",
    },
    {
      id: 3,
      title: "Products",
      value: "39",
    },
    {
      id: 4,
      title: "Response Time",
      value: "within hours",
    },
    {
      id: 5,
      title: "Follower",
      value: "7.9k",
    },
  ];
  return (
    <>
      <section className="bg-white rounded-sm shadow-sm mt-[15px] overflow-hidden p-2.5">
        <div className="flex items-center justify-between p-[25px]">
          <div className="border-r border-gray-100 box-border max-w-[440px] pr-6 flex">
            <a className="relative mr-[20px]" href="">
              <div className="h-[80px] w-[80px] relative">
                <div className="bg-gray-100 rounded-[50%] absolute left-0 bottom-0 overflow-hidden w-full pt-full">
                  <img
                    className="rounded-[50%]"
                    src="https://down-vn.img.susercontent.com/file/cn-11134216-7r98o-lt238gpt12al30_tn"
                  />
                </div>
              </div>
              <div className="relative cursor-default">
                <div className="flex justify-center w-full text-center absolute left-0 bottom-0">
                  <p className="text-[0.75rem] py-[3px] rounded-[2px] leading-[1] px-1 text-white z-[2] bg-[var(--main-color)]">
                    Preferred
                  </p>
                </div>
              </div>
            </a>
            <div className="flex flex-col flex-grow justify-between overflow-hidden">
              <div className="text-gray-900 text-base font-medium m-0 overflow-hidden truncate whitespace-nowrap">
                Chiosala02.vn
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <div className="text-gray-600 text-sm capitalize">
                  Active 2 minutes ago
                </div>
              </div>
              <div className="flex mt-2">
                <button className="h-[32px] px-4 text-sm border border-[var(--main-color)] flex justify-center items-center shadow-sm text-[var(--main-color)] mr-[10px]">
                  <img
                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/7bf03ed38ca37787fe78.svg"
                    className="w-[14px] h-[14px] mr-[5px]"
                  />
                  <span>Chat now</span>
                </button>
                <a
                  className="px-4 text-[var(--text-color)] flex items-center bg-white border border-gray-200 shadow-sm"
                  href=""
                >
                  <img
                    alt="icon shop"
                    className="w-[14px] h-[14px] mr-[5px]"
                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/192a8dfc1c23525d396b.svg"
                  />
                  <span>View shop</span>
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-[50px] gap-y-[20px] text-gray-600 pl-6 flex-grow">
            {arrImage2.map((item) => {
              return (
                <div className="flex justify-between">
                  <label className="text-gray-400 mr-3 capitalize text-sm">
                    {item.title}
                  </label>
                  <span className="text-right text-[var(--main-color)] text-sm">
                    {item.value}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default ShopInfor;
