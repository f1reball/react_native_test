import React from 'react';
import { Link, Route, NavLink } from 'react-router-dom';
import routes from '../constants/routes.json';

import styles from './homeSidePanel.css';

export default function homeSidePanel(): JSX.Element {
  return (

    <div>
    <div className={styles.menuWrapper} data-tid="menuWrapper">

      <i class="fas fa-file"></i>
      <i class="fas fa-archive"></i>
      <i class="fas fa-folder"></i>
      <i class="fas fa-save"></i>


    </div>
    </div>
  );
}
