"use client";
import { useParams } from "next/navigation";

function Test({}) {
  const aa = useParams();
  console.log("param = ", aa);

  return (
    <>
      <h1 className="w-full h-[1000px] bg-red-400">Helo</h1>
    </>
  );
}

export default Test;
