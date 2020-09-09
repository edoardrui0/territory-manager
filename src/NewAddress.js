import React from "react";
import { useHistory } from "react-router-dom";
import { createRandomString } from "./utils/createRandomString";
import styles from "./NewAddress.module.css";

export function NewAddress({ addresses, onSubmit }) {
  const [houseNumber, setHouseNumber] = React.useState("");
  const [street, setStreet] = React.useState("");
  const [cityName, setCity] = React.useState("");
  const [stateName, setState] = React.useState("");
  const [zipCode, setZipCode] = React.useState("");

  let history = useHistory();

  function handleSubmit() {
    onSubmit({
      id: createRandomString(),
      houseOrBuildingNumber: houseNumber,
      streetOrAvenue: street,
      city: cityName,
      state: stateName,
      zip: zipCode,
      records: [],
    });

    setHouseNumber("");
    setStreet("");
    setCity("");
    setState("");
    setZipCode("");

    history.push("/");
  }

  return (
    <div className={styles.area}>
      <div className={styles.header}>New Address</div>

      <div className={styles.helpfulInfo}>Input the required information</div>

      <div className={styles.createAddressForm}>
        <div className={styles.inputForm}>
          <label className={styles.labelStyle}>House or Building Number</label>
          <input
            className={styles.input}
            name="housenumber"
            value={houseNumber}
            onChange={(event) => {
              setHouseNumber(event.target.value);
            }}
          />
        </div>
        <div className={styles.inputForm}>
          <label className={styles.labelStyle}>Street or Avenue</label>
          <input
            className={styles.input}
            name="street"
            value={street}
            onChange={(event) => {
              setStreet(event.target.value);
            }}
          />
        </div>
        <div className={styles.inputForm}>
          <label className={styles.labelStyle}>City</label>
          <input
            className={styles.input}
            name="cityName"
            value={cityName}
            onChange={(event) => {
              setCity(event.target.value);
            }}
          />
        </div>
        <div className={styles.inputForm}>
          <label className={styles.labelStyle}>State</label>
          <input
            className={styles.input}
            name="stateName"
            value={stateName}
            onChange={(event) => {
              setState(event.target.value);
            }}
          />
        </div>
        <div className={styles.inputForm}>
          <label className={styles.labelStyle}>Zip Code</label>
          <input
            className={styles.input}
            name="zipCode"
            value={zipCode}
            onChange={(event) => {
              setZipCode(event.target.value);
            }}
          />
        </div>
      </div>

      <div className={styles.addressButtonBox}>
        <div
          className={styles.addressButton}
          type="submit"
          onClick={handleSubmit}
        >
          Add address
        </div>
      </div>
    </div>
  );
}
