import type { FooterColumn } from "@/constants/FOOTER_ITEM";
import FooterLink from "./FooterLink";

type Props = {
  footerColumn: FooterColumn;
};

const FooterColumn = ({ footerColumn }: Props) => {
  return (
    <div>
      <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
        {footerColumn.title}
      </h4>
      <ul className="mt-4 space-y-3">
        {footerColumn.links.map((link) => (
          <FooterLink footerLink={link} key={link.label} />
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
