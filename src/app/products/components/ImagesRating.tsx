import { useState } from "react";
import NoPhotographyIcon from "@mui/icons-material/NoPhotography";

function ImagesRating() {
  const [active, setActive] = useState<boolean>(false);
  return (
    <>
      <div className="block">
        <div
          style={{}}
          className={`h-[72px] w-[72px] mr-[10px] mb-[10px] relative overflow-hidden box-border ${
            active
              ? "cursor-zoom-out border-2 border-[#ee4d2d]"
              : "cursor-zoom-in"
          }  `}
        >
          <div className="bg-white h-full w-full">
            <NoPhotographyIcon
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-normal leading-8 stroke-gray-400"
              fontSize="small"
            />
          </div>
          {active ? (
            <>
              <div
                style={{
                  backgroundImage:
                    "url(https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lwjicvdl0r8986_tn.webp)",
                }}
                onClick={() => setActive(!active)}
                className="absolute left-0 top-0 w-full h-full border-2 border-[#f6f5f5] bg-no-repeat box-border bg-center bg-cover"
              >
                <div className="h-full w-full"></div>
              </div>
            </>
          ) : (
            <>
              <div
                style={{
                  backgroundImage:
                    "url(https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lwjicvdl0r8986_tn.webp)",
                }}
                onClick={() => setActive(!active)}
                className="absolute left-0 top-0 w-full h-full bg-no-repeat box-border bg-center bg-cover"
              >
                <div className="h-full w-full"></div>
              </div>
            </>
          )}
        </div>
        {/* {active ? (
          <>
            <div className="bg-red-300">
              <h1>hello</h1>
            </div>
          </>
        ) : (
          ""
        )} */}
      </div>
    </>
  );
}

export default ImagesRating;
