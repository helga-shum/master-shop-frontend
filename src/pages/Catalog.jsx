import Pagging from '../components/Pagging';
import ProductsSlider from '../components/ProductsSlider';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import CatalogSide from '../components/CatalogSide';
import { SearchContext } from '../App';
import {
  setCategoryId,
  setSortType,
  setCurrentPage,
  setFilters,
} from '../redux/slices/filterSlice';
import axios from 'axios';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';

function Catalog() {
  const navigate = useNavigate();
  const sizeFilter = useSelector((state) => state.filterSlice.sizeFilter);
  const priceFilter = useSelector((state) => state.filterSlice.priceFilter);
  const fabricFilter = useSelector((state) => state.filterSlice.fabricFilter);
  const brandFilter = useSelector((state) => state.filterSlice.brandFilter);
  const sortType = useSelector((state) => state.filterSlice.sortType);
  const categoryId = useSelector((state) => state.filterSlice.categoryId);
  const currentPage = useSelector((state) => state.filterSlice.currentPage);
  const dispatch = useDispatch();

  const { searchValue } = React.useContext(SearchContext);
  const [sorting, setSorting] = React.useState(false);

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const options = [
    { name: 'Popularuty', sort: 'order_number' },
    { name: 'Rating', sort: 'rating' },
    { name: 'Price', sort: 'price' },
  ];
  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };
  const onClickSortType = (id) => {
    dispatch(setSortType(id));
  };
  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };
  React.useEffect(() => {
    if (window.Geolocation.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = options.find((obj) => obj.sort == params.sortType);
      dispatch(
        setFilters({
          ...params,
          sort,
        }),
      );
    }
  }, []);
  React.useEffect(() => {
    setIsLoading(true);
    const search = searchValue ? `&search=${searchValue}` : '';

    axios
      .get(
        `https://62fa7a9bffd7197707ed6aa7.mockapi.io/items?${
          categoryId > 0 ? `category=${categoryId}` : ''
        }${search}&sortBy=${sortType.sort}&order=desc&page=${currentPage}&limit=3`,
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
  }, [categoryId, sortType, searchValue, currentPage]);
  React.useEffect(() => {
    const queryString = qs.stringify({
      sortProperty: sortType.sort,
      categoryId,
      currentPage,
    });
    navigate(`?${queryString}`);
  }, [categoryId, sortType, currentPage]);
  const sortRef = React.useRef();
  React.useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.path.includes(sortRef.current)) {
        setSorting(false);
      }
    };
    document.body.addEventListener('click', handleOutsideClick);
    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, []);
  return (
    <>
      <CatalogSide categoryId={categoryId} onClickCategory={onClickCategory} />

      <div classNameName="page__content">
        <div className="catalog">
          <h1 className="catalog__title title-item">Popular goods</h1>

          <div className="catalog__actions actions-catalog">
            <div ref={sortRef} className="actions-catalog__order order-catalog">
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
                        onClickSortType(obj);
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
              <Pagging onChangePage={(number) => onChangePage(number)} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Catalog;
