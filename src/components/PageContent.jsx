import New from './New';
import Review from './Review';
function PageContent() {
  return (
    <div data-da="page__content,last,992" className="page__content-side">
      <div className="page__news-side news-side">
        <a href="" className="news-side__title side-title">
          News
        </a>
        <div className="news-side__items">
          <New />
          <New />
        </div>
      </div>
      <div className="page__reviews-side reviews-side">
        <a href="" className="reviews-side__title side-title">
          Reviews
        </a>
        <div className="reviews-side__items">
          <Review />
        </div>
      </div>
    </div>
  );
}
export default PageContent;
