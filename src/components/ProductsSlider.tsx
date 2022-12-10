import Item from './Item';
import Skeleton from './Skeleton';

import React from 'react';
import ErrorPage from './ErrorPage';

import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../redux/store';
import { fetchLikedItems } from '../redux/slices/itemSlice';

const ProductsSlider: React.FC<{
  view?: string;
  products: {
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
  status: string;
}> = ({ products, status, view }) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(fetchLikedItems());
    setIsLoading(false);
  }, []);
  const { likedItems } = useSelector((state: RootState) => state.itemSlice);

  const likedIds = likedItems.map((item) => item._id);

  const clothes = products.map((obj) => (
    <Item like={likedIds.includes(obj._id) ? true : false} view={view} key={obj._id} {...obj} />
  ));
  const skeleton = [...new Array(6)].map((_, index) => <Skeleton key={index} />);
  return (
    <div className="page__products products-slider ">
      <div className="products-slider__item _swiper">
        <div className="products-slider__slide">
          {status == 'error' ? (
            <ErrorPage />
          ) : (
            <div
              className={
                view == 'list'
                  ? 'products-slider__items items-products _active'
                  : 'products-slider__items items-products'
              }>
              {status == 'loading' ? skeleton : clothes}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsSlider;
