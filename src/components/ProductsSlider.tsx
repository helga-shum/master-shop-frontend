import Item from './Item';
import Skeleton from './Skeleton';

import React from 'react';
import ErrorPage from './ErrorPage';

const ProductsSlider: React.FC<{
  items: {
    title: string;
    imageUrl: string[];
    id: string;
    brand: string;
    sizes: number[];
    price: number;
    category: number;
    rating: number;
    measures: { type: string; name: string }[];
    description: string;
    procent: number;
    count: number;
  }[];
  status: string;
}> = ({ items, status }) => {
  const clothes = items.map((obj) => <Item key={obj.id} {...obj} />);
  const skeleton = [...new Array(6)].map((_, index) => <Skeleton key={index} />);
  return (
    <div className="page__products products-slider">
      <div className="products-slider__item _swiper">
        <div className="products-slider__slide">
          {status == 'error' ? (
            <ErrorPage />
          ) : (
            <div className="products-slider__items items-products">
              {status == 'loading' ? skeleton : clothes}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsSlider;
