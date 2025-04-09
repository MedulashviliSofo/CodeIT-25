"use client"
import styles from "./Button.module.css";

const Button = ({ handleSubmit }) => {
  return (
    <button className={styles.button} onClick={handleSubmit}>
      Submit
    </button>
  );
};

export default Button;
