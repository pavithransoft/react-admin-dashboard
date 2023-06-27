import { HiMenuAlt3, HiCube } from "react-icons/hi";
import { TiThLarge, TiBusinessCard } from "react-icons/ti";
import { MdAnalytics } from "react-icons/md";
import { IoSettings, IoHelpCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Menu = (props) => {
  const menuList = [
    {
      name: "Dashboard",
      link: "/",
      icon: (
        <TiThLarge className="w-6 h-6 fill-slate-400 hover:fill-slate-50" />
      ),
    },
    {
      name: "Business Card",
      link: "/business",
      icon: (
        <TiBusinessCard className="w-6 h-6 fill-slate-400 hover:fill-slate-50" />
      ),
      margin: true,
    },
    {
      name: "Analytics",
      link: "/analytics",
      icon: (
        <MdAnalytics className="w-6 h-6 fill-slate-400 hover:fill-slate-50" />
      ),
    },
    {
      name: "Service",
      link: "/service",
      icon: <HiCube className="w-6 h-6 fill-slate-400 hover:fill-slate-50" />,
    },
    {
      name: "Settings",
      link: "/settings",
      icon: (
        <IoSettings className="w-6 h-6 fill-slate-400 hover:fill-slate-50" />
      ),
      margin: true,
    },
    {
      name: "Help",
      link: "/help",
      icon: (
        <IoHelpCircleSharp className="w-6 h-6 fill-slate-400 hover:fill-slate-50" />
      ),
    },
  ];
  return (
    <div className="bg-slate-900 text-slate-400 px-4">
      <div className="grid justify-end py-3">
        <HiMenuAlt3
          className="w-8 h-8 cursor-pointer fill-slate-400 hover:fill-slate-50"
          onClick={props.onHandleMenu}
        />
      </div>
      <div className="mt-4 grid grid-cols gap-4 relative">
        {menuList.map((menu, index) => (
          <Link
            to={menu?.link}
            key={index}
            className={` ${
              menu?.margin && "mt-5"
            } group grid grid-cols-[50px_1fr] items-center text-sm font-medium p-2 ${
              props.onOpenMenu ? "hover:w-[62%] focus:w-[62%]" : "w-full"
            } hover:bg-slate-700 focus:bg-slate-700 focus:text-slate-50 hover:text-slate-50 rounded-md`}
          >
            <span>{menu?.icon}</span>
            <h2
              style={{
                transitionDelay: `${index + 3}00ms`,
              }}
              className={`whitespace-pre duration-500 ${
                props.onOpenMenu && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              {menu?.name}
            </h2>
            <h2
              className={` ${
                !props.onOpenMenu && "hidden"
              } absolute left-48 bg-slate-50 font-semibold whitespace-pre text-slate-800 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-20 group-hover:duration-300 group-hover:w-fit`}
            >
              {menu?.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
