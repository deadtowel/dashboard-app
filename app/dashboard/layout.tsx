import Navbar from '../ui/dashboard/Navbar/Navbar';
import Sidebar from '../ui/dashboard/Sidebar/Sidebar';

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Navbar />
      <Sidebar />
      {children}
    </>
  );
};

export default Layout;
