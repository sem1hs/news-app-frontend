"use client";
import { NavItem } from "@/constants/NAV_ITEMS";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useCallback, useState } from "react";
import MobileNavAccordion from "./MobileNavAccordion";

type Props = {
  mobileNavItem: NavItem;
};

const MobileNavItems = ({ mobileNavItem }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpen((open) => !open);
  }, []);

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
        className={`overflow-hidden transition-all duration-500 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <MobileNavAccordion
          mobileNavItem={mobileNavItem}
          handleClick={setOpen}
        />
      </div>
    </div>
  );
};

export default MobileNavItems;
