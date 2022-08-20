import Item from './Item';
import Skeleton from './Skeleton';
import Pagging from './Pagging';
import React from 'react';

function ProductsSlider() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    fetch('https://62fa7a9bffd7197707ed6aa7.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, []);

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
              : items.map((obj) => <Item key={obj.id} {...obj} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsSlider;
