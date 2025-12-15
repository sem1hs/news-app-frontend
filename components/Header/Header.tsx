import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between px-6 py-6">
      <h1 className="text-white text-2xl font-bold">SemihScore</h1>
      <Navbar />
      <SearchBar />
    </header>
  );
};

export default Header;
