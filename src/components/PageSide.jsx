import PageContent from './PageContent';
import Navigation from './Navigation';
function PageSide() {
  return (
    <aside className="page__side">
      <Navigation />
      <PageContent />
    </aside>
  );
}
export default PageSide;
