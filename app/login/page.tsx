import styles from '@/app/ui/login/Login.module.css';

type LoginPageProps = {};

const LoginPage: React.FC<LoginPageProps> = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1>Login</h1>
        <input type='text' placeholder='username' name='username' />
        <input type='password' placeholder='password' name='password' />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
