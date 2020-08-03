import React from "react";
import styles from "./HouseholderDetail.module.css";

export function HouseholderDetail() {



  return (
    // onSubmit={addNewAdressInfo}
    <form className={styles.newInfo}>
      <div>
        <label htmlFor="addNewInfo">Please add new householder info: </label>
        <input
          id="addNewInfo"
          type="text"
          className={styles.addressInput}
        ></input>
      </div>

      <button type="submit" className={styles.records}>
        Add new householder information
      </button>
    </form>
  );
}
