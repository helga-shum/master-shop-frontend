import React from 'react';

const ProductNavi: React.FC = () => {
  const navies = ['Description', 'Measures'];
  const [activeNavy, setActiveNavy] = React.useState<number>(0);
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
};
export default ProductNavi;
