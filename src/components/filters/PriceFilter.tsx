import React from 'react';

const PriceFilter: React.FC = () => {
  const [filter, setFilter] = React.useState<boolean>(false);
  const [spoller, setSpoller] = React.useState<boolean>(false);

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
        Price($)
      </div>
      <div className={filter == true ? 'section-filter__body _active' : 'section-filter__body'}>
        <label className="section-filter__checkbox checkbox">
          <input data-error="Error" type="checkbox" className="checkbox__input" value="1" />
          <span className="checkbox__text">
            <span>10$-50$</span>
          </span>
        </label>
        <label className="section-filter__checkbox checkbox">
          <input data-error="Error" type="checkbox" className="checkbox__input" value="1" />
          <span className="checkbox__text">
            <span>50$-200$</span>
          </span>
        </label>
        <label className="section-filter__checkbox checkbox">
          <input data-error="Error" type="checkbox" className="checkbox__input" value="1" />
          <span className="checkbox__text">
            <span>200$-500$</span>
          </span>
        </label>
        <label className="section-filter__checkbox checkbox">
          <input data-error="Error" type="checkbox" className="checkbox__input" value="1" />
          <span className="checkbox__text">
            <span>500$+</span>
          </span>
        </label>
      </div>
    </div>
  );
};

export default PriceFilter;
