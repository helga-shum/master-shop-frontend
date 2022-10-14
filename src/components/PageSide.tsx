import PageContent from './PageContent';
import Navigation from './Navigation';
import React from 'react';
import SideFilter from './SideFilter';
import { useLocation } from 'react-router-dom';
type CatalogSideProps = {
  categoryId?: number;
  onClickCategory?: (i: number) => void;
};
const CatalogSide: React.FC<CatalogSideProps> = ({ categoryId, onClickCategory }) => {
  const location = useLocation();
  return (
    <aside className="page__side">
      {categoryId !== undefined && onClickCategory !== undefined ? (
        <Navigation categoryId={categoryId} onClickCategory={onClickCategory} />
      ) : (
        <Navigation />
      )}
      {location.pathname == '/catalog' ? <SideFilter /> : ''}

      <PageContent />
    </aside>
  );
};

export default CatalogSide;
