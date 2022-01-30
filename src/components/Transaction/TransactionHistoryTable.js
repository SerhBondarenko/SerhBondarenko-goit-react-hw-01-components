import PropTypes from 'prop-types';
import TransactionHistory from '../Transaction/TransactionHistory';
import s from '../Transaction/TransactionStyles.module.css';

export default function TransactionHistoryTable({ items }) {
  return (
    <table className={s.transaction}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(({ id, type, amount, currency }) => (
        <TransactionHistory
          key={id}
          type={type}
          amount={amount}
          currency={currency}
        />
      ))}
    </table>
  );
}
//========================== propTypes ===================
TransactionHistoryTable.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
