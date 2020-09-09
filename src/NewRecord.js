import React from "react";
import styles from "./NewRecord.module.css";
import { useHistory, useParams } from "react-router-dom";
import { createRandomString } from "./utils/createRandomString";

export function NewRecord({ onSubmit }) {
  const [newDate, setNewDate] = React.useState("");
  const [newMark, setNewMark] = React.useState("");
  const [newNotes, setNewNotes] = React.useState("");

  let { addressId } = useParams();

  let history = useHistory();

  function handleSubmit() {
    onSubmit(
      {
        id: createRandomString(),
        date: newDate,
        mark: newMark,
        notes: newNotes,
      },
      addressId
    );

    setNewDate("");
    setNewMark("");
    setNewNotes("");

    history.push(`/addresses/${addressId}`);
  }

  return (
    <div className={styles.area}>
      <div className={styles.header}>New Record</div>

      <div className={styles.helpfulInfo}>
        Input the experience you had with the householder
      </div>

      <div className={styles.newInfoBox}>
        <div className={styles.newInfo}>
          <label htmlFor="addNewDate">Date</label>
          <input
            id="addNewDate"
            value={newDate}
            type="text"
            className={styles.dateInput}
            onChange={(event) => {
              setNewDate(event.target.value);
            }}
          />
        </div>

        <div className={styles.newInfo}>
          <label htmlFor="addNewMark">Mark</label>
          <input
            id="addNewMark"
            value={newMark}
            type="text"
            className={styles.markInput}
            onChange={(event) => {
              setNewMark(event.target.value);
            }}
          />
        </div>

        <div className={styles.newInfo}>
          <label htmlFor="addNewNotes">Notes</label>
          <textarea
            rows="8"
            cols="31"
            id="addNewNotes"
            value={newNotes}
            type="text"
            className={styles.notesInput}
            onChange={(event) => {
              setNewNotes(event.target.value);
            }}
          />
        </div>
      </div>

      <div className={styles.submitButtonBox}>
        <div
          type="submit"
          className={styles.submitButton}
          onClick={handleSubmit}
        >
          Add New Info
        </div>
      </div>
    </div>
  );
}
