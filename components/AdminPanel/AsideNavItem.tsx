import { AsideNavItemType } from "@/constants/ASIDE_NAV_ITEMS";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useCallback } from "react";
import AsideNavAccordion from "./AsideNavAccordion";

type Props = {
  navItem: AsideNavItemType;
  openItem: string | null;
  setOpenItem: (value: string | null) => void;
};
const AsideNavItem = ({ navItem, openItem, setOpenItem }: Props) => {
  const isOpen = openItem === navItem.label;

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setOpenItem(isOpen ? null : navItem.label);
    },
    [setOpenItem, isOpen, navItem.label]
  );

  const closeAccordion = useCallback(() => {
    setOpenItem(null);
  }, [setOpenItem]);

  return (
    <li>
      <div className="text-white cursor-pointer">
        <button className="flex items-center gap-2 mb-2" onClick={handleClick}>
          <h1 className="md:font-bold text-sm md:text-xl">{navItem.label}</h1>
          <i>{!isOpen ? <ChevronDown /> : <ChevronUp />}</i>
        </button>

        <div
          className={`overflow-hidden transition-all duration-500 ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <AsideNavAccordion
            navLinks={navItem.links}
            handleClick={closeAccordion}
          />
        </div>
      </div>
    </li>
  );
};

export default AsideNavItem;
