import PageContent from './PageContent';
import Navigation from './Navigation';
import React from 'react';
import SideFilter from './SideFilter';
function CatalogSide({ categoryId, onClickCategory }) {
  return (
    <aside className="page__side">
      <Navigation categoryId={categoryId} onClickCategory={onClickCategory} />
      <SideFilter />
      <PageContent />
    </aside>
  );
}
export default CatalogSide;
