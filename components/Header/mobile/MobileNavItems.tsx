import { NavItem } from "@/constants/NAV_ITEMS";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import MobileNavAccordion from "./MobileNavAccordion";
import { useCallback } from "react";

type Props = {
  mobileNavItem: NavItem;
  openItem: string | null;
  setOpenItem: (value: string | null) => void;
};

const MobileNavItems = ({ mobileNavItem, openItem, setOpenItem }: Props) => {
  const isOpen = openItem === mobileNavItem.label;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpenItem(isOpen ? null : mobileNavItem.label);
  };

  const closeAccordion = useCallback(() => {
    setOpenItem(null);
  }, [setOpenItem]);

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
          <i>{!isOpen ? <ChevronDown /> : <ChevronUp />}</i>
        </button>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <MobileNavAccordion
          mobileNavItem={mobileNavItem}
          handleClick={closeAccordion}
        />
      </div>
    </div>
  );
};

export default MobileNavItems;
