
import React from "react";
import Header from '../../components/Header';
import styles from './styles.modules.scss';

const HomePage = ({ history }) => {
    return (
       <div className={styles.homePage}>
          <Header />
       </div>
    );
}

export default HomePage;