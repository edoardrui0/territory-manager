import React from "react";
import { useHistory } from "react-router-dom";
import { createRandomString } from "./utils/createRandomString";
import styles from "./NewAddress.module.css";
import Input from "./Input";

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
          <Input
            name="housenumber"
            value={houseNumber}
            onChange={(event) => {
              setHouseNumber(event.target.value);
            }}
          />
        </div>
        <div className={styles.inputForm}>
          <label className={styles.labelStyle}>Street or Avenue</label>
          <Input
            name="street"
            value={street}
            onChange={(event) => {
              setStreet(event.target.value);
            }}
          />
        </div>
        <div className={styles.inputForm}>
          <label className={styles.labelStyle}>City</label>
          <Input
            name="cityName"
            value={cityName}
            onChange={(event) => {
              setCity(event.target.value);
            }}
          />
        </div>
        <div className={styles.inputForm}>
          <label className={styles.labelStyle}>State</label>
          <Input
            name="stateName"
            value={stateName}
            onChange={(event) => {
              setState(event.target.value);
            }}
          />
        </div>
        <div className={styles.inputForm}>
          <label className={styles.labelStyle}>Zip Code</label>
          <Input
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
