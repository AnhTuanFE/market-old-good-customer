"use client";
import CustomSlider from "@/components/sliderProduct/CustomSlider";
import { useGetAllProductQuery } from "@/lib/redux/features/products/product.service";
import Services from "@/components/services/Services";
import Categories from "@/components/categories/Categories";
import TopProducts from "@/components/topProducts/TopProducts";

export default function Home() {
  const { data } = useGetAllProductQuery();
  return (
    <>
      <div className="mt-28 w-[1200px] mx-auto bg-red-100">
        <div className="">
          <div className="min-h-[1000px]">
            <div className="">
              <CustomSlider />
              <Services />
              <div className="mt-6"></div>
              <Categories />
              <div className="mt-6"></div>
              <TopProducts />
              <div className="mt-6 p-5"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
