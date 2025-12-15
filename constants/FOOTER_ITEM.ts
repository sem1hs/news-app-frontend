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
    { label: "Hakkımızda", href: "/about" },
  ],
};

export const FooterLeaguesColumn: FooterColumn = {
  title: "Ligler",
  links: [
    { label: "Süper Lig", href: "/" },
    { label: "Premier League", href: "/" },
    { label: "Serie A", href: "/" },
    { label: "La Liga", href: "/" },
    { label: "Bundesliga", href: "/" },
    { label: "Ligue 1", href: "/" },
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
