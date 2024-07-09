"use client";
import CustomSlider from "@/components/sliderProduct/CustomSlider";
import { useGetAllProductQuery } from "@/lib/redux/features/products/product.service";
import Services from "@/components/services/Services";
import Categories from "@/components/categories/Categories";
import TopProducts from "@/components/topProducts/TopProducts";
import DailyProduct from "@/components/products/DailyProduct";

export default function Home() {
  const { data } = useGetAllProductQuery();
  return (
    <>
      <div className="pt-28 ">
        <div className="">
          <div className="">
            <div className="">
              <div className="bg-white ">
                <div className="w-[1200px] mx-auto pt-[30px]">
                  <CustomSlider />
                  <Services />
                </div>
              </div>
              <div className="w-[1200px] mx-auto ">
                <div className="mt-6"></div>
                <Categories />
                <div className="mt-6"></div>
                <TopProducts />
                <div className="mt-6 p-5"></div>
                <DailyProduct />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
