import Pagging from '../components/Pagging';
import ProductsSlider from '../components/ProductsSlider';

import React from 'react';
import CatalogSide from '../components/CatalogSide';
function Catalog() {
  const [sorting, setSorting] = React.useState(false);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({ name: 'Popularuty', sort: 'popularity' });
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const options = [
    { name: 'Popularuty', sort: 'order_number' },
    { name: 'Rating', sort: 'rating' },
    { name: 'Price', sort: 'price' },
  ];
  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://62fa7a9bffd7197707ed6aa7.mockapi.io/items?${
        categoryId > 0 ? `category=${categoryId}` : ''
      }&sortBy=${sortType.sort}&order=desc`,
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, [categoryId, sortType]);
  console.log(sortType, categoryId);
  return (
    <>
      <CatalogSide categoryId={categoryId} onClickCategory={(i) => setCategoryId(i)} />

      <div classNameName="page__content">
        <div className="catalog">
          <h1 className="catalog__title title-item">Popular goods</h1>
          <div className="catalog__actions actions-catalog">
            <div className="actions-catalog__order order-catalog">
              <div className="order-catalog__label">sort by:</div>

              <div className="order-catalog__select">
                <button className="order-catalog__btn" onClick={() => setSorting(!sorting)}>
                  Sort by
                </button>
                <div
                  className={
                    sorting == true ? 'order-catalog__content _active' : 'order-catalog__content'
                  }>
                  {options.map((obj, i) => (
                    <div
                      onClick={() => {
                        setSortType(obj);
                      }}
                      className={
                        sortType.sort == obj.sort ? 'order-option _active' : 'order-option'
                      }>
                      {obj.name}
                    </div>
                  ))}
                </div>
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
          <ProductsSlider items={items} isLoading={isLoading} />
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
    </>
  );
}
export default Catalog;
