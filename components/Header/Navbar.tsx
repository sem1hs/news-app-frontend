import { NAV_ITEMS } from "@/constants/NAV_ITEMS";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex items-center gap-4">
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <NavItems item={item} key={item.href} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
