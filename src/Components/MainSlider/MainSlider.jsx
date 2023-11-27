import React from 'react'
import slider1 from '../../Assets/images/slider-image-1.jpeg'
import slider2 from '../../Assets/images/slider-image-2.jpeg'
import slider3 from '../../Assets/images/slider-image-3.jpeg'
import blog1 from '../../Assets/images/blog-img-1.jpeg'
import blog2 from '../../Assets/images/blog-img-2.jpeg'

import Slider from 'react-slick'
export default function MainSlider() {

  var settings = {
    autoplay:true,
     infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    arrows:false,
     fade:true,
  };





  return <>
  <div class="nine container">
  <h1 className='main-title mt-5'>Offers<span>Shop Now</span></h1>
</div>
  <div className='row gx-0 container m-auto py-5'>
  <div className='col-md-9 '>

  <Slider {...settings}>
<img  height={400} className='w-100' src={slider1} alt="" />
  <img height={400} className='w-100' src={slider2} alt="" />
  <img height={400} className='w-100' src={slider3} alt="" />

    </Slider>
  </div>
  <div className='col-md-3 '>
<img  height={200} className='w-100' src={blog1} alt="" />
<img height={200} className='w-100' src={blog2} alt="" />
  </div>
  </div>
  </>
}
