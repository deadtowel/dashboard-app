import Card from '@/app/ui/dashboard/Card/Card';
import Transactions from '@/app/ui/dashboard/Transactions/Transactions';
import Chart from '@/app/ui/dashboard/Chart/Chart';
import Rightbar from '@/app/ui/dashboard/Rightbar/Rightbar';

import styles from '@/app/ui/dashboard/dashboard.module.css';

type DashboardPageProps = {};

const DashboardPage: React.FC<DashboardPageProps> = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          {/* {cards.map((item) => (
            <Card item={item} key={item.id} />
          ))} */}
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default DashboardPage;
