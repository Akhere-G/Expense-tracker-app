import React, { useState } from "react";
import styles from "./AddTransaction.module.css";
import { Add } from "@material-ui/icons";
import useGlobalState from "../../context";

const AddTransaction = () => {
  const { addTransaction } = useGlobalState();
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleTitleChange = e => {
    const { value } = e.target;
    setTitle(value);
  };

  const handleamountChange = e => {
    const { value } = e.target;
    setAmount(value);
  };

  const handleSubmit = () => {
    if (title && amount) {
      addTransaction(title, amount);
    }
    setTitle("");
    setAmount("");
  };

  return (
    <div className={styles.container}>
      <h4>Add new transaction</h4>
      <hr />
      <form
        className={styles.form}
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <div className={styles.formLeft}>
          <div className={styles.titleSection}>
            <label htmlFor='titleInput'>Title</label>
            <input
              type='text'
              value={title}
              onChange={handleTitleChange}
              placeholder='title'
              id='titleInput'
            />
          </div>
          <div className={styles.amountSection}>
            <label htmlFor='amountInput'>amount</label>
            <input
              type='number'
              value={amount}
              onChange={handleamountChange}
              placeholder='amount'
              id='amountInput'
            />
          </div>
        </div>
        <div className={styles.formRight}>
          <button type='submit' onClick={handleSubmit}>
            <Add />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
