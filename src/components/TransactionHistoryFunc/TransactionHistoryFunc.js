import PropTypes from "prop-types";
import * as s from "./TransactionHistoryFunc.module.css";

const TransactionHistoryFunc = ({ transactions }) => {
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

TransactionHistoryFunc.defaultProps = {
  friends: [],
};

TransactionHistoryFunc.propTypes = {
  trasactions: PropTypes.array,
};

export default TransactionHistoryFunc;
