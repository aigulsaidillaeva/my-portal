import React from "react";
import styles from "./styles.module.css";
const Button = (props) => {
  return <button className={styles.btn}>{props.children}</button>;
};

export default Button;
