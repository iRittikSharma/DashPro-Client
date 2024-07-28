import Link from "next/link";
// components/MenuItem.js
import React from "react";

export default function MenuItem({ Icon, label, href, isActive, onClick }) {
  return (
    <Link
      href={href}
      className={`flex items-center p-2 rounded-lg ${
        isActive ? "bg-gray-300" : "text-gray-700 hover:bg-gray-300"
      }`}
      onClick={onClick}
    >
      <Icon className="w-6 h-6 mr-2" />
      <span>{label}</span>
    </Link>
  );
}
