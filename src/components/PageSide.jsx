import PageContent from './PageContent';
import Navigation from './Navigation';
import React from 'react';

function PageSide() {
  const [categoryId, setCategoryId] = React.useState(4);
  return (
    <aside className="page__side">
      <Navigation categoryId={categoryId} onClickCategory={(i) => setCategoryId(i)} />
      <PageContent />
    </aside>
  );
}
export default PageSide;
