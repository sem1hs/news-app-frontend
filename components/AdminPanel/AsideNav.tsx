import AsideNavItemList from "./AsideNavItemList";

type Props = {
  isOpen: boolean;
};

const AsideNav = ({ isOpen }: Props) => {
  return (
    <nav >
      <ul className="flex flex-col gap-4">{isOpen && <AsideNavItemList />}</ul>
    </nav>
  );
};

export default AsideNav;
