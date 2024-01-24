import Image from 'next/image';
import Link from 'next/link';

import Search from '@/app/ui/dashboard/Search/Search';
import Pagination from '@/app/ui/dashboard/Pagination/Pagination';
import styles from '@/app/ui/dashboard/Products/Products.module.css';

const ProductsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder='Search for a product...' />
        <Link href='/dashboard/products/add'>
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {/* {products.map((product) => (
            <tr key={product.id}>
              <td>
                <div className={styles.product}>
                  <Image
                    src={product.img || '/noproduct.jpg'}
                    alt=''
                    width={40}
                    height={40}
                    className={styles.productImage}
                  />
                  {product.title}
                </div>
              </td>
              <td>{product.desc}</td>
              <td>${product.price}</td>
              <td>{product.createdAt?.toString().slice(4, 16)}</td>
              <td>{product.stock}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/products/${product.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteProduct}>
                    <input type='hidden' name='id' value={product.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))} */}
          <td>
            <div className={styles.product}>
              <Image
                src={'/noproduct.jpg'}
                alt=''
                width={40}
                height={40}
                className={styles.productImage}
              />
              Iphone 12
            </div>
          </td>
          <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
          <td>$1000</td>
          <td>12.12.2023</td>
          <td>In stock</td>
          <td>
            <div className={styles.buttons}>
              <Link href={`/dashboard/products/id`}>
                <button className={`${styles.button} ${styles.view}`}>
                  View
                </button>
              </Link>
              <form>
                <input type='hidden' name='id' />
                <button className={`${styles.button} ${styles.delete}`}>
                  Delete
                </button>
              </form>
            </div>
          </td>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default ProductsPage;
