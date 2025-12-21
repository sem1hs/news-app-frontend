"use client";
import { AsideNavItems } from "@/constants/ASIDE_NAV_ITEMS";
import React, { useState } from "react";
import AsideNavItem from "./AsideNavItem";

const AsideNavItemList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);
  return (
    <>
      {AsideNavItems.map((item, i) => (
        <AsideNavItem
          navItem={item}
          openItem={openItem}
          setOpenItem={setOpenItem}
          key={i}
        />
      ))}
    </>
  );
};

export default AsideNavItemList;
