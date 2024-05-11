import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function ImageCarousel({image}) {
    console.log(image)
    return (
    <Carousel className='' showThumbs={false}>
     {
       image.map(i=>(
        <div className='h-100'>
            <img style={{"height":"32rem"}} src={i.url}/>
        </div>
       ))
     }
    </Carousel>
  )
}

export default ImageCarousel