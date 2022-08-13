import Item from './Item';
import Pagging from './Pagging';
function ProductsSlider() {
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
            <Item title="T-Shirt" />
            <Item title="Trousers" />
            <Item title="Jeans" />
            <Item title="Jeans" />
            <Item title="Jeans" />
            <Item title="Jeans" />
            <Item title="Jeans" />
            <Item title="Jeans" />
            <Item title="Jeans" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsSlider;
