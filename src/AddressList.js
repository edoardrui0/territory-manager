import React from "react";
import { Link } from "react-router-dom";
import styles from "./AddressList.module.css";
import Card from "./Card";
import PageHeader from "./PageHeader";

// import { Redirect } from "react-router-dom";

export function AddressList({ addresses }) {
  return (
    <div className={styles.container}>
      <PageHeader
        title="Addresses"
        description="Select an Address to view its details"
      />

      {addresses.map((address) => {
        return (
          <Link
            key={address.id}
            to={`/addresses/${address.id}`}
            className={styles.addressBox}
          >
            <Card>
              <div className={styles.line}>
                {address.houseOrBuildingNumber} {address.streetOrAvenue}
              </div>
              {address.unit && (
                <div className={styles.line}>Apt# {address.unit}</div>
              )}
              <div className={styles.line}>
                {address.city} {address.state}, {address.zip}
              </div>
            </Card>
          </Link>
        );
      })}

      <Link to={`/new-address`} className={styles.buttonLink}>
        Add a new address
      </Link>
    </div>
  );
}
