import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import * as storage from './utils/storage'
import {AddressList} from './AddressList';
import {NewAddress} from './NewAddress';
import {AddressDetail} from './AddressDetail';
import { data } from "./data";


function App() {
  const [addresses, setAddresses] = React.useState(
    storage.get("data") ?? data.addresses
  );

  function handleSubmit(newAddress) {
    const newAddresses = [
      ...addresses,
      newAddress,
    ];

    setAddresses(newAddresses);
    storage.set("data", newAddresses);
  }

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/new-address">New Address</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/new-address">
            <NewAddress addresses={addresses} onSubmit={handleSubmit} />
          </Route>
          <Route path="/addresses/:addressId">
            <AddressDetail addresses={addresses} />
          </Route>
          <Route path="/addresses">
            <AddressList addresses={addresses} />
          </Route>
          <Redirect path="/" to="/addresses" />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
