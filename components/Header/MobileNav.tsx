import MobileNavItemList from "./MobileNavItemList";

const MobileNav = () => {
  return (
    <nav className="flex-1">
      <ul className="h-[75%] flex flex-col items-left justify-around">
        <MobileNavItemList />
      </ul>
    </nav>
  );
};

export default MobileNav;
