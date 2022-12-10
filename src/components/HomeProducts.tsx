import Skeleton from './Skeleton';

import React from 'react';

import ProductsSlider from './ProductsSlider';
type HomeProductsProps = {
  items: {
    title: string;
    imageUrl: string[];
    _id: string;
    brand: string;
    sizes: string[];
    fabric: string;
    price: number;
    category: number;
    rating: number;
    measures: { type: string; name: string }[];
    description: string;
    procent: number;
    count: number;
  }[];
  isLoading: boolean;
  status: string;
};

const HomeProducts: React.FC<HomeProductsProps> = ({ items, isLoading, status }) => {
  return (
    <div className="page__products products-slider">
      <div className="products-slider__header">
        <div className="products-slider__title">Popular goods</div>
        <div className="products-slider__control">
          <div className="show-catalog__pages"></div>
        </div>
      </div>
      <div className="products-slider__item _swiper">
        <div className="products-slider__slide">
          <div className="products-slider__items items-products">
            <ProductsSlider view="grid" products={items} status={status} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;
