import React from "react";
import { Link } from "react-router-dom";

export function AddressList({ addresses }) {
  return (
    <div>
      {addresses.map((address, index) => {
        return (
          <Link key={index} className="address" to={`/addresses/${address.id}`}>
            <div>
              <div className="line1">
                {address.houseOrBuildingNumber} {address.streetOrAvenue}
              </div>
              {address.unit && <div className="unit">Apt# {address.unit}</div>}
              <div className="line2">
                {address.city} {address.state}, {address.zip}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
