import type { FooterLink as FooterLinkType } from "@/constants/FOOTER_ITEM";
import Link from "next/link";

type Props = {
  footerLink: FooterLinkType;
};

const FooterLink = ({ footerLink }: Props) => {
  const href = footerLink.query
    ? {
        pathname: footerLink.href,
        query: { league: footerLink.query },
      }
    : footerLink.href;

  return (
    <li className="text-sm text-zinc-400 hover:text-white transition">
      <Link href={href}>{footerLink.label}</Link>
    </li>
  );
};

export default FooterLink;
