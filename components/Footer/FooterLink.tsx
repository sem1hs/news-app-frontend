import type { FooterLink } from "@/constants/FOOTER_ITEM";
import Link from "next/link";

type Props = {
  footerLink: FooterLink;
};
const FooterLink = ({ footerLink }: Props) => {
  return (
    <li className="text-sm text-zinc-400 hover:text-white transition">
      <Link href={footerLink.href}>{footerLink.label}</Link>
    </li>
  );
};

export default FooterLink;
