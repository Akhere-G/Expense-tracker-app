import React from "react";
import styles from "./AddTransaction.module.css";
import { Add } from "@material-ui/icons";

const AddTransaction = () => {
  return (
    <div className={styles.container}>
      <h4>Add new transaction</h4>
      <hr />
      <form className={styles.form}>
        <div className={styles.formLeft}>
          <div className={styles.titleSection}>
            <label htmlFor='titleInput'>Title</label>
            <input
              type='text'
              className={styles.titleInput}
              placeholder='title'
              id='titleInput'
            />
          </div>
          <div className={styles.priceSection}>
            <label htmlFor='priceInput'>Price</label>
            <input
              type='text'
              className={styles.priceInput}
              placeholder='price'
              id='priceInput'
            />
          </div>
        </div>
        <div className={styles.formRight}>
          <button type='submit'>
            <Add />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
