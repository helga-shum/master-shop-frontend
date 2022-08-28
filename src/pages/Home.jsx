import ProductsSlider from '../components/ProductsSlider';
import PageSide from '../components/PageSide';
import PageSearch from '../components/PageSearch';
import Slider from '../components/Slider';

function Home() {
  return (
    <>
      <PageSide />
      <div className="page__content">
        <PageSearch />
        <Slider />
        <ProductsSlider />
      </div>
    </>
  );
}

export default Home;
