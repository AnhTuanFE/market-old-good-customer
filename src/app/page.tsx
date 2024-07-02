"use client";
import CustomSlider from "@/components/sliderProduct/CustomSlider";
import { useGetAllProductQuery } from "@/lib/redux/features/products/product.service";

export default function Home() {
  const { data } = useGetAllProductQuery();
  return (
    <>
      <div className="mt-28">
        <div className="bg-red-100">
          <div className="min-h-[1000px]">
            <CustomSlider />
          </div>
        </div>
      </div>
    </>
  );
}
