import Pagging from '../components/Pagging';
import ProductsSlider from '../components/ProductsSlider';
import SideFilter from '../components/SideFilter';
function Catalog() {
  return (
    <div classNameName="page__content">
      <SideFilter />
      <div className="catalog">
        <h1 className="catalog__title title-item">Popular goods</h1>
        <div className="catalog__actions actions-catalog">
          <div className="actions-catalog__order order-catalog">
            <div className="order-catalog__label">sort by:</div>
            <div className="order-catalog__select">
              <select name="form[]" className="form">
                <option value="1" selected="selected">
                  popularity
                </option>
                <option value="2">Price</option>
                <option value="3">Name</option>
                <option value="4">default</option>
              </select>
            </div>
          </div>
          <div className="actions-catalog__view view-catalog">
            <div className="view-catalog__item view-catalog__item_grid"></div>
            <div className="view-catalog__item view-catalog__item_list"></div>
          </div>
        </div>
        <div className="catalog__navi navi-catalog_top">
          <div className="navi-catalog__show show-catalog">
            <div className="show-catalog__label">On page:</div>
            <div className="show-catalog__select">
              <select name="form[]" className="show">
                <option value="1" selected="selected">
                  1
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>
        </div>
        <ProductsSlider />
        <div className="catalog__navi navi-catalog">
          <div className="navi-catalog__show show-catalog">
            <div className="show-catalog__label">On page:</div>
            <div className="show-catalog__select">
              <select name="form[]" className="show">
                <option value="1" selected="selected">
                  1
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>
          <div className="show-catalog__pages">
            <Pagging />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Catalog;
