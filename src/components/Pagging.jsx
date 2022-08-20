import React from 'react';

function Pagging() {
  const numbers = ['1', '2', '3', '4', '5', '...', '10'];
  const [activeNumber, setActiveNumber] = React.useState(0);
  const onClickNumber = (index) => {
    setActiveNumber(index);
  };
  return (
    <div className="pagging">
      <a href="" className="pagging__arrow"></a>
      <ul className="pagging__list">
        {numbers.map((number, i) => (
          <li key={i}>
            <a
              href="#"
              onClick={() => onClickNumber(i)}
              className={activeNumber == i ? 'pagging__item _active' : 'pagging__item'}>
              {number}
            </a>
          </li>
        ))}
      </ul>
      <a href="" className="pagging__arrow"></a>
    </div>
  );
}
export default Pagging;
