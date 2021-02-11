import React, { Component } from "react";
import PropTypes from "prop-types";
import * as s from "./TransactionHistory.module.css";

class TransactionHistory extends Component {
  render() {
    const transactions = this.props.transactions;

    return (
      <div className={s.transactionContainer}>
        <table className={s.transactionHistory}>
          <thead className={s.head}>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map(({ id, type, amount, currency }) => {
              return (
                <tr key={id}>
                  <td>{type}</td>
                  <td>{amount}</td>
                  <td>{currency}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

TransactionHistory.defaultProps = {
  friends: [],
};

TransactionHistory.propTypes = {
  trasactions: PropTypes.array.isRequired,
};

export default TransactionHistory;
