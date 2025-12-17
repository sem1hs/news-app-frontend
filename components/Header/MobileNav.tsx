import { NAV_ITEMS } from "@/constants/NAV_ITEMS";
import MobileNavItems from "./MobileNavItems";

const MobileNav = () => {
  return (
    <nav className="flex-1">
      <ul className="h-[75%] flex flex-col items-left justify-around">
        {NAV_ITEMS.map((item) => (
          <li key={item.label}>
            <MobileNavItems mobileNavItem={item} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNav;
