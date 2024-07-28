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
export default function Dashboard() {
  const [activeItem, setActiveItem] = useState("Home");

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
        <div className="w-[85%] mt-10">
          <div className="flex">
            <div className="avatar">
              <div className="mask mask-squircle w-8">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="ml-5 text-xl">
              <h2>Jhon Doe</h2>
            </div>
          </div>
          {/* 2nd bar */}
          <div className="flex justify-between items -center mt-5 ">
            <div className="flex items-center gap-2">
              <div className="h-[60%] ml-0">
                <BellIcon className="h-7 w-10 text-gray-500" />
              </div>
              <div className="h-[60%]">
                <SunIcon className="h-7 w-10 text-gray-500" />
              </div>
              <div className="h-[60%]">
                <ChevronDoubleRightIcon className="h-7 w-10 text-gray-500" />
              </div>
            </div>
            <div className="min-w-[35%]">
              <button className="btn w-[100%]">Logout</button>
            </div>
          </div>
          <div className="mt-10">
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
          <div className="mt-5 w-full">
            <button className="btn w-full text-xl text-white bg-taskButton">
              Create New Task
              <PlusCircleIcon className="w-6 h-6 mr-2" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
