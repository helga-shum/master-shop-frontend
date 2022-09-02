import React from 'react';

function SizeFilter() {
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
        Size
      </div>
      <div className={filter == true ? 'section-filter__body _active' : 'section-filter__body'}>
        <label onClick className="section-filter__checkbox checkbox">
          <input data-error="Error" type="checkbox" className="checkbox__input" value="1" />
          <span className="checkbox__text">
            <span>34</span>
          </span>
        </label>
        <label className="section-filter__checkbox checkbox">
          <input data-error="Error" type="checkbox" className="checkbox__input" value="2" />
          <span className="checkbox__text">
            <span>36</span>
          </span>
        </label>
        <label className="section-filter__checkbox checkbox">
          <input data-error="Error" type="checkbox" className="checkbox__input" value="3" />
          <span className="checkbox__text">
            <span>38</span>
          </span>
        </label>
        <label className="section-filter__checkbox checkbox">
          <input data-error="Error" type="checkbox" className="checkbox__input" value="4" />
          <span className="checkbox__text">
            <span>40</span>
          </span>
        </label>
        <label className="section-filter__checkbox checkbox">
          <input data-error="Error" type="checkbox" className="checkbox__input" value="5" />
          <span className="checkbox__text">
            <span>42</span>
          </span>
        </label>
        <label className="section-filter__checkbox checkbox">
          <input data-error="Error" type="checkbox" className="checkbox__input" value="6" />
          <span className="checkbox__text">
            <span>44</span>
          </span>
        </label>
        <label className="section-filter__checkbox checkbox">
          <input data-error="Error" type="checkbox" className="checkbox__input" value="7" />
          <span className="checkbox__text">
            <span>46</span>
          </span>
        </label>
      </div>
    </div>
  );
}

export default SizeFilter;
