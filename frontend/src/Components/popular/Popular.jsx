// Popular.jsx
import React from 'react';
import './Popular.css';
import data_product from '../Assets/data';

const PopularItem = ({ id, name, image, new_price, old_price }) => (
  <div className='popular-item' key={id}>
    <img src={image} alt={name} />
    <h2>{name}</h2>
    <p>New Price: Rs{new_price}</p>
    <p>Old Price: <s>Rs{old_price}</s></p>
  </div>
);

const Popular = () => {
  return (
    <div className='popular'>
      <h1>Popular In Women</h1>
      <hr/>
      <div className='popular-list'>
        {data_product.map((item) => (
          <PopularItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
