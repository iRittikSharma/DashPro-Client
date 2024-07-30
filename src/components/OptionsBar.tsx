import { CalendarIcon } from "@heroicons/react/24/outline";
import { FunnelIcon } from "@heroicons/react/24/outline";
import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ShareIcon } from "@heroicons/react/24/outline";
import { SparklesIcon } from "@heroicons/react/24/outline";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

const OptionsBar = () => {
  return (
    <div className="flex justify-between">
      <div className="max-h-[90%]">
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" />
          <MagnifyingGlassIcon className="w-6 h-7  ml-2" />
        </label>
      </div>
      <div className="flex text-gray-500">
        <div className="flex items-center mr-5">
          <span>Calander view</span>
          <CalendarIcon className="w-6 h-7 mr-3 ml-3" />
        </div>
        <div className="flex items-center mr-5">
          <span>Automation</span>
          <SparklesIcon className="w-6 h-7 mr-3 ml-3" />
        </div>
        <div className="flex items-center mr-5">
          <span>Filter</span>
          <FunnelIcon className="w-6 h-7 mr-3 ml-3" />
        </div>
        <div className="flex items-center mr-5">
          <span>Sharespan</span>
          <ShareIcon className="w-6 h-7 mr-3 ml-3" />
        </div>
        <div className="flex items-center">
          <button className="btn w-full text-xs text-white bg-taskButton space-between">
            Create new
            <PlusCircleIcon className="w-6 h-6 mr-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OptionsBar;
