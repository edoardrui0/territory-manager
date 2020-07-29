import React from "react";
import { useParams } from "react-router-dom";
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

  function addNewAddressInfo(event) {
    event.preventDefault();
    const addNewInfo = event.target[0].value;

    alert(`You entered: ${addNewInfo}`);
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

      <form onSubmit={addNewAddressInfo} className={styles.newInfo}>
        <div>
          <label htmlFor="addNewInfo">Please add new householder info: </label>
          <input
            id="addNewInfo"
            type="text"
            className={styles.addressInput}
          ></input>
        </div>

        <button type="submit" className={styles.records}>
          Add new householder information
        </button>
      </form>
    </div>
  );
}
