'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './menuLink.module.css';

import { TMenuLink } from '../types';

type MenuLinkProps = {
  item: TMenuLink;
};

const MenuLink: React.FC<MenuLinkProps> = ({ item }) => {
  const pathname = usePathname()

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathname === item.path && styles.active
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
