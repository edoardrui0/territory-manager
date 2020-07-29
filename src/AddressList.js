import React from "react";
import { Link } from "react-router-dom";
import styles from "./AddressList.module.css";

export function AddressList({ addresses }) {
  return (
    <div className={styles.linkBox}>
      {addresses.map((address, index) => {
        return (
          <Link key={index} className={styles.link} to={`/addresses/${address.id}`}>
            <div className={styles.address}>
              <div className="line1">
                {address.houseOrBuildingNumber} {address.streetOrAvenue}
              </div>
              {address.unit && <div className="unit">Apt# {address.unit}</div>}
              <div className="line2">
                {address.city} {address.state}, {address.zip}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
