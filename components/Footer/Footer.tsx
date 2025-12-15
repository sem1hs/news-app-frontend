import { FOOTER_COLUMNS } from "@/constants/FOOTER_ITEM";
import FooterColumn from "./FooterColumn";

const Footer = () => {
  return (
    <footer className="bg-[#111517] mt-auto">
      <div className="max-w-7xl mx-auto px-5 md:px-12 lg:px-16 py-5 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h1 className="text-white font-bold text-xl md:text-3xls">
              SemihScore
            </h1>
          </div>
          {FOOTER_COLUMNS.map((column) => (
            <FooterColumn key={column.title} footerColumn={column} />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
