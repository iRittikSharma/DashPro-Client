import Link from "next/link";
import { ComponentProps } from "react";

interface MenuItemProps {
  Icon: (props: React.ComponentProps<"svg">) => JSX.Element;
  label: string;
  href: string;
  isActive: boolean;
  onClick: () => void;
}

export default function MenuItem({
  Icon,
  label,
  href,
  isActive,
  onClick,
}: MenuItemProps) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center p-4 rounded-lg ${
        isActive ? "bg-gray-200" : "hover:bg-gray-100 text-gray-700"
      } cursor-pointer`}
    >
      <Icon className="w-6 h-6 mr-3" />
      <Link
        className={`text-sm font-medium text-black ${
          isActive ? "text-blue-500" : "text-gray-700"
        }`}
        href={href}
      >
        {label}
      </Link>
    </div>
  );
}
