import React from "react";
import {
  ShoppingBag,
  ShoppingCart,
} from "lucide-react";

const Dashboard = () => {
  return (
    <div>
      <div className="pb-4 mb-4 border-b border-gray-200">
        <h2 className="text-2xl font-semibold">Dashboard</h2>
      </div>

      {/* Dashboard Content */}
      <div>
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Total Revenue
                </p>
                <h3 className="text-2xl font-bold mt-1">$24,560</h3>
              </div>
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                <ShoppingCart className="text-green-500" size={24} />
              </div>
            </div>
            <p className="text-sm text-green-500 mt-2">+12% from last month</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Total Orders
                </p>
                <h3 className="text-2xl font-bold mt-1">142</h3>
              </div>
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                <ShoppingBag className="text-blue-500" size={24} />
              </div>
            </div>
            <p className="text-sm text-blue-500 mt-2">+8% from last month</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Products Sold
                </p>
                <h3 className="text-2xl font-bold mt-1">312</h3>
              </div>
              <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                <ShoppingBag className="text-purple-500" size={24} />
              </div>
            </div>
            <p className="text-sm text-purple-500 mt-2">+18% from last month</p>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="font-semibold text-lg">Recent Orders</h3>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Order ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Total
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      #ORD-5421
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      John Doe
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      2025-05-20
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      $249.97
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                        Delivered
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      #ORD-5422
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      Jane Smith
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      2025-05-20
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      $129.99
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">
                        Processing
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Products Preview */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h3 className="font-semibold text-lg">Products</h3>
            <button className="text-blue-600 text-sm font-medium">
              View All
            </button>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Product
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 bg-gray-200 rounded-md flex items-center justify-center mr-3">
                          <ShoppingBag size={16} className="text-gray-500" />
                        </div>
                        <span className="font-medium">Wireless Headphones</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      $129.99
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                        In Stock
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 bg-gray-200 rounded-md flex items-center justify-center mr-3">
                          <ShoppingBag size={16} className="text-gray-500" />
                        </div>
                        <span className="font-medium">Cotton T-Shirt</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      $24.99
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                        In Stock
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
