import { Menu } from "antd";
import MenuItem from "antd/es/menu/MenuItem";
import Link from "next/link";

export default function NavBar() {
  const categories = [
    { id: "skjfashf23425", name: "cặp" },
    { id: "skjfashf234t5", name: "mũ" },
    { id: "skjf6shf23425", name: "balo" },
  ];
  return (
    <>
      <div className="max-sm:w-[250px] sm:w-[400px]">
        <Menu
          mode="horizontal"
          className="bg-[#f4f4f4] [&_.ant-menu-overflow-item]:leading-7 max-use400:[&_.ant-menu-overflow-item]:leading-5 "
        >
          {categories.map((category, index) => (
            <MenuItem className="" key={index}>
              <Link className="text-xs font-medium uppercase" href={`/`}>
                {category.name}
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </div>
    </>
  );
}
