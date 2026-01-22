export type NavItem = {
  label: string;
  href: string;
  hasDropdown: boolean;
  dropdownItems?: DropdownItem[];
};

export type DropdownItem = {
  label: string;
  href: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Anasayfa", href: "/", hasDropdown: false },
  {
    label: "Futbol Haberleri",
    href: "/news",
    hasDropdown: true,
    dropdownItems: [
      { label: "Süper Lig", href: "/news" },
      { label: "Premier League", href: "/news" },
      { label: "Serie A", href: "/news" },
      { label: "La Liga", href: "/news" },
      { label: "Bundesliga", href: "/news" },
      { label: "Ligue 1", href: "/news" },
    ],
  },
  {
    label: "Fikstür",
    href: "/fixtures",
    hasDropdown: true,
    dropdownItems: [
      { label: "Süper Lig", href: "/fixtures" },
      { label: "Premier League", href: "/fixtures" },
      { label: "Serie A", href: "/fixtures" },
      { label: "La Liga", href: "/fixtures" },
      { label: "Bundesliga", href: "/fixtures" },
      { label: "Ligue 1", href: "/fixtures" },
    ],
  },
  {
    label: "Puan Durumu",
    href: "/standings",
    hasDropdown: true,
    dropdownItems: [
      { label: "Süper Lig", href: "/" },
      { label: "Premier League", href: "/" },
      { label: "Serie A", href: "/" },
      { label: "La Liga", href: "/" },
      { label: "Bundesliga", href: "/" },
      { label: "Ligue 1", href: "/" },
    ],
  },
  { label: "Hakkımızda", href: "/about", hasDropdown: false },
];
