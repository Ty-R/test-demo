import React from 'react';
import styles from './layout.module.css';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Animal Facts</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
