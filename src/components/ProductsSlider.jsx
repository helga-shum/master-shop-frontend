import Item from './Item';
import clothes from '../clothes.json';
import Pagging from './Pagging';
function ProductsSlider() {
  console.log(clothes);
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
            {clothes.map((obj) => (
              <Item {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsSlider;
