"use client";
import Link from "next/link";
import { useState, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const pathName = usePathname();

  useLayoutEffect(() => {
    const handleAller = () => {
      if (window.scrollY >= 112) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
    };
    window.addEventListener("scroll", handleAller);
    return () => window.removeEventListener("scroll", handleAller);
  }, []);
  console.log("pathName = ", pathName);

  return (
    <>
      {/* <div className="cursor-pointer flex justify-center text-center">
              <Link className="leading-[42px]" href={"/"}>
                <img className="h-14" src="/images/hoami_tachnen.png" />
              </Link>
            </div> */}
      <div className="">
        <div>
          <div className="flex justify-between items-center m-auto px-4 h-[42px] w-full bg-[#77d467] text-white text-sm">
            <ul className="flex justify-between">
              <li
                className={`cursor-pointer px-2 mr-1 h-[42px] ${
                  pathName === "/learn" ? "bg-[#335f2b]" : ""
                }`}
              >
                <Link className={`leading-[42px]  `} href={"/learn"}>
                  Học tập
                </Link>
              </li>
              <li
                className={`cursor-pointer px-2 mr-1 h-[42px] ${
                  pathName === "/challenge" ? "bg-rose-800" : ""
                }`}
              >
                <Link className="leading-[42px]" href={"/"}>
                  Thử thách
                </Link>
              </li>
              <li
                className={`cursor-pointer px-2 mr-1 h-[42px] ${
                  pathName === "/game" ? "bg-rose-800" : ""
                }`}
              >
                <Link className="leading-[42px]" href={"/"}>
                  Trò chơi
                </Link>
              </li>
              <li
                className={`cursor-pointer px-2 mr-1 h-[42px] ${
                  pathName === "/entertainment" ? "bg-rose-800" : ""
                }`}
              >
                <Link className="leading-[42px]" href={"/"}>
                  Giải tri
                </Link>
              </li>
              <li
                className={`cursor-pointer px-2 mr-1 h-[42px] ${
                  pathName === "/document" ? "bg-rose-800" : ""
                }`}
              >
                <Link className="leading-[42px]" href={"/"}>
                  Tài liệu
                </Link>
              </li>
            </ul>
            <div className="cursor-pointer font-medium px-2 py-1 text-white rounded-small">
              <div className="">
                <p className="">Đăng nhập</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
