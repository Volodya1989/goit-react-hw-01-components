import PropTypes from "prop-types";

import "./TransactionHistory.style.css";

const TransactionHistory = ({ items }) => {
  return (
    <>
      <table className="transaction-history">
        <thead className="header">
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        {items.map(({ id, type, amount, currency }, index) => {
          return (
            <tbody key={id} className="raw">
              <tr className={` ${index % 2 === 0 ? "even" : "odd"}`}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
};
export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ),
};
