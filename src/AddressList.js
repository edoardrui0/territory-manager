import React from "react";
import { Link } from "react-router-dom";
import styles from "./AddressList.module.css";

// import { Redirect } from "react-router-dom";

export function AddressList({ addresses }) {
  return (
    <div className={styles.linkArea}>
      <div className={styles.header}>Addresses</div>

      <div className={styles.helpfulInfo}>
        Select an Address to view its details
      </div>

      {addresses.map((address) => {
        return (
          <div key={address.id} className={styles.addressBox}>
            <Link
              className={styles.addressLink}
              to={`/addresses/${address.id}`}
            >
              <div className={styles.address}>
                <div className={styles.line}>
                  {address.houseOrBuildingNumber} {address.streetOrAvenue}
                </div>
                {address.unit && (
                  <div className={styles.line}>Apt# {address.unit}</div>
                )}
                <div className={styles.line}>
                  {address.city} {address.state}, {address.zip}
                </div>
              </div>
            </Link>
          </div>
        );
      })}

      <div className={styles.linkBox}>
        <Link to={`/new-address`} className={styles.link}>
          Add a new address
        </Link>
      </div>
    </div>
  );
}
