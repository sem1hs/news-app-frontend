import type { DropdownItem } from "@/constants/NAV_ITEMS";
import DropdownItems from "./DropdownItem";

type Props = {
  dropdownItems?: DropdownItem[];
  isOpen: boolean;
};

const Dropdown = ({ dropdownItems, isOpen }: Props) => {
  return (
    <div
      className={`
        absolute top-full left-1/2 -translate-x-1/2 
        w-48 rounded-xl bg-[#111517] shadow-lg border border-zinc-800
        transition-all duration-150
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
      `}
    >
      <ul className="flex flex-col py-3">
        {dropdownItems?.map((dropdownItem, i) => (
          <li
            key={i}
            className="px-4 py-2 text-sm text-zinc-300
              hover:text-white hover:bg-zinc-800 transition cursor-pointer"
          >
            <DropdownItems dropdownItem={dropdownItem} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
