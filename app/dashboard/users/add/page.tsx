import styles from '@/app/ui/dashboard/Users/AddUser/AddUser.module.css';

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input type='text' placeholder='Username' name='username' required />
        <input type='email' placeholder='Email' name='email' required />
        <input
          type='password'
          placeholder='Password'
          name='password'
          required
        />
        <input type='phone' placeholder='Phone' name='phone' />
        <div>
          <label htmlFor='isAdmin' className={styles.label}>
            Is admin?
          </label>
          <select name='isAdmin' id='isAdmin'>
            <option value={1}>Yes</option>
            <option value={0}>No</option>
          </select>
        </div>
        <div>
          <label htmlFor='isActive' className={styles.label}>
            Is active?
          </label>
          <select name='isActive' id='isActive'>
            <option value={1}>Yes</option>
            <option value={0}>No</option>
          </select>
        </div>
        <textarea
          name='address'
          id='address'
          rows={16}
          placeholder='Address'
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default AddUserPage;
