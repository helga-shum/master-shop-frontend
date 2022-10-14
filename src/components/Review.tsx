import React from 'react';
const Review: React.FC = () => {
  return (
    <a href="" className="reviews-side__item">
      <div className="reviews-side__header">
        <div className="reviews-side__user">Olha Shumilova</div>
        <div className="reviews-side__data">12.04.2022</div>
      </div>
      <div className="reviews-side__body">
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and scrambled it to make a type specimen book. It has
        survived not only five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </div>
    </a>
  );
};
export default Review;
