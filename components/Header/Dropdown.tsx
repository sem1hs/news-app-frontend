import type { DropdownItem } from "@/constants/NAV_ITEMS";
import DropdownItems from "./DropdownItem";

type Props = {
  dropdownItems?: DropdownItem[];
};

const Dropdown = ({ dropdownItems }: Props) => {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-0.5 pointer-events-none">
      <div className="w-48 rounded-xl bg-[#111517] shadow-lg border border-zinc-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition pointer-events-auto">
        <ul className="flex flex-col py-3">
          {dropdownItems?.map((dropdownItem, i) => (
            <li
              key={i}
              className="px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800 transition cursor-pointer"
            >
              <DropdownItems dropdownItem={dropdownItem} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
