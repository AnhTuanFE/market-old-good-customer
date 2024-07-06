import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { Empty } from "antd";
import Avatar from "@mui/material/Avatar";
import { ReactNode } from "react";

function ContactInformation() {
  const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#f5f5f9",
      color: "rgba(0, 0, 0, 0.87)",
      maxWidth: 356,
      // fontSize: theme.typography.pxToRem(12),
      border: "1px solid #dadde9",
    },
  }));

  const arrImageIcon: {
    id: number;
    url: string;
  }[] = [
    {
      id: 0,
      url: "./images/gmail.webp",
    },
    {
      id: 1,
      url: "./images/facebook.webp",
    },
    {
      id: 2,
      url: "./images/instagram.webp",
    },
    {
      id: 3,
      url: "./images/youtobe.webp",
    },
    {
      id: 4,
      url: "./images/pinterest.webp",
    },
    {
      id: 5,
      url: "./images/linkedin.webp",
    },
  ];

  const UILogined = () => {
    return (
      <>
        <HtmlTooltip
          title={
            <div className="min-w-[100px]">
              <p className="p-2 font-medium text-sm hover:cursor-pointer hover:text-blue-500">
                Tài khoản
              </p>
              <p className="p-2 font-medium text-sm hover:cursor-pointer hover:text-blue-500">
                Lịch sử
              </p>
              <p className="p-2 font-medium text-sm hover:cursor-pointer hover:text-blue-500">
                Đăng xuất
              </p>
            </div>
          }
        >
          <div className="flex ml-4 hover:cursor-pointer ">
            <Avatar
              className="w-4 h-4 mr-2"
              alt="user"
              src="./images/gmail.webp"
            />
            <label className="hover:cursor-pointer  hover:opacity-80">
              Tuấn
            </label>
          </div>
        </HtmlTooltip>
      </>
    );
  };
  return (
    <div className="w-full max-h-6">
      <div className="flex justify-between bg-black px-40">
        <div className="text-white">
          <div className="flex">
            <div className="flex pt-1">
              <span className="text-sm">Hotline:</span>{" "}
              <span className="text-sm font-medium">033.555.999 </span>
              <span className="mr-2 hidden text-sm font-thin sm:block ml-1">
                (8-22h)
              </span>
            </div>
            <div className="hidden md:block">
              <div className="flex mt-[2px]">
                <span className="text-sm font-thin">|</span>
                <div className="ml-2">
                  <div className="flex">
                    {arrImageIcon.map((item) => {
                      return (
                        <div key={item.id}>
                          <div className="mr-2 cursor-pointer">
                            <img className="h-[20px] w-[20px]" src={item.url} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="min-w-[480px]">
          <div className="flex text-white text-xs font-medium mt-1">
            <div>
              <HtmlTooltip
                // open
                title={
                  <>
                    <div className=" bg-red-100 ">
                      <div className="w-[280px] h-[280px] flex justify-center ">
                        <div className="m-auto text-center">
                          <Empty description={false} />
                          <p className="text-sm font-medium">
                            Đăng nhập để xem
                          </p>
                        </div>
                      </div>
                      <div className="flex bg-slate-300">
                        <button className="flex-1 px-2 py-2 hover:bg-slate-200 hover:text-blue-500 text-sm font-medium">
                          Đăng nhập
                        </button>
                        <button className="flex-1 px-2 py-2 hover:bg-slate-200 hover:text-blue-500 text-sm font-medium">
                          Đăng ký
                        </button>
                      </div>
                    </div>
                  </>
                }
              >
                <div className="mr-5 hover:opacity-80">
                  <NotificationsNoneIcon
                    sx={{
                      width: "16px",
                      height: "16px",
                      marginRight: "8px",
                    }}
                  />
                  <label>Thông báo</label>
                </div>
              </HtmlTooltip>
            </div>
            <HtmlTooltip
              title={
                <div className="min-w-[100px]">
                  <p className="p-2 font-medium text-sm hover:cursor-pointer hover:text-blue-500">
                    Tiếng Anh
                  </p>
                  <p className="p-2 font-medium text-sm hover:cursor-pointer hover:text-blue-500">
                    Tiếng Việt
                  </p>
                </div>
              }
            >
              <div className="mr-5 hover:opacity-80">
                <LanguageIcon
                  sx={{
                    width: "16px",
                    height: "16px",
                    marginRight: "8px",
                  }}
                />
                <label>Ngôn ngữ</label>
              </div>
            </HtmlTooltip>
            <div className="mr-5 hover:opacity-80">
              <HelpOutlineIcon
                sx={{
                  width: "16px",
                  height: "16px",
                  marginRight: "8px",
                }}
              />
              <label>Trợ giúp</label>
            </div>
            <div>
              {/* <div>
                <button className="hover:opacity-80">Đăng ký</button>
                <label className="mx-2">|</label>
                <button className="hover:opacity-80">Đăng nhập</button>
              </div> */}
              {/* {<UILogined />} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInformation;
