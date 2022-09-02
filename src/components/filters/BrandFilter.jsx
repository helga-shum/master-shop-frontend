import React from 'react';

function BrandFilter() {
  const [filter, setFilter] = React.useState(false);
  const [spoller, setSpoller] = React.useState(false);

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
      <div className={filter == true ? 'section-filter__body _active' : 'section-filter__body'}>
        <label className="section-filter__checkbox checkbox">
          <input data-error="Error" type="checkbox" className="checkbox__input" value="1" />
          <span className="checkbox__text">
            <span>Forever 21</span>
          </span>
        </label>
        <label className="section-filter__checkbox checkbox">
          <input data-error="Error" type="checkbox" className="checkbox__input" value="1" />
          <span className="checkbox__text">
            <span>Catwalk</span>
          </span>
        </label>
        <label className="section-filter__checkbox checkbox">
          <input data-error="Error" type="checkbox" className="checkbox__input" value="1" />
          <span className="checkbox__text">
            <span>Miss Chase</span>
          </span>
        </label>
        <label className="section-filter__checkbox checkbox">
          <input data-error="Error" type="checkbox" className="checkbox__input" value="1" />
          <span className="checkbox__text">
            <span>HandM</span>
          </span>
        </label>
        <label className="section-filter__checkbox checkbox">
          <input data-error="Error" type="checkbox" className="checkbox__input" value="1" />
          <span className="checkbox__text">
            <span>Biba Apparels</span>
          </span>
        </label>
        <label className="section-filter__checkbox checkbox">
          <input data-error="Error" type="checkbox" className="checkbox__input" value="1" />
          <span className="checkbox__text">
            <span>ASOS</span>
          </span>
        </label>
      </div>
    </div>
  );
}

export default BrandFilter;
