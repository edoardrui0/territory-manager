import React from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./AddressDetail.module.css";

console.log(styles);

export function AddressDetail({ addresses, onSubmit }) {
  let { addressId } = useParams();

  const address = addresses.find((addrs) => {
    return addrs.id === addressId;
  });

  if (!address) {
    return <div>Not found</div>;
  }

  return (
    <div className={styles.address}>
      <div className={styles.selectedAddress}>
        <div className="line1">
          {address.houseOrBuildingNumber} {address.streetOrAvenue}
        </div>
        {address.unit && <div className="unit">Apt# {address.unit}</div>}
        <div className="line2">
          {address.city} {address.state}, {address.zip}
        </div>
      </div>

      <div>
        
      </div>

      <Link to="/householder-detail">
        <form className={styles.newInfo}>
          <button type="submit" className={styles.records}>
            Add new householder information
          </button>
        </form>
      </Link>
    </div>
  );
}
