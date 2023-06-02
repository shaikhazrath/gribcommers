
import React from 'react';
import Link from 'next/link';
import styles from '@/styles/auth.module.css'
import Lottie from 'lottie-react';
import shopAnimation from '../../public/shop.json';
const Signup = () => {
  return (
    <section className={styles.section}>
         <div className={styles.container}>
            <div className={styles.inputContainer}>
            <h2 className={styles.title}>Sign Up</h2>
    <form className={styles.form}>
      <input className={styles.input} type="text" placeholder="Username" />

      <input className={styles.input} type="email" placeholder="Email" />
      <input className={styles.input} type="password" placeholder="Password" />
      <button className={styles.button} type="submit">Sign Up</button>
    </form>
    <p className={styles.signuplink}>
      Don't have an account?{' '}
      <Link href="/auth/signin" className={styles.link}>
        Sign in
      </Link>
    </p>

            </div>
   
    <div className={styles.shop}>
        <div className={styles.shopContent}>
          <div className={styles.shopIcon}>
            <Lottie animationData={shopAnimation} className={styles.image} />
          </div>
       
        </div>
      </div>
    </div>

    </section>
   
  );
};

export default Signup;
