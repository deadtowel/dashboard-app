import { MdSupervisedUserCircle } from 'react-icons/md';
import styles from './Card.module.css';

const item = {
  title: 'Sales',
  number: '$10,327',
  change: 12.54,
};

const Card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>{item.title}</span>
        <span className={styles.number}>{item.number}</span>
        <span className={styles.detail}>
          <span className={item.change > 0 ? styles.positive : styles.negative}>
            {item.change}%
          </span>{' '}
          {item.change > 0 ? 'more' : 'less'} than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
