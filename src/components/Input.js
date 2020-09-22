import React from "react";
import classnames from "classnames";
import styles from "./Input.module.css";

export default function Input({ className, ...props }) {
  return <input {...props} className={classnames(styles.input, className)} />;
}
