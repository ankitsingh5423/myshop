import React from "react";
import {
  Search,
  Bell,
} from "lucide-react";

const Topbar = () => {
  return (
    <header className="bg-white shadow-sm py-4 px-6 flex items-center justify-between">
      <div className="flex items-center w-1/2">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Bell size={20} />
            <span className="absolute top-0 right-0 h-5 w-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
              3
            </span>
          </button>
        </div>
        <div className="h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center">
          <span className="text-sm font-medium">AD</span>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
