/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { useState } from "react";
import { FiMenu, FiX, FiChevronDown, FiLogOut } from "react-icons/fi";

import "./style.css";

export default function Layout({ children }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div>
      <div className="relative flex">
        <LeftSidebar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />

        <div className="flex-1">
          <header className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <button
                    onClick={toggleSidebar}
                    className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    aria-label="Toggle sidebar"
                  >
                    <FiMenu className="h-6 w-6" />
                  </button>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <button
                      onClick={toggleProfile}
                      className="flex items-center space-x-2 bg-gray-100 p-2 rounded-md hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      aria-expanded={isProfileOpen}
                      aria-haspopup="true"
                    >
                      <img
                        className="h-8  rounded-full"
                        src="https://www.thecaovn.space/img/logo.png"
                        alt="Thế cao"
                      />
                      <FiChevronDown
                        className={`transform transition-transform ${isProfileOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {isProfileOpen && (
                      <div
                        className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                        role="menu"
                        aria-orientation="vertical"
                      >
                        <a
                          href="#logout"
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          <FiLogOut className="mr-3" /> Logout
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
      {children}
    </div>
  );
}

function LeftSidebar({ isSidebarOpen, toggleSidebar }) {
  const navLinks = [
    { href: "/admin/PVC", label: "PVC" },
    { href: "/admin/PU", label: "PU" },
    { href: "/admin/TPU", label: "TPU" },
    // { href: "#", label: "Chịu Nhiệt" },
    // { href: "#", label: "Xích Nhựa" },
    // { href: "#", label: "PU Răng" },
    // { href: "#", label: "Truyền Động" },
    // { href: "#", label: "Nẹp" },
    { href: "/admin/news", label: "Bài Viết" },
    { href: "/admin/Introduce", label: "Giới thiệu" },
    { href: "/admin/Aviation", label: "Ngành Hàng Không" },
  ];
  return (
    <div
      className={`fixed inset-y-0 left-0 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-6 h-screen flex flex-col">
        <div className="flex justify-end items-center mb-6">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            aria-label="Close sidebar"
          >
            <FiX className="h-6 w-6" />
          </button>
        </div>
        <nav className="space-y-4 flex-1 overflow-y-auto scr">
          {navLinks.map((nav, index) => {
            return (
              <a
                key={index}
                href={nav.href}
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
              >
                {nav.label}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
