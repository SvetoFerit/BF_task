import React from 'react';
import Articles from './Articles'
import SideColumn from '../SideColumn/SideColumn'
import newsData from './News'

const Categories = ()=>{
    const articlesComponents=newsData.map((data)=> {
      return (
        <Articles key={data.id}
        news={data}
        />
      )
    })

    return(
      <div>
        <div className="grid-container">
          <div className="main">
            {articlesComponents}
          </div>

          <div className="side">
            <SideColumn />
          </div>

        </div>
      </div>
    )

}
export default Categories
