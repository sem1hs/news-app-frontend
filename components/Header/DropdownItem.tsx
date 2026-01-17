import type { DropdownItem } from "@/constants/NAV_ITEMS";
import Link from "next/link";

type Props = {
  dropdownItem: DropdownItem;
};
const DropdownItem = ({ dropdownItem }: Props) => {
  return (
    <Link
      href={{
        pathname: dropdownItem.href,
        query: { league: dropdownItem.label },
      }}
      className="w-full block"
    >
      {dropdownItem.label}
    </Link>
  );
};

export default DropdownItem;
