"use client";
import { NavItem } from "@/constants/NAV_ITEMS";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type Props = {
  mobileNavItem: NavItem;
};

const MobileNavItems = ({ mobileNavItem }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpen((open) => !open);
  };

  if (!mobileNavItem.hasDropdown) {
    return (
      <Link href={mobileNavItem.href} className="font-bold text-white text-md">
        {mobileNavItem.label}
      </Link>
    );
  }

  return (
    <div className="text-white cursor-pointer">
      <div className="flex items-center gap-2">
        <Link className="font-bold text-md" href={mobileNavItem.href}>
          {mobileNavItem.label}
        </Link>

        <button className="" onClick={handleClick}>
          <i>{!open ? <ChevronDown /> : <ChevronUp />}</i>
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="pl-4 pb-2 flex flex-col text-sm">
          {mobileNavItem.dropdownItems?.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="block py-2 text-zinc-400 hover:text-white transition"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileNavItems;
