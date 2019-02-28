import React from 'react';


const Articles = (props)=>{
    return(
    <div>
      <body>
        <div className="card">
          <h2>{props.news.title}</h2>
          <h5>{props.news.description}</h5>
          <img src={props.news.urlToImage} className="articles-image" alt=""/>
          <p className="articles-text">{props.news.description}</p>
        </div>
      </body>
    </div>

    );

}

export default Articles
