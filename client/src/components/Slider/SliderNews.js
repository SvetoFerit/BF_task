import React from 'react';


const SliderNews = (props)=>{
  return(
    <div>
      <body>
        <div className="slider-card" style={{backgroundImage:props.news.status && `url(${props.news.urlToImage})`,backgroundSize: "cover",height:"100%"}}>
          <h2>{props.news.title}</h2>
          <h5>{props.news.description}</h5>
          <p>{props.news.description}</p>
        </div>
      </body>
    </div>

    );

}

export default SliderNews;
