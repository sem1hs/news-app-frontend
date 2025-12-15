export type NavItem = {
  label: string;
  href: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Anasayfa", href: "/" },
  { label: "Futbol Haberleri", href: "/news" },
  { label: "Fikstür", href: "/fixtures" },
  { label: "Hakkımızda", href: "/about" },
];
