import { NAV_ITEMS } from "@/constants/NAV_ITEMS";
import NavItems from "./NavItems";
import Dropdown from "./Dropdown";

const Navbar = () => {
  return (
    <nav className="flex-1 px-12">
      <ul className="flex items-center justify-around">
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <div className="relative inline-flex group">
              <NavItems item={item} />

              {item.hasDropdown && (
                <Dropdown dropdownItems={item.dropdownItems} />
              )}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
