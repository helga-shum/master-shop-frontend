import skirt from '../img/skirt.jpg';
function Item({ title }) {
  return (
    <div className="items-products__column">
      <div className="item-product">
        <div className="item-product__labels"></div>
        <a href="" className="item-product__image">
          <img src={skirt} alt="сукня" />
        </a>
        <div className="item-product__body">
          <a href="" className="item-product__title">
            <span>BH Chanel</span>
            {title}
          </a>
          <div className="item-product__footer">
            <div className="item-product__old-price grn">23 400</div>
            <a href="" className="item-product__add"></a>
            <div className="item-product__price grn">25000</div>
          </div>
        </div>
        <div className="item-product__hover hover-item-product">
          <a href="" className="hover-item-product__title">
            <span>BH Chanel</span>
            {title}
          </a>

          <div className="hover-item-product__options options-item-product">
            <div className="options-item-product__item">
              <div className="options-item-product__label">Type of t-shirt</div>
              <div className="options-item-product__value">short</div>
            </div>
            <div className="options-item-product__item">
              <div className="options-item-product__label">Type of t-shirt</div>
              <div className="options-item-product__value">short</div>
            </div>
            <div className="options-item-product__item">
              <div className="options-item-product__label">Type of t-shirt</div>
              <div className="options-item-product__value">short</div>
            </div>
            <div className="options-item-product__item">
              <div className="options-item-product__label">Type of t-shirt</div>
              <div className="options-item-product__value">short</div>
            </div>
          </div>
          <a href="" className="hover-item-product__cart"></a>
          <div className="hover-item-product__footer">
            <div className="hover-item-product__old-price grn">64 990</div>
            <div className="hover-item-product__stock">There are a few</div>
            <div className="hover-item-product__price grn">64990</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Item;
