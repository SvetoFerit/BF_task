import React from 'react';

const SideArticles = (props) => {
  return (
<div>
  <body>
    <div className="side-card-articles">
      <p>{props.news.title}</p>
      <p>{props.news.description}</p>
      <img src={props.news.urlToImage} className="side-card-articles-img" alt=""/>
    </div>
  </body>
</div>
  );
}

export default SideArticles;
