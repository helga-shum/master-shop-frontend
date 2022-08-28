import PageSide from '../components/PageSide';

import Slider from '../components/Slider';
import HomeProducts from '../components/HomeProducts';
import React from 'react';
function Home() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(true);
    fetch('https://62fa7a9bffd7197707ed6aa7.mockapi.io/items?sortBy=order_number&order=desc')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <PageSide />
      <div className="page__content">
        <Slider />
        <HomeProducts items={items} isLoading={isLoading} />
      </div>
    </>
  );
}

export default Home;
