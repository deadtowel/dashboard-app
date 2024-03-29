import styles from '@/app/ui/dashboard/Products/AddProduct/AddProduct.module.css';

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input type='text' placeholder='Title' name='title' required />
        <select name='category' id='category'>
          <option value='general'>Choose a Category</option>
          <option value='kitchen'>Kitchen</option>
          <option value='phone'>Phone</option>
          <option value='computer'>Computer</option>
        </select>
        <input type='number' placeholder='Price' name='price' required />
        <input type='number' placeholder='Stock' name='stock' required />
        <input type='text' placeholder='Color' name='color' />
        <input type='text' placeholder='Size' name='size' />
        <textarea
          required
          name='description'
          id='description'
          rows={16}
          placeholder='Description'
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default AddProductPage;
