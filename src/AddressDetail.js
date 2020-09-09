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
    <div className={styles.area}>
      <div className={styles.header}>Address Detail</div>

      <div className={styles.helpfulInfo}>
        Click on a experience to expand on it Click “Add New” to add a new
        experience
      </div>

      <div className={styles.selectedAddress}>
        <div className="line1">
          {address.houseOrBuildingNumber} {address.streetOrAvenue}
        </div>
        {address.unit && <div className="unit">Apt# {address.unit}</div>}
        <div className="line2">
          {address.city} {address.state}, {address.zip}
        </div>
      </div>

      {address.records.map((record) => {
        return (
          <div key={record.id} className={styles.recordBox}>
            <div className={styles.records}>
              <div className={styles.recordAround}>
                <div className={styles.dateStyle}>{record.date}</div>
                <div className={styles.recordRight}>
                  <div className={styles.circle}></div>
                  <div className={styles.markStyle}>{record.mark}</div>
                </div>
              </div>
              <div className={styles.notesStyle}>{record.notes}</div>
            </div>
          </div>
        );
      })}

      <Link
        to={`/addresses/${addressId}/new-record`}
        className={styles.recordLink}
      >
        Add New Info
      </Link>
    </div>
  );
}
