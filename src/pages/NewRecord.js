import React from "react";
import styles from "./NewRecord.module.css";
import { useHistory, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import { formatISO } from "date-fns";
import { createRandomString } from "../utils/createRandomString";
import Input from "../components/Input";
import PageHeader from "../components/PageHeader";
import SubmitButton from "../components/SubmitButton";

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
      <PageHeader
        title="New Record"
        description="Input the experience you had with the householder"
      />

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
          <label htmlFor="recordMark">Mark</label>
          <select
            id="recordMark"
            value={newMark}
            className={styles.input}
            onChange={(event) => {
              setNewMark(event.target.value);
            }}
          >
            <option value="">Please select an option</option>
            <option value="not at home">Not At Home</option>
            <option value="man">Man</option>
            <option value="woman">Woman</option>
            <option value="do not call">Do Not Call</option>
          </select>
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

      <div onClick={handleSubmit}>
        <SubmitButton button="Add New Info" type="submit" />
      </div>
      {/* Ask Yadiel for help here ^^ */}

      {/* <div className={styles.submitButtonBox}>
        <div
          type="submit"
          className={styles.submitButton}
          onClick={handleSubmit}
        >
          Add New Info
        </div>
      </div> */}
    </div>
  );
}
