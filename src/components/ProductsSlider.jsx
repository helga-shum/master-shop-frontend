import Item from './Item';
import Skeleton from './Skeleton';
import Pagging from './Pagging';
import React from 'react';
import { Link } from 'react-router-dom';
function ProductsSlider({ items, isLoading }) {
  return (
    <div className="page__products products-slider">
      <div className="products-slider__header">
        <div className="products-slider__title">Popular goods</div>
        <div className="products-slider__control">
          <div className="show-catalog__pages">
            <Pagging />
          </div>
        </div>
      </div>
      <div className="products-slider__item _swiper">
        <div className="products-slider__slide">
          <div className="products-slider__items items-products">
            {isLoading
              ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
              : items.map((obj) => (
                  <Link to="/product">
                    <Item key={obj.id} {...obj} />
                  </Link>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsSlider;
