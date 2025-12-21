import AsideNavItemList from "./AsideNavItemList";

type Props = {
  isOpen: boolean;
};

const AsideNav = ({ isOpen }: Props) => {
  return (
    <nav className="flex flex-col gap-2">
      <ul>{isOpen && <AsideNavItemList />}</ul>
    </nav>
  );
};

export default AsideNav;
