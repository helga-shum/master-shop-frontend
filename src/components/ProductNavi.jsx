import React from 'react';

function ProductNavi() {
  const navies = ['Description', 'Measures'];
  const [activeNavy, setActiveNavy] = React.useState(0);
  return (
    <nav className="content-checkout__nav">
      {navies.map((navy, i) => (
        <div
          key={i}
          onClick={() => {
            setActiveNavy(i);
          }}
          className={
            activeNavy == i
              ? 'content-checkout__item _tabs-item _active'
              : 'content-checkout__item _tabs-item'
          }>
          {navy}
        </div>
      ))}
    </nav>
  );
}
export default ProductNavi;
