import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import Slider from 'react-slick/lib/slider'
export default function CategorySlider() {


  function getCategories() {
    
    
    return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  }
  
  let {isLoading,data,isError}= useQuery('getCategories',getCategories)
  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    
  };
  return <>

<div class="nine container">
  <h1 className='main-title '>Categories<span>Shop Now</span></h1>
</div>
  
  <div className='py-4'>

  {data?.data.data?<Slider {...settings} className="w-100 ">
  {data?.data.data.map((item)=><img key={item.id} src={item.image} height={330} className='w-100' alt=""/>)}    
  </Slider>:''}
  </div>
  

  </>
  
}
