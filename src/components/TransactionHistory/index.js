import { createUseStyles } from 'react-jss';
import PropTypes from "prop-types";

const useStyle = createUseStyles({
  transactionContainer: {
    paddingBottom: 150,
    '& table': {
      border: '1px solid white'
    },
    '& th': {
      border: '1px solid white'
    },
    '& td': {
      border: '1px solid white'
    },
  },
  transactionHistory: {
    width: 600,
    color: 'white',
    margin: [0, 'auto'],
    border: '1px solid white'
  },
  head: {
    width: '100%'
  }
})

const TransactionHistory = ({ transactions }) => {
const s = useStyle()

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
