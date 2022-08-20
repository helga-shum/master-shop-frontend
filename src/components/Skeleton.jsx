import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={287}
    height={427}
    viewBox="0 0 287 427"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="44" y="16" rx="0" ry="0" width="185" height="240" />
    <rect x="45" y="275" rx="0" ry="0" width="185" height="25" />
    <rect x="58" y="309" rx="0" ry="0" width="157" height="20" />
    <rect x="39" y="371" rx="0" ry="0" width="40" height="40" />
    <rect x="164" y="378" rx="0" ry="0" width="74" height="28" />
  </ContentLoader>
);

export default Skeleton;
