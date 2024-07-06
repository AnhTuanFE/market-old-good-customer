function Categories() {
  const arrImage: {
    id: number;
    url: string;
    name: string;
  }[] = [
    {
      id: 0,
      url: "./images/categories/menClothes.png",
      name: "Men Clothes",
    },
    {
      id: 1,
      url: "./images/categories/mobileGadgets.png",
      name: "Mobile & Gadgets",
    },
    {
      id: 2,
      url: "./images/categories/ConsumerElectronics.png",
      name: "Consumer Electronics",
    },
    {
      id: 3,
      url: "./images/categories/ComputerAccessories.png",
      name: "Computer & Accessories",
    },
    {
      id: 4,
      url: "./images/categories/Cameras.png",
      name: "Cameras",
    },
    {
      id: 5,
      url: "./images/categories/Watches.png",
      name: "Watches",
    },
    {
      id: 6,
      url: "./images/categories/MenShoes.png",
      name: "Men Shoes",
    },
    {
      id: 7,
      url: "./images/categories/HomeAppliances.png",
      name: "Home Appliances",
    },
    {
      id: 8,
      url: "./images/categories/SportOutdoor.png",
      name: "Sport & Outdoor",
    },
    {
      id: 9,
      url: "./images/categories/Automotive.png",
      name: "Automotive",
    },
    {
      id: 10,
      url: "./images/categories/MenBags.png",
      name: "Men Bags",
    },
    {
      id: 11,
      url: "./images/categories/Toys.png",
      name: "Toys",
    },
    {
      id: 12,
      url: "./images/categories/Pets.png",
      name: "Pets",
    },
    {
      id: 13,
      url: "./images/categories/ToolsHomeImprovement.png",
      name: "Tools & Home",
    },
    {
      id: 14,
      url: "./images/categories/WomenClothes.png",
      name: "Women Clothes",
    },
    {
      id: 15,
      url: "./images/categories/MomsKidsBabies.png",
      name: "Moms, Kids & Babies",
    },
    {
      id: 16,
      url: "./images/categories/HomeLiving.png",
      name: "Home & Living",
    },
    {
      id: 17,
      url: "./images/categories/Beauty.png",
      name: "Beauty",
    },
    {
      id: 18,
      url: "./images/categories/Health.png",
      name: "Health",
    },
    {
      id: 19,
      url: "./images/categories/WomenShoes.png",
      name: "Women Shoes",
    },
    {
      id: 20,
      url: "./images/categories/WomenBags.png",
      name: "Women Bags",
    },
    {
      id: 21,
      url: "./images/categories/FashionAccessories.png",
      name: "Fashion Accessories",
    },
    {
      id: 22,
      url: "./images/categories/Grocery.png",
      name: "Grocery",
    },
    {
      id: 23,
      url: "./images/categories/BooksStationery.png",
      name: "Books & Stationery",
    },
    {
      id: 24,
      url: "./images/categories/KidFashion.png",
      name: "Kid Fashion",
    },
    {
      id: 25,
      url: "./images/categories/Homecare.png",
      name: "Home care",
    },
    {
      id: 26,
      url: "./images/categories/TicketsVouchersServices.png",
      name: "Tickets, Vouchers & Services",
    },
  ];
  return (
    <>
      <div className="bg-white">
        <div className=" py-3 px-4">CATEGORIES</div>
        <div className=" overflow-hidden">
          <div className="flex relative h-[303px] flex-col flex-wrap content-start border-t-1 ">
            {arrImage.map((item) => {
              return (
                <div
                  key={item.id}
                  className="h-[151px] w-[120px] border-r-1 border-b-1 translate-x-0 "
                >
                  <div className="flex justify-center">
                    <div className="w-[70%] h-[70%] mt-[10%]">
                      <img src={item.url} />
                      <div className="text-sm text-center mb-2">
                        {item.name}
                      </div>
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

export default Categories;
