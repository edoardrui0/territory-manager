import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect,
} from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./App.module.css";
import * as storage from "./utils/storage";
import { AddressList } from "./pages/AddressList";
import { NewAddress } from "./pages/NewAddress";
import { AddressDetail } from "./pages/AddressDetail";
import { NewRecord } from "./pages/NewRecord";
import { data } from "./data";

import { AiFillHome } from "react-icons/ai";

function App() {
  const [addresses, setAddresses] = React.useState(
    storage.get("data") ?? data.addresses
  );

  function addNewAddress(newAddress) {
    const newAddresses = [...addresses, newAddress];

    setAddresses(newAddresses);
    storage.set("data", newAddresses);
  }

  function addNewRecord(newRecord, addressId) {
    // get existing address object (find it using the addressId that was passed)
    const existingAddress = addresses.find(
      (address) => address.id === addressId
    );

    // from the existing address, save the records in a variable and make sure it is an array (with ?? fallback)
    const existingAddressRecords = existingAddress.records ?? [];

    // create the new version of the address, which will contain the new record
    const newAddress = {
      ...existingAddress, // keep the existing address properties
      records: [
        ...existingAddressRecords, // keep the existing records
        newRecord, // add the new record to the records array
      ],
    };

    // create the new version of the addresses array, which will contain the new version of the address
    const newAddresses = addresses.map((address) => {
      if (address.id === addressId) {
        return newAddress;
      } else {
        return address;
      }
    });

    // save the new version of the addresses array in the app's state
    setAddresses(newAddresses);
    // save the new version of the addresses array in localStorage
    storage.set("data", newAddresses);
  }

  return (
    <Router>
      <div className={styles.blueBackground} />
      <div className={styles.appContainer}>
        <nav className={styles.navbar}>
          <Link to="/">
            <AiFillHome />
          </Link>
          {/* <li>
            <Link to="/new-address">New Address</Link>
          </li>
          <li>
            <Link to="/householder-detail">Householder Detail</Link>
          </li> */}
        </nav>
        <Switch>
          <Route path="/new-address">
            <NewAddress addresses={addresses} onSubmit={addNewAddress} />
          </Route>
          <Route path="/addresses/:addressId/new-record">
            <NewRecord addresses={addresses} onSubmit={addNewRecord} />
          </Route>
          <Route path="/addresses/:addressId">
            <AddressDetail addresses={addresses} />
          </Route>
          <Route path="/addresses">
            <AddressList addresses={addresses} />
          </Route>

          <Redirect from="/" to="/addresses" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
