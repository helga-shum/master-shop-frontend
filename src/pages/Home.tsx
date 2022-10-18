import PageSide from '../components/PageSide';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux/store';
import Slider from '../components/Slider';
import HomeProducts from '../components/HomeProducts';
import React from 'react';
import { RootState } from '../redux/store';
import { fetchItems, fetchPopularItems } from '../redux/slices/itemSlice';
function Home() {
  const { popularItems, status } = useSelector((state: RootState) => state.itemSlice);

  const dispatch = useAppDispatch();

  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    dispatch(fetchPopularItems());
    setIsLoading(false);
  }, []);
  return (
    <>
      <PageSide />
      <div className="page__content">
        <Slider />
        <HomeProducts items={popularItems} isLoading={isLoading} />
      </div>
    </>
  );
}

export default Home;
