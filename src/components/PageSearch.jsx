import React from 'react';
import debounce from 'lodash.debounce';
import { SearchContext } from '../App';
function PageSearch() {
  const [value, setValue] = React.useState('');
  const { setSearchValue } = React.useContext(SearchContext);
  const inputRef = React.useRef();
  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 1000),
    [],
  );
  const onClickClear = () => {
    setSearchValue('');
    setValue('');
    inputRef.current.focus();
  };

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };
  return (
    <form action="#" className="page__search search-page">
      <div className="search-page__select">
        <div className="search-page__title">
          <span>Everywhere</span>
          <span data-text="Select:" className="search-page__quantity"></span>
        </div>
      </div>
      <div className="search-page__input">
        <input
          ref={inputRef}
          placeholder="Finding the good..."
          value={value}
          onChange={onChangeInput}
          autoComplete="off"
          type="text"
          name="form[]"
          data-error="Помилка"
          data-value=""
          className="input"
        />
      </div>

      {value && (
        <button onClick={onClickClear} className="search-page__clean">
          <img src="https://img.icons8.com/ios-glyphs/30/000000/multiply.png" />
        </button>
      )}
      <button className="search-page__btn btn">Take a question</button>
    </form>
  );
}
export default PageSearch;
