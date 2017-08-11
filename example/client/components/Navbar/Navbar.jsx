import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';

import styles from './styles.css';

export const Navbar = () => {
  return(
    <div className={styles.App_header}>
      <div className={styles.header_content}>
        <div>
          <Link to={'/'}>Music App</Link>
        </div>
        <div className={styles.header_right_content}>
          <div className={styles.right_buttons}>
            <Link to={'/albums'}>Albums</Link>
            <Link to={'/songs'}>Songs</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
