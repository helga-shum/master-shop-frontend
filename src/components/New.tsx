import React from 'react';
const New: React.FC = () => {
  return (
    <div className="news-side__item">
      <a href="" className="news-side__label">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </a>
      <div className="news-side__body">
        <div className="news-side__data">
          <span>12</span>april
        </div>
        <div className="news-side__text">
          It is a long established fact that a reader will be distracted by the readable content of
          a page when looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using 'Content here, content
          here', making it look like readable English.
        </div>
      </div>
    </div>
  );
};
export default New;
