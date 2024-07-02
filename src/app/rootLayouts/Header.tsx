"use client";
import Link from "next/link";
import { useState } from "react";
import { Box, Typography, Avatar } from "@mui/material";
import { LocalMall } from "@mui/icons-material";
import NavBar from "./components/Navbar";
import ContactInformation from "./components/ContactInformation";
import { Badge, Space, Select, Drawer, theme } from "antd";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBars,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { imageDefaul, logoDefaul } from "@/utils/data";
//
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

function Header() {
  const { token } = theme.useToken();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const submitHandler = () => {};

  const UINotLogin = () => {
    return (
      <div className="flex pb-2 pt-3">
        <Typography
          align="center"
          sx={{
            fontSize: "16px",
            verticalAlign: "center",
            fontWeight: "bold",
            margin: "auto",
          }}
          className="hidden py-1 pr-2 md:block"
        >
          <Link href={"/login"}>Đăng nhập</Link>
        </Typography>
        <Typography
          align="center"
          sx={{
            margin: "0px 8px",
            fontSize: "16px",
            verticalAlign: "center",
            fontWeight: "bold",
          }}
          className="hidden py-1 pl-2 md:block"
        >
          <Link href={"/register"}>Đăng ký</Link>
        </Typography>
        <div className=" m-auto items-center  md:hidden">
          <Link href={"/login"}>
            <p className="pb-2 text-sm font-bold">Đăng nhập</p>
          </Link>
        </div>
      </div>
    );
  };
  const UILogined = () => {
    return (
      <div className="flex pb-2">
        <Link className="cursor-pointer pl-2" href={"/profile"}>
          <Avatar
            id="simple-select"
            alt="Remy Sharp"
            src={`${imageDefaul}`}
            className=" mr-1 mt-2 h-[48px] w-[48px]"
          />
        </Link>
        <div className="z-[2] mt-3">
          <Select
            className="w-[120px] [&_.anticon-down]:pt-2"
            options={[
              {
                value: "account",
                label: "Tài khoản",
              },
              {
                value: "logout",
                label: "Đăng xuất",
              },
            ]}
          />
        </div>
        <Link href={"/cart"}>
          <Space size="middle" className="ml-1 max-sm:mt-4 sm:mt-5">
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
    );
  };

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
          <div className="flex justify-between py-2 max-md:px-5 md:px-20 ">
            <div className="bg-red-200 w-[200px]">
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
