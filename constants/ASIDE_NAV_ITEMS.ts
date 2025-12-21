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
        href: "/admin/get-news",
      },
      {
        label: "Haber Oluştur",
        href: "/admin/create-news",
      },
    ],
  },
];
