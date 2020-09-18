import React from "react";
import styles from "./PageHeader.module.css";

export default function PageHeader({ title, description }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.desc}>{description}</div>
    </div>
  );
}
