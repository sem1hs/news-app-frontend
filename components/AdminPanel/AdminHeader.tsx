import AdminProfile from "./AdminProfile";

const AdminHeader = () => {
  return (
    <header
      className="
            h-16
            bg-[#111517]
            border-b border-white/10
            flex items-center
            justify-end
            px-6
          "
    >
      <AdminProfile />
    </header>
  );
};

export default AdminHeader;
