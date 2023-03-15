import styles from './get-fact.module.css';
import React from 'react';
import Link from 'next/link';

// TODO

function ManageFacts({ facts }: { facts: String[] }) {
  const factCards = (facts: String[]) => {
    return facts.map((fact, index) => <div key={index}>{fact} [delete]</div>)
  };

  return (
    <div className={styles.container}>
      <div>
        <Link
          href="/"
          className={styles.iconButton}
          role="button"
          data-testid="back-button"
          title="Back">&#129044;</Link>
        <span
          className={styles.iconButton}
          role="button"
          data-testid="new-fact-button"
          title="Refresh facts">&#43;</span>
      </div>

      <div>
        {facts.length ? factCards(facts) : 'No facts' }
      </div>
    </div>
  );
}

export default ManageFacts;
