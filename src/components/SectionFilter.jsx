import React from 'react';

function SectionFilter() {
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
        Manifacture
      </div>
      <div className={filter == true ? 'section-filter__body _active' : 'section-filter__body'}>
        <label className="section-filter__checkbox checkbox">
          <input data-error="Error" type="checkbox" className="checkbox__input" value="1" />
          <span className="checkbox__text">
            <span>Clear-fit</span>
          </span>
        </label>
        <label className="section-filter__checkbox checkbox">
          <input data-error="Error" type="checkbox" className="checkbox__input" value="1" />
          <span className="checkbox__text">
            <span>Diadora</span>
          </span>
        </label>
        <label className="section-filter__checkbox checkbox">
          <input data-error="Error" type="checkbox" className="checkbox__input" value="1" />
          <span className="checkbox__text">
            <span>Hasttings</span>
          </span>
        </label>
        <label className="section-filter__checkbox checkbox">
          <input data-error="Error" type="checkbox" className="checkbox__input" value="1" />
          <span className="checkbox__text">
            <span>Carbon-fitness</span>
          </span>
        </label>
        <label className="section-filter__checkbox checkbox">
          <input data-error="Error" type="checkbox" className="checkbox__input" value="1" />
          <span className="checkbox__text">
            <span>Snacks</span>
          </span>
        </label>
      </div>
    </div>
  );
}

export default SectionFilter;
