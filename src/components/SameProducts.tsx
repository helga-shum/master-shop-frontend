import Item from './Item';
import Skeleton from './Skeleton';
import Pagging from './Pagging';
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { setCurrentPage } from '../redux/slices/filterSlice';
import { useAppDispatch } from '../redux/store';
const SameProducts: React.FC<{ category: number }> = ({ category }) => {
  const dispatch = useAppDispatch();
  const onChangePage = (number: number) => {
    dispatch(setCurrentPage(number));
  };
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [items, setItems] = React.useState<
    {
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
    }[]
  >([]);
  React.useEffect(() => {
    setIsLoading(true);

    axios
      .get(
        `https://62fa7a9bffd7197707ed6aa7.mockapi.io/items?category=${category}&sortBy=rating&order=desc&limit=3`,
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="page__products products-slider">
      <div className="products-slider__header">
        <div className="products-slider__title">Popular goods</div>
        <div className="products-slider__control">
          <div className="show-catalog__pages">
            <Pagging onChangePage={onChangePage} />
          </div>
        </div>
      </div>
      <div className="products-slider__item _swiper">
        <div className="products-slider__slide">
          <div className="products-slider__items items-products">
            {isLoading
              ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
              : items.map((obj) => <Item key={obj.id} {...obj} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SameProducts;
