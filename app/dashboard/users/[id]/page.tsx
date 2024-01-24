import Image from 'next/image';

import styles from '@/app/ui/dashboard/users/SingleUser/SingleUser.module.css';

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={'/noavatar.png'} alt='' fill />
        </div>
        Jhon Doe
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input type='hidden' name='id' />
          <label>Username</label>
          <input type='text' name='username' />
          <label>Email</label>
          <input type='email' name='email' />
          <label>Password</label>
          <input type='password' name='password' />
          <label>Phone</label>
          <input type='text' name='phone' />
          <label>Address</label>
          <textarea name='address' />
          <label>Is Admin?</label>
          <select name='isAdmin' id='isAdmin'>
            <option value={1}>Yes</option>
            <option value={0}>No</option>
          </select>
          <label>Is Active?</label>
          <select name='isActive' id='isActive'>
            <option value={1}>Yes</option>
            <option value={0}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
