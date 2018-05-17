import React from 'react';

import styles from './styles.scss';

export default function Square(props) {
  return (
    <button className={styles.square} onClick={props.onClick}>
      {props.value}
    </button>
  );
}
