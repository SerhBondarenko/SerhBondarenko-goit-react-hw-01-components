import PropTypes from 'prop-types';

export default function TransactionHistory(props) {
  const { type, amount, currency } = props;
  return (
    <tbody>
      <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    </tbody>
  );
}
//========================== propTypes ===================
TransactionHistory.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
