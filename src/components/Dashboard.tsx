"use client";
import { useState } from "react";
import {
  ChevronDoubleRightIcon,
  BellIcon,
  SunIcon,
  HomeIcon,
  ChartBarIcon,
  CogIcon,
  UsersIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import MenuItem from "./MenuItem";
import { useDrawerStore } from "@/store/DrawerStore";
import { useUserStore } from "@/store/userStore";
export default function Dashboard() {
  const [activeItem, setActiveItem] = useState("Home");
  const { openDrawer } = useDrawerStore();
  const { name } = useUserStore();

  const menuItems = [
    { label: "Home", icon: HomeIcon },
    { label: "Board", icon: ChartBarIcon },
    { label: "Settings", icon: CogIcon },
    { label: "Team", icon: UsersIcon },
    { label: "Analytics", icon: ArrowTrendingUpIcon },
  ];
  return (
    <>
      <div className="border border-bg-grey-700 h-full flex justify-center bg-white">
        <div className="flex justify-between lg:flex-col lg:justify-start w-[85%] mt-3 mb-3 lg:mb-0 lg:mt-10">
          <div className="flex">
            <div className="avatar">
              <div className="mask mask-squircle w-8">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="ml-5 flex items-center ">
              <h2 className="md:text-base lg:text-lg ">{name}</h2>
            </div>
          </div>
          {/* 2nd bar */}
          <div className="flex lg:flex-col md:gap-3 xl:flex-row justify-between items-center lg:mt-5 ">
            <div className="flex items-center gap-2">
              <div className="h-[60%] ml-0">
                <BellIcon className="md:h-6 md:w-8 xl:h-7 xl:w-10 text-gray-500" />
              </div>
              <div className="h-[60%]">
                <SunIcon className=" md:h-6 md:w-8 xl:h-7 xl:w-10 text-gray-500" />
              </div>
              <div className="h-[60%]">
                <ChevronDoubleRightIcon className=" md:h-6 md:w-8 xl:h-7 xl:w-10 text-gray-500" />
              </div>
            </div>
            <div className="w-[40%] lg:w-full lg:min-w-[35%]">
              <button className="btn h-5 w-5 md:text-xs w-[100%]">
                Logout
              </button>
            </div>
          </div>
          <div className="hidden lg:block mt-5 xl:mt-10">
            {menuItems.map((item) => (
              <MenuItem
                key={item.label}
                Icon={item.icon}
                label={item.label}
                href="#"
                isActive={activeItem === item.label}
                onClick={() => setActiveItem(item.label)}
              />
            ))}
          </div>
          {/* button */}
          <div className="hidden xl:block mt-5 w-full">
            <button
              className="btn max-h-[30%] w-full text-xs xl:text-base text-white bg-taskButton"
              onClick={openDrawer}
            >
              Create New Task
              <PlusCircleIcon className="w-4 h-4 xl:w-6 xl:h-6 xl:mr-2" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
