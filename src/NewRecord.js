import React from "react";
import styles from "./NewRecord.module.css";
import { useHistory, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import { formatISO } from "date-fns";
import { createRandomString } from "./utils/createRandomString";
import Input from "./Input";

export function NewRecord({ onSubmit }) {
  const [newDate, setNewDate] = React.useState(new Date());
  const [newMark, setNewMark] = React.useState("");
  const [newNotes, setNewNotes] = React.useState("");

  let { addressId } = useParams();

  let history = useHistory();

  function handleSubmit() {
    onSubmit(
      {
        id: createRandomString(),
        date: formatISO(newDate, { representation: "date" }),
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
          <div className={styles.datepicker}>
            <DatePicker
              customInput={<Input />}
              selected={newDate}
              onChange={(date) => setNewDate(date)}
            />
          </div>
        </div>

        <div className={styles.newInfo}>
          <label htmlFor="addNewMark">Mark</label>
          <Input
            id="addNewMark"
            value={newMark}
            type="text"
            onChange={(event) => {
              setNewMark(event.target.value);
            }}
          />
        </div>

        <div className={styles.newInfo}>
          <label htmlFor="addNewNotes">Notes</label>
          <textarea
            rows="4"
            id="addNewNotes"
            value={newNotes}
            type="text"
            className={styles.textarea}
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
