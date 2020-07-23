import React from "react";
import { useParams } from "react-router-dom";

export function AddressDetail({ addresses }) {
  let { addressId } = useParams();

  const address = addresses.find((addrs) => {
    return addrs.id === addressId;
  });

  if (!address) {
    return <div>Not found</div>;
  }

  return (
    <div>
      <div className="line1">
        {address.houseOrBuildingNumber} {address.streetOrAvenue}
      </div>
      {address.unit && <div className="unit">Apt# {address.unit}</div>}
      <div className="line2">
        {address.city} {address.state}, {address.zip}
      </div>
    </div>
  );
}
