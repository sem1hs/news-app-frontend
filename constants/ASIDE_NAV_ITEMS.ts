export type AsideNavItemType = {
  label: string;
  links: AsideNavLinkType[];
};

export type AsideNavLinkType = {
  href: string;
  label: string;
};

export const AsideNavItems: AsideNavItemType[] = [
  {
    label: "Futbol Haberleri",
    links: [
      {
        label: "Haberleri Görüntüle",
        href: "/admin/news/get-news",
      },
      {
        label: "Haber Oluştur",
        href: "/admin/news/create-news",
      },
    ],
  },
  {
    label: "Fikstür",
    links: [
      {
        label: "Bugünün Fikstürünü Görüntüle",
        href: "/admin/fixture/get-today-fixture",
      },
      {
        label: "Lige Göre Haftalık Fikstür Görüntüle",
        href: "/admin/fixture/get-fixture-by-league-weekly",
      },
      {
        label: "Lige Göre Tüm Fikstürü Görüntüle",
        href: "/admin/fixture/get-fixture",
      },
      {
        label: "Fikstür Oluştur",
        href: "/admin/fixture/create-fixture",
      },
    ],
  },
];
