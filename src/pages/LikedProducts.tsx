import React from 'react';
import { useSelector } from 'react-redux';
import PageSide from '../components/PageSide';
import ProductsSlider from '../components/ProductsSlider';

import { fetchLikedItems } from '../redux/slices/itemSlice';
import { RootState, useAppDispatch } from '../redux/store';

function LikedProducts() {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const { likedItems, status } = useSelector((state: RootState) => state.itemSlice);

  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(fetchLikedItems());
    setIsLoading(false);
  }, []);

  return (
    <>
      <PageSide />
      <div className="page__content">
        <h1 className="catalog__title title-item">Liked goods</h1>
        <ProductsSlider view="grid" products={likedItems} status={status} />
      </div>
    </>
  );
}

export default LikedProducts;
