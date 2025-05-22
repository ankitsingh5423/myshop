import React, { useState } from "react";
import { Home, ShoppingBag, ShoppingCart, Menu, X } from "lucide-react";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`${
        isSidebarOpen ? "w-64" : "w-20"
      } bg-white shadow-lg transition-all duration-300 flex flex-col`}
    >
      <div className="p-4 flex items-center justify-between border-b">
        {isSidebarOpen ? (
          <h1 className="text-xl font-bold text-blue-600">E-Shop Admin</h1>
        ) : (
          <h1 className="text-xl font-bold text-blue-600">E</h1>
        )}
        <button
          onClick={toggleSidebar}
          className="p-1 rounded-md hover:bg-gray-200"
        >
          {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <nav className="flex-grow py-4">
        <ul className="space-y-2 px-2">
          <li>
            <button className="flex items-center w-full p-3 rounded-lg bg-blue-100 text-blue-600">
              <Home size={20} />
              {isSidebarOpen && <span className="ml-3">Dashboard</span>}
            </button>
          </li>
          <li>
            <button className="flex items-center w-full p-3 rounded-lg hover:bg-gray-100">
              <ShoppingBag size={20} />
              {isSidebarOpen && <span className="ml-3">Products</span>}
            </button>
          </li>
          <li>
            <button className="flex items-center w-full p-3 rounded-lg hover:bg-gray-100">
              <ShoppingBag size={20} />
              {isSidebarOpen && <span className="ml-3">Orders</span>}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
