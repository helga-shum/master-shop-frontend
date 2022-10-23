import React from 'react';

import { setSizeFilter, minusSizeFilter } from '../../redux/slices/filterSlice';
import { useDispatch } from 'react-redux';
const SizeFilter: React.FC = () => {
  const dispatch = useDispatch();
  const sizes = ['34', '36', '38', '40', '42', '44', '46'];

  const [filter, setFilter] = React.useState<boolean>(false);
  const [spoller, setSpoller] = React.useState<boolean>(false);

  const onClickChecked = (e: any) => {
    const { value, checked } = e.target;
    if (checked) {
      dispatch(setSizeFilter(value));
    } else {
      dispatch(minusSizeFilter(value));
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
        Size
      </div>
      <div className={filter == true ? 'section-filter__body _active' : 'section-filter__body'}>
        {sizes.map((size) => (
          <label className="section-filter__checkbox checkbox">
            <input
              defaultChecked={true}
              onClick={onClickChecked}
              data-error="Error"
              type="checkbox"
              className="checkbox__input"
              name="size"
              value={size}
            />
            <span className="checkbox__text">
              <span>{size}</span>
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default SizeFilter;
