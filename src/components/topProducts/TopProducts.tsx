function TopProducts() {
  const arrImage: {
    id: number;
    url: string;
    name: string;
  }[] = [
    {
      id: 0,
      url: "./images/products/productTest.jpg",
      name: "Mô hình Anime",
    },
    {
      id: 1,
      url: "./images/products/productTest.jpg",
      name: "Mô hình Anime",
    },
    {
      id: 2,
      url: "./images/products/productTest.jpg",
      name: "Kẹp tóc nữ càng cua đơn giản",
    },
    {
      id: 3,
      url: "./images/products/productTest.jpg",
      name: "Mô hình Anime",
    },
    {
      id: 4,
      url: "./images/products/productTest.jpg",
      name: "Mô hình Anime",
    },
    {
      id: 5,
      url: "./images/products/productTest.jpg",
      name: "Mô hình Anime",
    },
  ];
  return (
    <>
      <div className="bg-white">
        <div>
          <div className=" py-3 px-4">TOP PRODUCTS</div>
          <div className="flex h-[290px]">
            {arrImage.map((item) => {
              return (
                <div
                  key={item.id}
                  className="w-[16.6667%] hover:cursor-pointer"
                >
                  <div className="px-[0.625rem] py-[1.25rem]">
                    <div className="relative flex justify-center">
                      <img className="w-[180px] h-[180px]" src={item.url} />
                      <div className="absolute top-0 left-0">
                        <img
                          className="w-6 h-[30px]"
                          src="./images/productIcons/topProduct.png"
                        />
                      </div>
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, .26)",
                        }}
                        className="absolute bottom-0 text-white text-sm font-light py-1 w-full text-center"
                      >
                        Monthly Sale 93+
                      </div>
                    </div>
                    <div className="text-lg text-slate-500 text-center mt-[17px]">
                      {item.name}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default TopProducts;
