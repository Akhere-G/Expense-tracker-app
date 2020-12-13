import React from "react";
import styles from "./AddTransaction.module.css";
import { Add } from "@material-ui/icons";

const AddTransaction = () => {
  return (
    <div className={styles.container}>
      <h4>Add new transaction</h4>
      <hr />
      <form className={styles.form}>
        <label htmlFor='newTransactionInput'>Add transactions</label>
        <input type='text' name='' id='newTransactionInput' />
        <button type='submit'>
          <Add />
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
