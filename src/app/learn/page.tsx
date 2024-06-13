import Link from "next/link";
function Learn() {
  return (
    <>
      <div>
        <h1 className="bg-yellow-200 text-center w-full ">Thông báo</h1>
        <div className="flex">
          <div className="w-full mt-2 flex-[3]">
            <div className="h-[400px] bg-red-200 mr-2">
              {true ? (
                <div>
                  <div></div>
                </div>
              ) : (
                <div className="flex justify-center items-center m-auto h-full">
                  Bạn chưa đăng ký khóa học nào
                </div>
              )}
            </div>
          </div>
          <div className="w-full text-center mt-2 flex-[1] bg-green-100">
            <div className=" ">
              <div className="w-full">
                <div className="py-3 px-5 bg-green-400 text-base font-medium">
                  Kiến thức xã hội
                </div>
              </div>
              <div className="w-full">
                <div className="py-3 px-5 w-full bg-blue-400 text-base mt-1 font-medium">
                  Khám phá thế giới
                </div>
              </div>
            </div>
            <div className="">
              <div className="w-full">
                <div className="py-3 px-5 w-full bg-rose-400 text-base mt-1 font-medium">
                  Kỹ năng nên có
                </div>
              </div>
              <div className="w-full">
                <div className="py-3 px-5 w-full bg-yellow-200 text-base mt-1 font-medium">
                  <Link href={"/learn/knowSchool"}>Kiến thức ở trường</Link>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div>Kiến thức xã hội</div>
        <>điều cần lưu ý</>
        <div>Kỹ năng cần sẽ tốt hơn</div>
        <>
          thuyết trình, tính nhanh, học nhanh, ôn luyện đề thi khả năng nhớ và
          học thuộc, bí kíp cho từng môn
        </>
        <div>Chọn môn học</div>
        <>Hiển thị danh sách các môn học</>

        <div>Mỗi môn học</div>
        <div>Kiến thức thêm</div>
        <>Một số thông tin mở rộng trong chương trình học</>
        <div>Kiến thức thú vị</div>
        <>Những điều thú vị trong bài học</>
        <div>
          ôn thi, ôn bài cũ, học thêm, lưu ý, mẹo học và làm bài Công thức cần
          nhớ, mục tiêu đạt được, ôn bài cũ
        </div> */}
      </div>
    </>
  );
}

export default Learn;
