import React from "react";
import { Bell, Settings } from "lucide-react";
import logo from "../assets/Konnectd_logo.png";
import profile from "../assets/admin_profile.png"; // Example profile image

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left side - Logo/Brand */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Konnectd Logo"
              className="w-8 h-8 object-contain"
            />
            <span className="text-xl font-semibold text-gray-900">Admin</span>
          </div>
        </div>

        {/* Right side - Actions & Profile */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <button className="relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>

          {/* Settings */}
          <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200">
            <Settings className="w-5 h-5" />
          </button>

          {/* Profile */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img
                src={profile}
                alt="Admin Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-gray-900">Brad Behlow</p>
              <p className="text-xs text-gray-500">Super Admin</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
