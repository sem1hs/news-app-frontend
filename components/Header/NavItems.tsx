import { NavItem } from "@/constants/NAV_ITEMS";
import Link from "next/link";

type Props = {
  item: NavItem;
};

const NavItems = ({ item }: Props) => {
  return (
    <Link className="font-bold text-white cursor-pointer" href={item.href}>
      {item.label}
    </Link>
  );
};

export default NavItems;
