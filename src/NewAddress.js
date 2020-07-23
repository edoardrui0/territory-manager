import React from "react";
import { useHistory } from "react-router-dom";
import { createRandomString } from './utils/createRandomString'

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
    });
    
    setHouseNumber("");
    setStreet("");
    setCity("");
    setState("");
    setZipCode("");

    history.push("/");
  }

  return (
    <div>
      <div className="createAddressForm">
        <div className="inputForm">
          <label>House or Building Number</label>
          <input
            name="housenumber"
            value={houseNumber}
            onChange={(event) => {
              setHouseNumber(event.target.value);
            }}
          />
        </div>
        <div className="inputForm">
          <label>Street or Avenue</label>
          <input
            name="street"
            value={street}
            onChange={(event) => {
              setStreet(event.target.value);
            }}
          />
        </div>
        <div className="inputForm">
          <label>City</label>
          <input
            name="cityName"
            value={cityName}
            onChange={(event) => {
              setCity(event.target.value);
            }}
          />
        </div>
        <div className="inputForm">
          <label>State</label>
          <input
            name="stateName"
            value={stateName}
            onChange={(event) => {
              setState(event.target.value);
            }}
          />
        </div>
        <div className="inputForm">
          <label>Zip Code</label>
          <input
            name="zipCode"
            value={zipCode}
            onChange={(event) => {
              setZipCode(event.target.value);
            }}
          />
        </div>
        <button onClick={handleSubmit}>Add address</button>
      </div>
    </div>
  );
}
