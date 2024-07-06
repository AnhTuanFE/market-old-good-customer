"use client";
import Link from "next/link";
import { Box, Typography, Avatar } from "@mui/material";
import { LocalMall } from "@mui/icons-material";
import ContactInformation from "./components/ContactInformation";
import { Badge, Space, Select, theme } from "antd";
import { imageDefaul, logoDefaul } from "@/utils/data";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  const submitHandler = () => {};

  return (
    <>
      <Box
        sx={{
          boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
        }}
        className="fixed left-0 right-0 top-0 z-10 bg-[var(--white-color)]"
      >
        <ContactInformation />
        <div className="relative">
          <div className="flex justify-between py-2 max-md:px-5 md:px-40 ">
            <div className="w-[200px]">
              <Link href={"/"}>
                <img
                  alt="Logo"
                  src={logoDefaul}
                  className="max-sm:ml-5 max-sm:h-[40px] max-sm:w-[80px] sm:h-[50px] sm:w-[140px]"
                />
              </Link>
            </div>
            <div className="w-[886px] mt-1">
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                }}
                className="border-t border-b border-l border-r"
              >
                <div>
                  <SearchIcon />
                </div>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Tìm kiếm sản phẩm"
                  inputProps={{ "aria-label": "Tìm kiếm sản phẩm" }}
                />

                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <div className="">
                  <label className="text-blue-600 text-sm hover:cursor-pointer hover:text-blue-700">
                    Tìm kiếm
                  </label>
                </div>
              </Paper>
              <div className="text-xs font-normal mx-3 mt-2">
                <label className="mr hover:cursor-pointer">Cáp sạc</label>
                <label className="ml-3 hover:cursor-pointer">Iphone</label>
                <label className="ml-3 hover:cursor-pointer">Quần áo</label>
                <label className="ml-3 hover:cursor-pointer">Giấy ăn</label>
                <label className="ml-3 hover:cursor-pointer">Son môi</label>
                <label className="ml-3 hover:cursor-pointer">Váy dài</label>
                <label className="ml-3 hover:cursor-pointer">Áo phông</label>
                <label className="ml-3 hover:cursor-pointer">Áo sơ mi</label>
              </div>
            </div>
            <div className="flex justify-center w-[200px]">
              <div>
                <Link href={"/"}>
                  <Space size="large" className="ml-1 max-sm:mt-4 sm:mt-5">
                    <Badge count={2}>
                      <LocalMall
                        fontSize="medium"
                        sx={{
                          color: "black",
                        }}
                      />
                    </Badge>
                  </Space>
                </Link>
              </div>
            </div>
            {/* <Box className="bg-yellow-200">
              {false ? <UILogined /> : <UINotLogin />}
            </Box> */}
          </div>
        </div>
      </Box>
    </>
  );
}

export default Header;
