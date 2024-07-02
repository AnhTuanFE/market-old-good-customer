import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const them = createTheme({
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "var(--white-color)",
          margin: "0px 4px",
        },
      },
    },
  },
});
function ContactInformation() {
  return (
    <Box sx={{ width: "100%" }}>
      <div className="flex justify-between bg-[#000] px-8">
        <Box sx={{ color: "var(--white-color)" }}>
          <div className="flex">
            <div className="flex pt-1">
              <span className="text-sm">Hotline:</span>{" "}
              <span className="text-sm font-medium">033.555.999</span>
              <span className="mr-2 hidden text-sm font-thin sm:block">
                {" "}
                (8-22h) miễn phí
              </span>
            </div>
            <div className="hidden md:block">
              <span className="text-sm font-thin">|</span>
              <span className=" ml-2 text-sm font-thin">Hệ thống siêu thị</span>
            </div>
          </div>
        </Box>

        <ThemeProvider theme={them}>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <div className="mr-8 hidden text-white sm:mr-2 md:block">
              <span className="text-sm font-thin ">Theo dõi chúng tôi</span>
            </div>
            <div className="mr-2 cursor-pointer">
              <img
                className="h-[20px] w-[20px] sm:h-[30px] sm:w-[30px]"
                src="./images/gmail.webp"
              />
            </div>
            <div className="mr-2 cursor-pointer">
              <img
                className="h-[20px] w-[20px] sm:h-[30px] sm:w-[30px]"
                src="./images/facebook.webp"
              />
            </div>
            <div className="mr-2 cursor-pointer">
              <img
                className="h-[20px] w-[20px] sm:h-[30px] sm:w-[30px]"
                src="./images/instagram.webp"
              />
            </div>
            <div className="mr-2 cursor-pointer">
              <img
                className="h-[20px] w-[20px] sm:h-[30px] sm:w-[30px]"
                src="./images/youtobe.webp"
              />
            </div>
            <div className="mr-2 cursor-pointer">
              <img
                className="h-[20px] w-[20px] sm:h-[30px] sm:w-[30px]"
                src="./images/pinterest.webp"
              />
            </div>
            <div className="mr-2 cursor-pointer">
              <img
                className="h-[20px] w-[20px] sm:h-[30px] sm:w-[30px]"
                src="./images/linkedin.webp"
              />
            </div>
          </Box>
        </ThemeProvider>
      </div>
    </Box>
  );
}

export default ContactInformation;
