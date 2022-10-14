import Item from './Item';
import Skeleton from './Skeleton';

import React from 'react';
import { Link } from 'react-router-dom';
import { setCurrentPage } from '../redux/slices/filterSlice';
import { useAppDispatch } from '../redux/store';
type HomeProductsProps = {
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
  isLoading: boolean;
};

const HomeProducts: React.FC<HomeProductsProps> = ({ items, isLoading }) => {
  const dispatch = useAppDispatch();

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
};

export default HomeProducts;
