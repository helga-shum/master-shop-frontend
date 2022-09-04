import Item from './Item';
import Skeleton from './Skeleton';

import React from 'react';
import { Link } from 'react-router-dom';
function ProductsSlider({ items, isLoading }) {
  const clothes = items.map((obj) => <Item key={obj.id} {...obj} />);
  const skeleton = [...new Array(6)].map((_, index) => <Skeleton key={index} />);
  return (
    <div className="page__products products-slider">
      <div className="products-slider__item _swiper">
        <div className="products-slider__slide">
          <div className="products-slider__items items-products">
            {isLoading ? skeleton : clothes}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsSlider;
