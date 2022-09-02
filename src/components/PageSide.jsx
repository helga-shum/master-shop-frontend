import PageContent from './PageContent';
import Navigation from './Navigation';
import React from 'react';

function PageSide() {
  return (
    <aside className="page__side">
      <Navigation />
      <PageContent />
    </aside>
  );
}
export default PageSide;
