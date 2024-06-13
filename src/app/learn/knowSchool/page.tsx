"use client";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
function knowledgeSchool() {
  const [level, setLevel] = useState(1);

  const handleChange = (event: any) => {
    setLevel(event.target.value);
  };
  return (
    <>
      <div className="flex justify-center mb-2">
        <Box sx={{ minWidth: 200 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Cấp học</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={level}
              label="Age"
              onChange={handleChange}
              defaultValue={1}
            >
              <MenuItem value={1}>Tiểu học</MenuItem>
              <MenuItem value={2}>Trung học cơ sở</MenuItem>
              <MenuItem value={3}>Trung học phổ thông</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      {level === 1 ? (
        <div>
          <div className="flex justify-around">
            <div className="bg-red-100 w-full mr-1">
              <div className="text-center text-2xl"> Kiến thức ở trường</div>
              <div className="">
                <div className="flex justify-around ">
                  <div>
                    <p className="text-2xl">Môn học cơ sở</p>
                    <div className="">
                      <div>Toán</div>
                      <div>Tiếng việt</div>
                      <div>Đạo đức</div>
                      <div>Tự nhiên và xã hội</div>
                      <div>Giáo dục thể chất</div>
                      <div>Âm nhạc</div>
                      <div>Mỹ thuật</div>
                    </div>
                  </div>
                  <div>
                    <p className="text-2xl">Môn học tự chọn</p>
                    <div className="">
                      <div>Tiếng anh</div>
                      <div>Tiếng Trung</div>
                      <div>Tiếng đồng bào</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-100 w-full ml-1">
              <div>
                <div className="text-center text-2xl">Kiến thức thêm</div>
                <div className="flex justify-center">
                  <div className="">
                    <div>Đời sống xã hội</div>
                    <div>Thi olympic</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {level === 2 ? (
        <div>
          <div className="flex justify-around">
            <div className="bg-red-100 w-full mr-1">
              <div className="text-center"> Kiến thức ở trường</div>
              <div className="">
                <div className="flex justify-around ">
                  <div>
                    <h1>Khối tự nhiên</h1>
                    <div className="flex">
                      <div>Toán</div>
                      <div>Lý</div>
                      <div>Hóa</div>
                    </div>
                  </div>
                  <div>
                    <h1>Khối xã hội</h1>
                    <div className="flex">
                      <div>Văn</div>
                      <div>Sử</div>
                      <div>Địa</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-100 w-full ml-1">
              <div>
                <div className="text-center">Kiến thức thêm</div>
                <div className="flex justify-around">
                  <div>Đời sống xã hội</div>
                  <div>Thi olympic</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default knowledgeSchool;
