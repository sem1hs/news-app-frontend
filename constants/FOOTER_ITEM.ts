export type FooterColumn = {
  title: string;
  links: FooterLink[];
};

export type FooterLink = {
  label: string;
  href: string;
  query?: string;
};

export const FooterPageColumn: FooterColumn = {
  title: "Sayfalar",
  links: [
    { label: "Anasayfa", href: "/" },
    { label: "Futbol Haberleri", href: "/news" },
    { label: "Fikstür", href: "/fixtures" },
    { label: "Puan Durumu", href: "/standings" },
  ],
};

export const FooterLeaguesColumn: FooterColumn = {
  title: "Ligler",
  links: [
    { label: "Süper Lig", href: "/standings", query: "Süper Lig" },
    { label: "Premier League", href: "/standings", query: "Premier League" },
    { label: "Serie A", href: "/standings", query: "Serie A" },
    { label: "La Liga", href: "/standings", query: "La Liga" },
    { label: "Bundesliga", href: "/standings", query: "Bundesliga" },
    { label: "Ligue 1", href: "/standings", query: "Ligue 1" },
  ],
};

export const FooterSocialColumn: FooterColumn = {
  title: "Sosyal Medya",
  links: [
    { label: "GitHub", href: "/" },
    { label: "Linkedin", href: "/" },
    { label: "X", href: "/" },
  ],
};

export const FOOTER_COLUMNS: FooterColumn[] = [
  FooterPageColumn,
  FooterLeaguesColumn,
  FooterSocialColumn,
];
