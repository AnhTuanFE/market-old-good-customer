import { green } from "@mui/material/colors";
import Pagination from "@mui/material/Pagination";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fc5931",
    },
    secondary: green,
  },
});

function MyPagination() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Pagination
          count={10}
          shape="rounded"
          size="large"
          color="primary"
          variant="text"
          className="[&_.MuiPaginationItem-text]:text-[#00000066] [&_.Mui-selected]:!text-white"
          sx={{
            color: "red",
          }}
        />
      </ThemeProvider>
    </>
  );
}

export default MyPagination;
