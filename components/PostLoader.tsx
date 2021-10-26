import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
  <ContentLoader
    style={{ marginLeft: '500px' }}
    speed={2}
    width={821}
    height={723}
    viewBox="0 0 821 723"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="3" y="22" rx="100" ry="100" width="800" height="900" />
  </ContentLoader>
);

export default MyLoader;
