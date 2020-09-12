import React from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./AddressDetail.module.css";

console.log(styles);

export function AddressDetail({ addresses }) {
  let { addressId } = useParams();

  const address = addresses.find((addrs) => {
    return addrs.id === addressId;
  });

  if (!address) {
    return <div>Not found</div>;
  }

  function getMarkCircleColor(mark) {
    return mark.toUpperCase() === "DO NOT CALL"
      ? styles.redCircle
      : mark.toUpperCase() === "WOMAN"
      ? styles.pinkCircle
      : mark.toUpperCase() === "MAN"
      ? styles.blueCircle
      : styles.circle;
  }

  function getMarkLabelColor(mark) {
    return mark.toUpperCase() === "DO NOT CALL"
      ? styles.redMarkStyle
      : styles.markStyle;
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
                  <div className={getMarkCircleColor(record.mark)}></div>
                  <div className={getMarkLabelColor(record.mark)}>
                    {record.mark.toUpperCase()}
                  </div>
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
