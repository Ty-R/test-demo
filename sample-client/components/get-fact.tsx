import styles from './get-fact.module.css';
import React, { useState } from 'react';

function GetFact({ fetch }: { fetch: Function }) {
  interface Vals {
    name?: string,
    fact?: string,
    imgSrc?: string
  }

  const [value, setValue] = useState<Vals>({});

  const updateState = async () => {
    const fact = await fetch();
    setValue(fact);
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={ updateState } data-testid="fact-button">Get fact</button>
      {value.fact && (
        <div className={styles.container} data-testid="fact-container">
          <h3 data-testid="fact-heading-1">{value.name}</h3>
          <img src={value.imgSrc} alt="animal" data-testid="fact-image"></img>
          <h4 data-testid="fact-heading-2">Fact</h4>
          <span data-testid="fact">{value.fact}</span>
        </div>
      )}
    </div>
  );
}

export default GetFact;
