import type { InputNumberProps } from "antd";
import { useState } from "react";

function UseInput() {
  const [countProduct, setCountProduct] = useState<number | string>(2);
  const onChange: InputNumberProps["onChange"] = (
    //@ts-ignore
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;
    if (/^\d*$/.test(value)) {
      if (Number(value) > 0 && Number(value) < 100) {
        setCountProduct(Number(value));
      }
      if (Number(value) == 0) {
        setCountProduct("");
      }
    }
  };
  const Decrease = () => {
    if (Number(countProduct) > 1) {
      setCountProduct(Number(countProduct) - 1);
    } else {
      setCountProduct(0);
    }
  };
  const Increase = () => {
    if (Number(countProduct) < 100) {
      setCountProduct(Number(countProduct) + 1);
    }
  };
  return (
    <>
      <div className="flex border-[#e8e8e7] border-[1px]">
        <button
          onClick={Decrease}
          className="border-r-1 border-[#e8e8e7] h-8 w-8 rounded-sm"
        >
          -
        </button>
        <input
          value={countProduct}
          type="text"
          //@ts-ignore
          onChange={onChange}
          className="h-8 w-[50px] border-[#e8e8e7] outline-black text-[16px] font-normal text-center"
        />
        <button
          onClick={Increase}
          className="border-l-1 border-[#e8e8e7] h-8 w-8 rounded-sm"
        >
          +
        </button>
      </div>
    </>
  );
}

export default UseInput;
