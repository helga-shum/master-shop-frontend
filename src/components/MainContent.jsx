import ProductsSlider from './ProductsSlider';
import PageSide from './PageSide';
import PageSearch from './PageSearch';
import Slider from './Slider';

function MainContent() {
  return (
    <main className="page">
      <div className="page__container _container">
        <PageSide />
        <div className="page__content">
          <PageSearch />
          <Slider />
          <ProductsSlider />
        </div>
      </div>
    </main>
  );
}

export default MainContent;
