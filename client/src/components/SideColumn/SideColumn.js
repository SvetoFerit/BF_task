import React from 'react';
import ReactPlayer from 'react-player'
import SideArticles from './SideArticles'
import newsData from './SideNews'

const RightColumn = (props) => {
  const sideColumnArticles=newsData.map((data)=> {
    return (
      <SideArticles key={data.id}
      news={data}
      />
    )
  })

  return (
<div>
  <body>
    <div className="links">
      <a href="#top">Popular</a>
      <a href="#top">Top Rated</a>
      <a href="#top">Comments</a>
      <br/>
        {sideColumnArticles}
    </div>

    <div className="side-card-social">
      <h3>Social</h3>
      <div className="image"><p>Image</p></div>
      <div className="image"><p>Image</p></div>
    </div>

    <div className="kenaz-tv">
      <h3>Kenaz TV</h3>
      <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width="100%" height="100%" />
    </div>
  </body>
</div>
  );
}

export default RightColumn;
