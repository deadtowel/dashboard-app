import Navbar from '@/app/ui/dashboard/Navbar/Navbar';
import Sidebar from '@/app/ui/dashboard/Sidebar/Sidebar';
import styles from '@/app/ui/dashboard/dashboard.module.css';

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.menu}>
          <Sidebar />
        </div>
        <div className={styles.content}>
          <Navbar />
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
