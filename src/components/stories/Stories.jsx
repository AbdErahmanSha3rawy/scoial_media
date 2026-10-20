import React, { useEffect, useState } from 'react'
import Story from './story';
import './Stories.css'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import {Autoplay, Navigation } from 'swiper/modules';

const Stories = () => {
const [stories, setStories] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
    const Stories = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://tarmeezacademy.com/api/v1/posts`);
        const data = await res.json();
        setStories(data.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    Stories();
  }, []);
console.log("stories:", stories);
  return (
   <div className="stories">

 <Swiper
  loop={stories.length > 4}
   autoplay={{
         
          disableOnInteraction: false,
        }}
        slidesPerView={8}
        spaceBetween={1}
        navigation={true} 
        modules={[Navigation,Autoplay]}
        // breakpoints={{
        //   // // عندما تكون الشاشة أكبر من أو تساوي 320 بكسل (موبايل)
        //   // 320: {
        //   //   slidesPerView: 1.5,
        //   //   spaceBetween: 5,
        //   // },
        //   //  420: {
        //   //   slidesPerView: 1.75,
        //   // },
        //   // 480: {
        //   //   slidesPerView: 2,
        //   // },
        //   //   530: {
        //   //   slidesPerView: 2.25,
        //   // },
        //   // // عندما تكون الشاشة أكبر من أو تساوي 640 بكسل (تابلت صغير)
        //   // 620: {
        //   //   slidesPerView: 2.80,
        //   // },
        //   // // عندما تكون الشاشة أكبر من أو تساوي 768 بكسل (تابلت)
        //   // 700: {
        //   //   slidesPerView: 3,
        //   // },
        //   // 800: {
        //   //   slidesPerView: 3.5,
        //   // },
        //   // // عندما تكون الشاشة أكبر من أو تساوي 1024 بكسل (لاب توب / شاشات متوسطة)
        //   // 1024: {
        //   //   slidesPerView: 4,
        //   // },
        //   // // الشاشات الكبيرة جداً
        //   // 1280: {
        //   //   slidesPerView: 5,
        //   // },
        // }}
        className="mySwiper"
      >
       
        
      {Array.isArray(stories) && stories.map((item, index) => (
          <SwiperSlide className='SwiperSlide'>
   {        item.image && <Story item={item} key={item.id || index} />}
        </SwiperSlide>  

            ))}
      </Swiper>




   </div>



  )
}

export default Stories
