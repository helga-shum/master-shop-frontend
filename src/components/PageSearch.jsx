import React from 'react';
function PageSearch({ searchValue, setSearchValue }) {
  const [open, setOpen] = React.useState(false);
  return (
    <form action="#" className="page__search search-page">
      <div className="search-page__select">
        <div
          onClick={() => setOpen(!open)}
          className={open == true ? 'search-page__title _active' : 'search-page__title'}>
          <span>Everywhere</span>
          <span data-text="Select:" className="search-page__quantity"></span>
        </div>
        {open && (
          <div className="search-page__categories categories-search">
            <div className="categories-search__row">
              <div className="categories-search__column">
                <ul className="categories-search__list">
                  <li>
                    <label className="section-filter__checkbox checkbox">
                      <input
                        data-error="Error"
                        type="checkbox"
                        className="checkbox__input"
                        value="1"
                      />
                      <span className="checkbox__text">
                        <span>Сукні</span>
                      </span>
                    </label>
                  </li>
                  <li>
                    <label className="section-filter__checkbox checkbox">
                      <input
                        data-error="Error"
                        type="checkbox"
                        className="checkbox__input"
                        value="1"
                      />
                      <span className="checkbox__text">
                        <span>Сукні</span>
                      </span>
                    </label>
                  </li>
                  <li>
                    <label className="section-filter__checkbox checkbox">
                      <input
                        data-error="Error"
                        type="checkbox"
                        className="checkbox__input"
                        value="1"
                      />
                      <span className="checkbox__text">
                        <span>Сукні</span>
                      </span>
                    </label>
                  </li>
                  <li>
                    <label className="section-filter__checkbox checkbox">
                      <input
                        data-error="Error"
                        type="checkbox"
                        className="checkbox__input"
                        value="1"
                      />
                      <span className="checkbox__text">
                        <span>Сукні</span>
                      </span>
                    </label>
                  </li>
                  <li>
                    <label className="section-filter__checkbox checkbox">
                      <input
                        data-error="Error"
                        type="checkbox"
                        className="checkbox__input"
                        value="1"
                      />
                      <span className="checkbox__text">
                        <span>Сукні</span>
                      </span>
                    </label>
                  </li>
                  <li>
                    <label className="section-filter__checkbox checkbox">
                      <input
                        data-error="Error"
                        type="checkbox"
                        className="checkbox__input"
                        value="1"
                      />
                      <span className="checkbox__text">
                        <span>Сукні</span>
                      </span>
                    </label>
                  </li>
                </ul>
              </div>
              <div className="categories-search__column">
                <ul className="categories-search__list">
                  <li>
                    <label className="section-filter__checkbox checkbox">
                      <input
                        data-error="Error"
                        type="checkbox"
                        className="checkbox__input"
                        value="1"
                      />
                      <span className="checkbox__text">
                        <span>Сукні</span>
                      </span>
                    </label>
                  </li>
                  <li>
                    <label className="section-filter__checkbox checkbox">
                      <input
                        data-error="Error"
                        type="checkbox"
                        className="checkbox__input"
                        value="1"
                      />
                      <span className="checkbox__text">
                        <span>Сукні</span>
                      </span>
                    </label>
                  </li>
                  <li>
                    <label className="section-filter__checkbox checkbox">
                      <input
                        data-error="Error"
                        type="checkbox"
                        className="checkbox__input"
                        value="1"
                      />
                      <span className="checkbox__text">
                        <span>Сукні</span>
                      </span>
                    </label>
                  </li>
                  <li>
                    <label className="section-filter__checkbox checkbox">
                      <input
                        data-error="Error"
                        type="checkbox"
                        className="checkbox__input"
                        value="1"
                      />
                      <span className="checkbox__text">
                        <span>Сукні</span>
                      </span>
                    </label>
                  </li>
                  <li>
                    <label className="section-filter__checkbox checkbox">
                      <input
                        data-error="Error"
                        type="checkbox"
                        className="checkbox__input"
                        value="1"
                      />
                      <span className="checkbox__text">
                        <span>Сукні</span>
                      </span>
                    </label>
                  </li>
                  <li>
                    <label className="section-filter__checkbox checkbox">
                      <input
                        data-error="Error"
                        type="checkbox"
                        className="checkbox__input"
                        value="1"
                      />
                      <span className="checkbox__text">
                        <span>Сукні</span>
                      </span>
                    </label>
                  </li>
                </ul>
              </div>
              <div className="categories-search__column">
                <ul className="categories-search__list">
                  <li>
                    <label className="section-filter__checkbox checkbox">
                      <input
                        data-error="Error"
                        type="checkbox"
                        className="checkbox__input"
                        value="1"
                      />
                      <span className="checkbox__text">
                        <span>Сукні</span>
                      </span>
                    </label>
                  </li>
                  <li>
                    <label className="section-filter__checkbox checkbox">
                      <input
                        data-error="Error"
                        type="checkbox"
                        className="checkbox__input"
                        value="1"
                      />
                      <span className="checkbox__text">
                        <span>Сукні</span>
                      </span>
                    </label>
                  </li>
                  <li>
                    <label className="section-filter__checkbox checkbox">
                      <input
                        data-error="Error"
                        type="checkbox"
                        className="checkbox__input"
                        value="1"
                      />
                      <span className="checkbox__text">
                        <span>Сукні</span>
                      </span>
                    </label>
                  </li>
                  <li>
                    <label className="section-filter__checkbox checkbox">
                      <input
                        data-error="Error"
                        type="checkbox"
                        className="checkbox__input"
                        value="1"
                      />
                      <span className="checkbox__text">
                        <span>Сукні</span>
                      </span>
                    </label>
                  </li>
                  <li>
                    <label className="section-filter__checkbox checkbox">
                      <input
                        data-error="Error"
                        type="checkbox"
                        className="checkbox__input"
                        value="1"
                      />
                      <span className="checkbox__text">
                        <span>Сукні</span>
                      </span>
                    </label>
                  </li>
                  <li>
                    <label className="section-filter__checkbox checkbox">
                      <input
                        data-error="Error"
                        type="checkbox"
                        className="checkbox__input"
                        value="1"
                      />
                      <span className="checkbox__text">
                        <span>Сукні</span>
                      </span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="search-page__input">
        <input
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          autoComplete="off"
          type="text"
          name="form[]"
          data-error="Помилка"
          data-value=""
          className="input"
        />
      </div>
      <button className="search-page__btn btn">Задати питання</button>
    </form>
  );
}
export default PageSearch;
