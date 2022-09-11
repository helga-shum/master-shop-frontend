import React from 'react';
import { setFabricFilter, minusFabricFilter } from '../../redux/slices/filterSlice';
import { useDispatch } from 'react-redux';
function FabricFilter() {
  const dispatch = useDispatch();
  const fabrics = ['Linen', 'Polyester', 'Crepe', 'Denim', 'Cotton'];
  const [filter, setFilter] = React.useState(false);
  const [spoller, setSpoller] = React.useState(false);
  const onClickChecked = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      dispatch(setFabricFilter(value));
    } else {
      dispatch(minusFabricFilter(value));
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
        Fabric type
      </div>
      <div
        onClick={onClickChecked}
        className={filter == true ? 'section-filter__body _active' : 'section-filter__body'}>
        {fabrics.map((fabric) => (
          <label className="section-filter__checkbox checkbox">
            <input data-error="Error" type="checkbox" className="checkbox__input" value={fabric} />
            <span className="checkbox__text">
              <span>{fabric}</span>
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default FabricFilter;
