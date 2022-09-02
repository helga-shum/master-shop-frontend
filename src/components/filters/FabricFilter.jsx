import React from 'react';

function FabricFilter() {
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
        Fabric type
      </div>
      <div className={filter == true ? 'section-filter__body _active' : 'section-filter__body'}>
        <label className="section-filter__checkbox checkbox">
          <input data-error="Error" type="checkbox" className="checkbox__input" value="1" />
          <span className="checkbox__text">
            <span>Linen</span>
          </span>
        </label>
        <label className="section-filter__checkbox checkbox">
          <input data-error="Error" type="checkbox" className="checkbox__input" value="1" />
          <span className="checkbox__text">
            <span>Polyester</span>
          </span>
        </label>
        <label className="section-filter__checkbox checkbox">
          <input data-error="Error" type="checkbox" className="checkbox__input" value="1" />
          <span className="checkbox__text">
            <span>Crepe</span>
          </span>
        </label>
        <label className="section-filter__checkbox checkbox">
          <input data-error="Error" type="checkbox" className="checkbox__input" value="1" />
          <span className="checkbox__text">
            <span>Denim</span>
          </span>
        </label>
        <label className="section-filter__checkbox checkbox">
          <input data-error="Error" type="checkbox" className="checkbox__input" value="1" />
          <span className="checkbox__text">
            <span>Cotton</span>
          </span>
        </label>
      </div>
    </div>
  );
}

export default FabricFilter;
