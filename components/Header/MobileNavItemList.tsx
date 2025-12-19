"use client";

import { NAV_ITEMS } from "@/constants/NAV_ITEMS";
import MobileNavItems from "./MobileNavItems";
import { useState } from "react";

const MobileNavItemList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <>
      {NAV_ITEMS.map((item) => (
        <li key={item.label}>
          <MobileNavItems
            mobileNavItem={item}
            openItem={openItem}
            setOpenItem={setOpenItem}
          />
        </li>
      ))}
    </>
  );
};

export default MobileNavItemList;
