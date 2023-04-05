import React from 'react';
import styles from './blah.module.css';

function TopBanner() {
  return (
    <>
      <div className="row">
        <div className="col-3">
          <img src="./logo192.png" alt="companyLogo" />
        </div>

        <div className="col align-self-center text-start">
          <h1 className="{styles.h1}">Nathaniels react site!!!!!!</h1>
        </div>
      </div>
    </>
  );
}

export default TopBanner;
