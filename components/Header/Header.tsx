import AuthClient from "./auth/AuthClient";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="hidden w-full md:flex items-center justify-between px-6 py-6 bg-[#111517]">
      <h1 className="text-white text-2xl font-bold">SemihScore</h1>
      <Navbar />
      <div className="flex items-center gap-12">
        <AuthClient />
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
