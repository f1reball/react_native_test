import React from 'react';
import { Link, Route, NavLink } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Home.css';


import DATABASESIDEPANEL from './databaseSidePanel';
import HOMESIDEPANEL from './homeSidePanel';

export default function Home(): JSX.Element {
  return (

    <div className={styles.contents} data-tid="contents">

      <div className={styles.container} data-tid="container">

        <div className={styles.navLeft} data-tid="navLeft">

          <NavLink exact to={routes.HOME} activeClassName={styles.active}>
          <div className={styles.navLeftSpacers}>
            <i className="fas fa-pencil-ruler"></i>
          </div>
          </NavLink>

          <NavLink exact to={routes.DATABASE} activeClassName={styles.active}>
          <div className={styles.navLeftSpacers}>
            <i className="fas fa-database"></i>
          </div>
          </NavLink>

          <NavLink exact to={routes.AI} activeClassName={styles.active}>
          <div className={styles.navLeftSpacers}>
            <i className="fas fa-microchip"></i>
          </div>
          </NavLink>

            <NavLink exact to={routes.HELP} activeClassName={styles.active}>
            <div className={styles.navLeftSpacers}>
              <i className="fas fa-question"></i>
            </div>
            </NavLink>

        </div>

        <Route exact path={routes.HOME}>
        <div className={styles.navInfo} data-tid="navInfo">
          <p>DRAWING PAGE</p>

          <HOMESIDEPANEL />

        </div>
        </Route>


        <Route exact path={routes.DATABASE}>
          <div className={styles.navInfo} data-tid="navInfo">
            <DATABASESIDEPANEL />
          </div>
        </Route>

        <Route exact path={routes.AI}>
        <div className={styles.navInfo} data-tid="navInfo">
          <p>AI</p>
        </div>
        </Route>


        <Route exact path={routes.HELP}>
        <div className={styles.navInfo} data-tid="navInfo">

          <div className={styles.helpSearch} data-tid="helpSearch">
            <input type="text" placeholder="Search.." />
          </div>
        </div>
        </Route>



        <div className={styles.displayInfo} data-tid="displayInfo">

          <div className={styles.logo} data-tid="logo">
            <h1>Tr_IO</h1>
          </div>

          <p>DISPLAY</p>
          <p>TEST</p>
          <p>TEST</p>
        </div>

      </div>


    </div>
  );
}
