import React from 'react';
import PropTypes from 'prop-types';
import style from './PricingItem.module.css';

const PricingItem = ({ item }) => {
  return (
    <li key={item.price} className={style.pricingItem}>
      <img src={item.icon} alt="product" className={style.icon} />
      <h2 className={style.label}>{item.label}</h2>
      <p className={style.capacity}>{item.capacity} STORAGE</p>
      <p className={style.description}>{item.description}</p>
      <p className={style.price}>${item.price}/MO</p>
      <button type="button" className={style.button}>
        Get Started
      </button>
    </li>
  );
};

PricingItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    capacity: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default PricingItem;
