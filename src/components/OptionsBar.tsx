"use client";
import { useDrawerStore } from "@/store/DrawerStore";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { FunnelIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ShareIcon } from "@heroicons/react/24/outline";
import { SparklesIcon } from "@heroicons/react/24/outline";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

const OptionsBar = () => {
  const { openDrawer } = useDrawerStore();

  return (
    <div className="flex justify-between">
      <div className=" flex items-center max-h-[90%] max-w-[20%]">
        <label className="input input-bordered max-h-[80%] max-w-[100%] flex items-center gap-2">
          <input
            type="text"
            className="grow max-w-[75%]"
            placeholder="Search"
          />
          <MagnifyingGlassIcon className=" w-5 h-6 xl:w-6 xl:h-7 ml-2" />
        </label>
      </div>
      <div className="flex text-gray-500">
        <div className="flex items-center mr-2 xl:mr-5">
          <span className="text-xs xl:text-base">Calander view</span>
          <CalendarIcon className="w-5 h-5 xl:w-6 xl:h-7 mr-3 ml-2 xl:ml-3" />
        </div>
        <div className="flex items-center mr-2 xl:mr-5">
          <span className="text-xs xl:text-base">Automation</span>
          <SparklesIcon className="w-5 h-5 xl:w-6 xl:h-7 mr-3 ml-2 xl:ml-3" />
        </div>
        <div className="flex items-center mr-2 xl:mr-5">
          <span className="text-xs xl:text-base">Filter</span>
          <FunnelIcon className="w-5 h-5 xl:w-6 xl:h-7 mr-3 ml-2 xl:ml-3" />
        </div>
        <div className="flex items-center mr-2 xl:mr-5">
          <span className="text-xs xl:text-base">Sharespan</span>
          <ShareIcon className="w-5 h-5 xl:w-6 xl:h-7 mr-3 ml-2 xl:ml-3" />
        </div>
        <div className="flex items-center">
          <button
            className="btn w-full text-xs text-white bg-taskButton space-between"
            onClick={openDrawer}
          >
            Create new
            <PlusCircleIcon className="w-6 h-6 mr-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OptionsBar;
