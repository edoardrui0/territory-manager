import React from "react";
import "./App.css";

const data = {
  addresses: [
    {
      streetOrAvenue: "NW 19 Ave",
      houseOrBuildingNumber: "1843",
      unit: "101",
      city: "Miami",
      state: "Florida",
      zip: "33125",
      records: [
        {
          date: "2020-06-08",
          mark: "NC",
          notes: "",
        },
        {
          date: "2020-06-07",
          mark: "H",
          notes: "Le dejé la Atalaya #4",
        },
      ],
    },
    {
      streetOrAvenue: "NW 19 Ave",
      houseOrBuildingNumber: "1843",
      unit: "102",
      city: "Miami",
      state: "Florida",
      zip: "33125",
      records: [
        {
          date: "2020-06-08",
          mark: "M",
          notes: "Le deje el tratado del futuro",
        },
        {
          date: "2020-06-07",
          mark: "NC",
          notes: "",
        },
      ],
    },
    {
      streetOrAvenue: "NW 19 Ave",
      houseOrBuildingNumber: "1845",
      unit: null,
      city: "Miami",
      state: "Florida",
      zip: "33125",
      records: [
        {
          date: "2020-06-08",
          mark: "NC",
          notes: "",
        },
        {
          date: "2020-06-07",
          mark: "NC",
          notes: "",
        },
      ],
    },
  ],
};

function App() {
  const [addresses, setAddresses] = React.useState(JSON.parse(localStorage.getItem('data')) ?? data.addresses);
  const [houseNumber, setHouseNumber] = React.useState('');
  const [street, setStreet] = React.useState('');

  function handleSubmit() {
    const newAddresses = [
      ...addresses,
      {
        houseOrBuildingNumber: houseNumber,
        streetOrAvenue: street
      }
    ];
    setAddresses(newAddresses);
    localStorage.setItem('data', JSON.stringify(newAddresses))
    setHouseNumber('');
    setStreet('');
  }

  return (
    <div className="App">
      {addresses.map((address, index) => {
        return (
          <div className="address" key={index}>
            <div className="line1">
              {address.houseOrBuildingNumber} {address.streetOrAvenue}
            </div>
            {address.unit && <div className="unit">Apt# {address.unit}</div>}
            <div className="line2">
              {address.city} {address.state}, {address.zip}
            </div>
          </div>
        );
      })}
      <div className="createAddressForm">
        <div>
          <label>House or Building Number</label>
          <input name="housenumber" value={houseNumber} onChange={event => {
            setHouseNumber(event.target.value);
          }} />
        </div>
        <div>
          <label>Street or Avenue</label>
          <input name="street" value={street} onChange={event => {
            setStreet(event.target.value);
          }} />
        </div>
        <button
          onClick={handleSubmit}
        >
          Add address
        </button>
      </div>
    </div>
  );
}

export default App;
