"use client";
import Link from "next/link";
import { Box } from "@mui/material";
import { LocalMall } from "@mui/icons-material";
import ContactInformation from "./components/ContactInformation";
import { Badge, Space } from "antd";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  const submitHandler = () => {};

  return (
    <div>
      <div className="">
        <Box
          sx={{
            boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
          }}
          className="fixed left-0 right-0 top-0 z-10"
        >
          <div className=" px-40 bg-black">
            <div className="max-w-[1200px] mx-auto">
              <ContactInformation />
            </div>
          </div>
          <div className="bg-[var(--main-color)] px-40">
            <div className=" max-w-[1200px] mx-auto ">
              <div className="relative ">
                <div className="flex justify-between py-2 w-full">
                  <div className="min-w-[200px] pt-1">
                    <Link href={"/"}>
                      <img
                        alt="Logo"
                        src="./images/shopeeLogo/Logo3.png"
                        className="w-[162px] h-[50px]"
                      />
                    </Link>
                  </div>
                  <div className="min-w-[700px] mt-1">
                    <Paper
                      component="form"
                      sx={{
                        p: "2px 4px",
                        display: "flex",
                        alignItems: "center",
                        border: "none",
                      }}
                    >
                      <div>
                        <SearchIcon
                          sx={{
                            color: "#fc5931",
                            paddingLeft: "2px",
                          }}
                        />
                      </div>
                      <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Tìm kiếm sản phẩm"
                        inputProps={{ "aria-label": "Tìm kiếm sản phẩm" }}
                      />

                      <Divider
                        sx={{ height: 28, m: 0.5 }}
                        orientation="vertical"
                      />
                      <div className="px-1 py-1">
                        <label className="text-[var(--main-color)] font-semibold text-sm hover:cursor-pointer hover:text-[var(--main-color)]">
                          Tìm kiếm
                        </label>
                      </div>
                    </Paper>
                    <div className="text-xs font-normal mx-3 mt-2 text-white">
                      <label className="mr hover:cursor-pointer">Cáp sạc</label>
                      <label className="ml-3 hover:cursor-pointer">
                        Iphone
                      </label>
                      <label className="ml-3 hover:cursor-pointer">
                        Quần áo
                      </label>
                      <label className="ml-3 hover:cursor-pointer">
                        Giấy ăn
                      </label>
                      <label className="ml-3 hover:cursor-pointer">
                        Son môi
                      </label>
                      <label className="ml-3 hover:cursor-pointer">
                        Váy dài
                      </label>
                      <label className="ml-3 hover:cursor-pointer">
                        Áo phông
                      </label>
                      <label className="ml-3 hover:cursor-pointer">
                        Áo sơ mi
                      </label>
                    </div>
                  </div>
                  <div className="flex justify-center min-w-[200px]">
                    <div>
                      <Link href={"/"}>
                        <Space size="large" className="ml-1 mt-5">
                          <Badge count={2}>
                            <LocalMall
                              fontSize="medium"
                              sx={{
                                color: "white",
                              }}
                            />
                          </Badge>
                        </Space>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </Box>
      </div>
    </div>
  );
}

export default Header;
