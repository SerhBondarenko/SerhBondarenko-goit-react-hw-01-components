import Statistik from './Statistik';
import PropTypes from 'prop-types';
import s from '../Statistic/StatisticListStyles.module.css';

export default function StatistikList({ items }) {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>Upload stats</h2>
      <ul className={s.statList}>
        {items.map(item => (
          <Statistik key={item.id} label={item.label} stats={item.percentage} />
        ))}
      </ul>
    </section>
  );
}
//========================== propTypes ===================
Statistik.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
