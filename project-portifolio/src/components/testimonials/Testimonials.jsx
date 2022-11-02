import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar_1.jpg'
import AVTR2 from '../../assets/avatar_2.jpg'
import AVTR3 from '../../assets/avatar_3.jpg'
import AVTR4 from '../../assets/avatar_4.jpg'

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [{
  avatar: AVTR1,
  name: "Gael",
  review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique id labore excepturiMaiores, aut. Odit, laboriosam ex similique iure culpa, repellat asperiores accusantium,"
},
{
  avatar: AVTR2,
  name: "Aline",
  review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique id labore excepturiMaiores, aut. Odit, laboriosam ex similique iure culpa, repellat asperiores accusantium,"
},
{
  avatar: AVTR3,
  name: "Benicio",
  review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique id labore excepturiMaiores, aut. Odit, laboriosam ex similique iure culpa, repellat asperiores accusantium,"
},
{
  avatar: AVTR4,
  name: "Lucia",
  review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique id labore excepturiMaiores, aut. Odit, laboriosam ex similique iure culpa, repellat asperiores accusantium,"
},
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">
                {review}
              </small>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials