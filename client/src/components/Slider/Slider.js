import React from 'react';
import { Slide } from 'react-slideshow-image';
import sliderData from '../Categories/News'
import SliderNews from './SliderNews'

const Slider = () => {

const properties = {
  duration: 5000,
  infinite: true,
  arrows: true,

}
const slider=sliderData.map((data)=>{
  return(

  <SliderNews key={data.id} news={data}/>

)
})
return(

<div className="slider">
  <Slide {...properties} >
    {slider}
  </Slide>
</div>

    )

}

export default Slider;
