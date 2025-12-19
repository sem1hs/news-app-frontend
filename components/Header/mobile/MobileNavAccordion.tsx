import { NavItem } from "@/constants/NAV_ITEMS";
import Link from "next/link";
import { memo } from "react";

type Props = {
  mobileNavItem: NavItem;
  handleClick: () => void;
};
const MobileNavAccordion = ({ mobileNavItem, handleClick }: Props) => {
  return (
    <ul className="pl-4 pb-2 flex flex-col text-sm">
      {mobileNavItem.dropdownItems?.map((item) => (
        <li key={item.label}>
          <Link
            href={item.href}
            className="block py-2 text-zinc-400 hover:text-white transition"
            onClick={handleClick}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default memo(MobileNavAccordion);
