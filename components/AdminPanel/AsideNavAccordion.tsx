import type { AsideNavLinkType } from "@/constants/ASIDE_NAV_ITEMS";
import Link from "next/link";
import { memo } from "react";

type Props = {
  navLinks: AsideNavLinkType[];
  handleClick: () => void;
};
const MobileNavAccordion = ({ navLinks, handleClick }: Props) => {
  return (
    <ul className="pl-1 pb-2 flex flex-col">
      {navLinks.map((item) => (
        <li key={item.label}>
          <Link
            href={item.href}
            className="block py-2 px-1.5 text-xs md:text-lg text-zinc-300 hover:bg-[#1e2529] transition"
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
