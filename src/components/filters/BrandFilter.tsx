import React from 'react';
import { setBrandFilter, minusBrandFilter } from '../../redux/slices/filterSlice';
import { useDispatch } from 'react-redux';
const BrandFilter: React.FC = () => {
  const dispatch = useDispatch();
  const brands = ['Forever 21', 'Catwalk', 'Miss Chase', 'HandM', 'Biba Apparels', 'ASOS'];
  const [filter, setFilter] = React.useState<boolean>(false);
  const [spoller, setSpoller] = React.useState<boolean>(false);
  const onClickChecked = (e: any) => {
    const { value, checked } = e.target;
    if (checked) {
      dispatch(setBrandFilter(value));
    } else {
      dispatch(minusBrandFilter(value));
    }
  };
  return (
    <div className="filter__section section-filter">
      <div
        onClick={() => {
          setFilter(!filter);
          setSpoller(!spoller);
        }}
        className={
          spoller == true
            ? 'section-filter__title _spoller _active'
            : 'section-filter__title _spoller'
        }>
        Brands
      </div>
      <div
        onClick={onClickChecked}
        className={filter == true ? 'section-filter__body _active' : 'section-filter__body'}>
        {brands.map((brand) => (
          <label className="section-filter__checkbox checkbox">
            <input data-error="Error" type="checkbox" className="checkbox__input" value={brand} />
            <span className="checkbox__text">
              <span>{brand}</span>
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default BrandFilter;
