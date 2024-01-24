import Image from 'next/image';

import styles from '@/app/ui/dashboard/products/SingleProduct/SingleProduct.module.css';

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src='/noavatar.png' alt='' fill />
        </div>
        Iphone 12
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input type='hidden' name='id' />
          <label>Title</label>
          <input type='text' name='title' />
          <label>Price</label>
          <input type='number' name='price' />
          <label>Stock</label>
          <input type='number' name='stock' />
          <label>Color</label>
          <input type='text' name='color' placeholder={'color'} />
          <label>Size</label>
          <textarea name='size' placeholder={'size'} />
          <label>Category</label>
          <select name='category' id='category'>
            <option value='kitchen'>Kitchen</option>
            <option value='computers'>Computers</option>
          </select>
          <label>Description</label>
          <textarea name='description' id='description' rows={10}></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
