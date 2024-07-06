function Services() {
  const arrImage: {
    id: number;
    url: string;
    name: string;
  }[] = [
    {
      id: 0,
      url: "./images/nav_category/voucherXtra.png",
      name: "Voucher Giảm Đến 1 Triệu",
    },
    {
      id: 1,
      url: "./images/nav_category/freeShipXtra.png",
      name: "Có Miễn Phí Ship",
    },
    {
      id: 2,
      url: "./images/nav_category/saleHours.png",
      name: "Khung Giờ Săn Sale",
    },
    {
      id: 3,
      url: "./images/nav_category/voucher.png",
      name: "Mã Giảm Giá",
    },
    {
      id: 4,
      url: "./images/nav_category/shopeeVeryCheap.png",
      name: "Shopee Siêu Rẻ",
    },
    {
      id: 5,
      url: "./images/nav_category/shopeeStyle.png",
      name: "Shopee Style Voucher 40%",
    },
    {
      id: 6,
      url: "./images/nav_category/internationalGoods.png",
      name: "Hàng Quốc Tế",
    },
    {
      id: 7,
      url: "./images/nav_category/cardOtherService.png",
      name: "Nạp Thẻ, Dịch Vụ & Vé Máy Bay ",
    },
  ];
  return (
    <>
      <div className="flex justify-around max-w-[1200px] mt-2 bg-white ">
        {arrImage.map((item) => {
          return (
            <>
              <div key={item.id} className="text-center">
                <div className="w-[150px]">
                  <div className="pt-[18px] pb-2 flex justify-center">
                    <div className="w-[45px] h-[45px] rounded-[50%]">
                      <img src={item.url} />
                    </div>
                  </div>
                  <div className="text-[0.8125rem] max-w-[150px] mb-2 whitespace-pre-line leading-[.875rem]">
                    {item.name}
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Services;
