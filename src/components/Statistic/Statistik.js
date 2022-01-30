import s from '../Statistic/StatisticListStyles.module.css';
import PropTypes from 'prop-types'; // импортируется в компонент где будет использоваться нужно только для разработки, в продакшин не пойдет

//================ getRandomHexColor ============================
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
//=============== Component Statistik ============================
export default function Statistik(props) {
  const { label, stats } = props;
  return (
    <li
      className={s.item}
      style={{ backgroundColor: `${getRandomHexColor()}` }}
    >
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{stats}</span>
    </li>
  );
}
//================================ propTypes =================
Statistik.propTypes = {
  label: PropTypes.string.isRequired,
  stats: PropTypes.number.isRequired,
};
