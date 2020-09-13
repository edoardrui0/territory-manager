import React from "react";
import classnames from "classnames";
import styles from "./Card.module.css";

export default function Card({ children, className, ...props }) {
  return (
    <div {...props} className={classnames(styles.border, className)}>
      {children}
    </div>
  );
}
