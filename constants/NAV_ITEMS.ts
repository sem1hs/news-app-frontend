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
      { label: "Süper Lig", href: "/" },
      { label: "Premier League", href: "/" },
      { label: "Serie A", href: "/" },
      { label: "La Liga", href: "/" },
      { label: "Bundesliga", href: "/" },
      { label: "Ligue 1", href: "/" },
    ],
  },
  {
    label: "Fikstür",
    href: "/fixtures",
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
