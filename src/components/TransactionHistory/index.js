import PropTypes from "prop-types";
import * as s from "./TransactionHistory.module.css";

const TransactionHistory = ({ transactions }) => {
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
};

TransactionHistory.defaultProps = {
  transactions: [
    {
      id: "id",
      type: "transaction type",
      amount: "0",
      currency: "currency",
    },
  ],
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};

export default TransactionHistory;
