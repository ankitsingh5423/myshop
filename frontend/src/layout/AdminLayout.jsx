import React from "react";
import Topbar from "../components/admin/Topbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/admin/Sidebar";

const AdminLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100 text-gray-800">
      <Sidebar />
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />
        {/* Main content area */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
