export type NavItem = {
  label: string;
  href: string;
  hasDropdown: boolean;
  dropdownItems?: DropdownItem[];
};

export type DropdownItem = {
  label: string;
  href: string;
  query: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Anasayfa", href: "/", hasDropdown: false },
  {
    label: "Futbol Haberleri",
    href: "/news",
    hasDropdown: true,
    dropdownItems: [
      { label: "Süper Lig", href: "/news", query: "Süper Lig" },
      { label: "Premier League", href: "/news", query: "Premier League" },
      { label: "Serie A", href: "/news", query: "Serie A" },
      { label: "La Liga", href: "/news", query: "La Liga" },
      { label: "Bundesliga", href: "/news", query: "Bundesliga" },
      { label: "Ligue 1", href: "/news", query: "Ligue 1" },
      { label: "Dünya Kupası", href: "/news", query: "World Cup" },
    ],
  },
  {
    label: "Fikstür",
    href: "/fixtures",
    hasDropdown: true,
    dropdownItems: [
      { label: "Süper Lig", href: "/fixtures", query: "Süper Lig" },
      { label: "Premier League", href: "/fixtures", query: "Premier League" },
      { label: "Serie A", href: "/fixtures", query: "Serie A" },
      { label: "La Liga", href: "/fixtures", query: "La Liga" },
      { label: "Bundesliga", href: "/fixtures", query: "Bundesliga" },
      { label: "Ligue 1", href: "/fixtures", query: "Ligue 1" },
      { label: "Dünya Kupası", href: "/fixtures", query: "World Cup" },
    ],
  },
  {
    label: "Puan Durumu",
    href: "/standings",
    hasDropdown: true,
    dropdownItems: [
      { label: "Süper Lig", href: "/standings", query: "Süper Lig" },
      { label: "Premier League", href: "/standings", query: "Premier League" },
      { label: "Serie A", href: "/standings", query: "Serie A" },
      { label: "La Liga", href: "/standings", query: "La Liga" },
      { label: "Bundesliga", href: "/standings", query: "Bundesliga" },
      { label: "Ligue 1", href: "/standings", query: "Ligue 1" },
      { label: "Dünya Kupası", href: "/standings", query: "World Cup" },
    ],
  },

];
