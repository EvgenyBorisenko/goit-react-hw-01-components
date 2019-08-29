import React from 'react';
import PropTypes from 'prop-types';
import style from './Stats.module.css';

const Stats = ({ stats, title }) => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>{title}</h2>
      <ul className={style.stats}>
        {stats.map(el => (
          <li className={style.item} key={el.id}>
            <span className={style.label}>{el.label}</span>
            <span className={style.percentage}>{el.percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

Stats.defaultProps = {
  title: '',
};

Stats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Stats;
