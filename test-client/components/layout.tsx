import React from 'react';
import styles from './layout.module.css';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Animal Facts</h1>
      </header>
      <div className={styles.infoBox}>
        This is a simple NextJS frontend. It's purpose is to act as a test playground using tools such as Playwright or React Test Library.
      </div>
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
}

export default Layout;
