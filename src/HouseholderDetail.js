import React from "react";
import styles from "./HouseholderDetail.module.css";
import { useHistory } from "react-router-dom";

export function HouseholderDetail({ onSubmit }) {
  const [newDate, setNewDate] = React.useState("");
  const [newSymbol, setNewSymbol] = React.useState("");
  const [newNote, setNewNote] = React.useState("");

  let history = useHistory();

  function handleSubmit() {
    onSubmit({
      date: newDate,
      symbol: newSymbol,
      note: newNote,
    });

    setNewDate("");
    setNewSymbol("");
    setNewNote("");

    history.push("/");
  }

  return (
    <form className={styles.newInfo}>
      <div>
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

      <div>
        <label htmlFor="addNewSymbol">Symbol</label>
        <input
          id="addNewSymbol"
          value={newSymbol}
          type="text"
          className={styles.symbolInput}
          onChange={(event) => {
            setNewSymbol(event.target.value);
          }}
        />
      </div>

      <div>
        <label htmlFor="addNewNote">Notes</label>
        <input
          id="addNewNote"
          value={newNote}
          type="text"
          className={styles.noteInput}
          onChange={(event) => {
            setNewNote(event.target.value);
          }}
        />
      </div>

      <button type="submit" className={styles.records} onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}
