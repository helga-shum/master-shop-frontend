import Pagging from '../components/Pagging/Pagging';
import ProductsSlider from '../components/ProductsSlider';
import { useSelector } from 'react-redux';
import React from 'react';
import PageSide from '../components/PageSide';
import { RootState, useAppDispatch } from '../redux/store';

import {
  setCategoryId,
  setSortType,
  setCurrentPage,
  setFilters,
  selectFilter,
  Sort,
} from '../redux/slices/filterSlice';
import { fetchItems } from '../redux/slices/itemSlice';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';

const Catalog: React.FC = () => {
  const navigate = useNavigate();
  const {
    sizeFilter,
    priceFilter,
    fabricFilter,
    brandFilter,
    sortType,
    categoryId,
    currentPage,
    searchValue,
  } = useSelector(selectFilter);

  const { items, status, likedItems } = useSelector((state: RootState) => state.itemSlice);
  const likedIds = likedItems.map((item) => item._id);
  console.log(likedIds);
  const dispatch = useAppDispatch();

  const [sorting, setSorting] = React.useState<boolean>(false);

  const options: Sort[] = [
    { name: 'Popularity', sort: 'order_number' },
    { name: 'Rating', sort: 'rating' },
    { name: 'Price', sort: 'price' },
  ];
  const onClickCategory = (id: number) => {
    dispatch(setCategoryId(id));
  };
  const onClickSortType = (obj: Sort) => {
    dispatch(setSortType(obj));
  };
  const onChangePage = (number: number) => {
    dispatch(setCurrentPage(number));
  };
  React.useEffect(() => {
    if (window.Geolocation.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sortType = options.find((obj) => obj.sort == params.sortType);

      dispatch(
        setFilters({
          ...params,
          sizeFilter,
          priceFilter,
          fabricFilter,
          brandFilter,
          currentPage,
          categoryId,
          searchValue,
          sortType: sortType || options[0],
        }),
      );
    }
  }, []);

  React.useEffect(() => {
    const search = searchValue ? searchValue : '';
    dispatch(
      fetchItems({
        sortType,
        categoryId,
        currentPage,
        search,
        brandFilter,
        fabricFilter,
        priceFilter,
        sizeFilter,
      }),
    );
  }, [
    categoryId,
    sortType,
    searchValue,
    currentPage,
    brandFilter,
    fabricFilter,
    priceFilter,
    sizeFilter,
  ]);

  React.useEffect(() => {
    const queryString = qs.stringify({
      sortProperty: sortType.sort,
      categoryId,
      currentPage,
    });
    navigate(`?${queryString}`);
  }, [categoryId, sortType, currentPage]);
  const sortRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const _event = event as MouseEvent & {
        path: Node[];
      };
      if (sortRef.current && !_event.path.includes(sortRef.current)) {
        setSorting(false);
      }
    };
    document.body.addEventListener('click', handleOutsideClick);
    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, []);
  const [view, setView] = React.useState('grid');

  return (
    <>
      <PageSide categoryId={categoryId} onClickCategory={onClickCategory} />

      <div className="page__content">
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
                  {options.map((obj: any, i) => (
                    <div
                      key={obj.sort}
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
              <div
                onClick={() => {
                  setView('grid');
                }}
                className={`view-catalog__item view-catalog__item_grid ${
                  view == 'grid' ? '_active' : ''
                }`}></div>
              <div
                onClick={() => {
                  setView('list');
                }}
                className={`view-catalog__item view-catalog__item_list ${
                  view == 'list' ? '_active' : ''
                }`}></div>
            </div>
          </div>

          <Pagging totalPages={items.totalPages} onChangePage={onChangePage} />
          <ProductsSlider view={view} products={items.products} status={status} />

          <div className="catalog__navi navi-catalog">
            <div className="show-catalog__pages">
              <Pagging totalPages={items.totalPages} onChangePage={onChangePage} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Catalog;
