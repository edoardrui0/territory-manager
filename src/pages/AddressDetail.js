import React from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./AddressDetail.module.css";
import Card from "../components/Card";
import PageHeader from "../components/PageHeader";
import SubmitButton from "../components/SubmitButton";

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
      ? "#ff5353"
      : mark.toUpperCase() === "WOMAN"
      ? "#ff7edb"
      : mark.toUpperCase() === "MAN"
      ? "#373cd1"
      : "#989898";
  }

  function getMarkLabelColor(mark) {
    return mark.toUpperCase() === "DO NOT CALL" ? "#ff5353" : "#989898";
  }

  return (
    <div className={styles.area}>
      <PageHeader
        title="Address Detail"
        description="Click on a experience to expand on it Click “Add New” to add a new experience"
      />

      <Card className={styles.selectedAddress}>
        <div className="line1">
          {address.houseOrBuildingNumber} {address.streetOrAvenue}
        </div>
        {address.unit && <div className="unit">Apt# {address.unit}</div>}
        <div className="line2">
          {address.city} {address.state}, {address.zip}
        </div>
      </Card>

      {address.records.map((record) => {
        return (
          <Card key={record.id} className={styles.record}>
            <div className={styles.recordHeader}>
              <div className={styles.recordDate}>{record.date}</div>
              <div className={styles.recordMark}>
                <div
                  className={styles.recordMarkCircle}
                  style={{ backgroundColor: getMarkCircleColor(record.mark) }}
                ></div>
                <div
                  className={styles.recordMarkLabel}
                  style={{ color: getMarkLabelColor(record.mark) }}
                >
                  {record.mark.toUpperCase()}
                </div>
              </div>
            </div>
            {record.notes && (
              <div className={styles.recordNotes}>{record.notes}</div>
            )}
          </Card>
        );
      })}

      <Link to={`/addresses/${addressId}/new-record`}>
        <SubmitButton button="Add New Info" />
      </Link>
    </div>
  );
}
