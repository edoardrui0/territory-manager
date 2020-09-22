import React from "react";
import styles from "./SubmitButton.module.css";

export default function SubmitButton({ button }) {
  return (
    <div className={styles.container}>
      <div class={styles.button}>{button}</div>
    </div>
  );
}
