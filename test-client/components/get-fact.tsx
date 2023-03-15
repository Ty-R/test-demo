import styles from './get-fact.module.css';
import React, { useState } from 'react';
import Link from 'next/link';
import FactCard from './fact-card';

function GetFact({ fetch }: { fetch: Function }) {
  const [facts, setValue] = useState<String[]>([]);

  const updateState = async () => {
    const facts = await fetch({ count: 3 });
    setValue(facts);
  };

  const factCards = (facts: String[]) => {
    return facts.map((fact, index) => <FactCard index={ index } fact={ fact }></FactCard> )
  };

  return (
    <div className={styles.container}>
      <div>
        <span
          className={styles.iconButton}
          role="button"
          onClick={ updateState }
          data-testid="refresh-facts-button"
          title="Refresh facts">&#x21bb;</span>
        <Link
          href="/manage"
          className={styles.iconButton}
          role="button"
          data-testid="manage-facts-button"
          title="Manage facts">&#x2699;</Link>
      </div>

      <div className={styles.factContainer} data-testid="fact-container">
        {facts.length ? factCards(facts) : 'No facts' }
      </div>
    </div>
  );
}

export default GetFact;
