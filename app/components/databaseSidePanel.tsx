import React from 'react';
import { Link, Route, NavLink } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './databaseSidePanel.css';

import * as firebase from 'firebase';
let db = firebase.firestore();


class DatabaseSidePanel extends React.Component {
  constructor() {
      super();
      this.state = {
        search: '',
        devices: [],
      };
      this.getdocu = this.getdocu.bind(this);
  }

  componentWillMount() {
    this.getdocu();
  }


  updateSearch(event) {
    this.setState({search: event.target.value});
  }

  async getdocu() {
    this.setState({ devices: [] })

    const citiesRef = db.collection('todo');
    const snapshot = await citiesRef.get();
    snapshot.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
      this.state.devices.push(doc.id);
    });
    this.forceUpdate();
  }





  render() {

    if(this.state.devices.length > 0){
      return(
        <div>

        <div className={styles.helpSearch} data-tid="helpSearch">
        <input type="text"
         value={this.state.search}
         onChange={this.updateSearch.bind(this)}
         placeholder="Search..."
         />
         </div>

         <div className={styles.listings} data-tid="listings">
        <ul>
          {this.state.devices.map((details) => {
            return (
              <li className={styles.listItems} data-tid="listItems">
                {details}
              </li>
            )
          })}
        </ul>

        </div>


        </div>
      )
    } else {
      return(
        <div>

        <div className={styles.helpSearch} data-tid="helpSearch">
        <input type="text"
         value={this.state.search}
         onChange={this.updateSearch.bind(this)}
         placeholder="Search..."
         />
         </div>

         <div className={styles.listings} data-tid="listings">
          <p>Loading...</p>

        </div>


        </div>
      )
    }



  }
}

export default DatabaseSidePanel;
