import React from "react";
import Helmet from "react-helmet";

const About = () => {
  return (
    <div>
      <Helmet title='Expense Tracker | about' />
      <h2 className='title'>About </h2>
      <p>
        My name is Akhere Ihoeghinlan and this is a react project that tracks
        the expenses and income. Add a title for the expense/income and an
        amount. A negative amount for an expense and a positive amount for an
        income. Filter transactions to show only expenses, incomes or both.
        Redux is used to control the state.
      </p>
    </div>
  );
};

export default About;
