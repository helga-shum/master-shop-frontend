import Pagging from '../components/Pagging';
import ProductsSlider from '../components/ProductsSlider';

import React from 'react';
import CatalogSide from '../components/CatalogSide';
import { SearchContext } from '../App';

function Catalog() {
  const { searchValue } = React.useContext(SearchContext);
  const [sorting, setSorting] = React.useState(false);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({ name: 'Popularuty', sort: 'popularity' });
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);
  const options = [
    { name: 'Popularuty', sort: 'order_number' },
    { name: 'Rating', sort: 'rating' },
    { name: 'Price', sort: 'price' },
  ];
  React.useEffect(() => {
    setIsLoading(true);
    const search = searchValue ? `&search=${searchValue}` : '';
    fetch(
      `https://62fa7a9bffd7197707ed6aa7.mockapi.io/items?page=${currentPage}&limit=6${
        categoryId > 0 ? `category=${categoryId}` : ''
      }${search}&sortBy=${sortType.sort}&order=desc`,
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, [categoryId, sortType, searchValue, currentPage]);

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
          <Pagging onChangePage={(number) => setCurrentPage(number)} />
          <ProductsSlider items={items} isLoading={isLoading} searchValue={searchValue} />
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
              <Pagging onChangePage={(number) => setCurrentPage(number)} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Catalog;
