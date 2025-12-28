"use client";
import { NAV_ITEMS } from "@/constants/NAV_ITEMS";
import NavItems from "./NavItems";
import Dropdown from "./Dropdown";
import { useState } from "react";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="flex-1 px-12">
      <ul className="flex items-center justify-around h-full">
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <div
              className="relative px-6 py-3"
              onMouseEnter={() =>
                item.hasDropdown && setOpenDropdown(item.href)
              }
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <NavItems item={item} />

              {item.hasDropdown && (
                <div className="absolute z-10 left-1/2 top-full -translate-x-1/2">
                  <Dropdown
                    dropdownItems={item.dropdownItems}
                    isOpen={openDropdown === item.href}
                  />
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
