export type FooterColumn = {
  title: string;
  links: FooterLink[];
};

export type FooterLink = {
  label: string;
  href: string;
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
    { label: "Süper Lig", href: "/standings" },
    { label: "Premier League", href: "/standings" },
    { label: "Serie A", href: "/standings" },
    { label: "La Liga", href: "/standings" },
    { label: "Bundesliga", href: "/standings" },
    { label: "Ligue 1", href: "/standings" },
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
