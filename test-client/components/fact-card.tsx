import styles from './fact-card.module.css';
import React from 'react';

function FactCard({ index, fact }: { index: number, fact: String }) {
  return (
    <div className={styles.factCard} data-testid={`fact-card-${index}`} key={index}>
      <h4 className={styles.factHeading}>Fact #{index + 1}</h4>
      <p data-testid={`fact-${index}`}>{ fact }</p>
    </div>
  );
}

export default FactCard;
