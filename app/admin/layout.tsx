import Aside from "@/components/AdminPanel/Aside";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen">
      <Aside />
      <main className="flex-1 min-w-0">{children}</main>
    </div>
  );
}
