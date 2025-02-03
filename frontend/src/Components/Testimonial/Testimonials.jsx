import React from 'react'
import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.jpg';
import ava02 from '../../assets/images/ava-2.jpg';
import ava03 from '../../assets/images/ava-3.jpg';
import ava04 from '../../assets/images/ava-50.jpg';
import ava05 from '../../assets/images/ava-40.jpeg';
import ava06 from '../../assets/images/ava-60.jpeg';

export const Testimonials = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed:1000,
        autoplay: true,
        swipeToSlide: true,
        autoplaySpeed:2000,
        slidesToShow: 3,
        
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
  return <Slider {...settings}>
       <div className="testimonial py-4 px-3">
           <p>"I’m so glad I chose this travel company. The tour was 
            well-organized, the guides were passionate, and I got to 
            experience things I never would have on my own. This company
             truly goes above and beyond!" </p>
           
           <div className="d-flex align-items-center gap-4 mt-3">
             <img src={ava01} alt="" className="w-25 h-25 rounded-2" />
            <div> 
             <h6 className="mb-0 mt-3">John Doe</h6>
             <p>Customer</p>
             </div>
            </div>
       </div>

       <div className="testimonial py-4 px-3">
           <p>"From start to finish, the entire experience was flawless. 
            The team was professional, the accommodations were wonderful, 
            and the destinations were just breathtaking!"</p>
           
           <div className="d-flex align-items-center gap-4 mt-3">
             <img src={ava02} alt="" className="w-25 h-25 rounded-2" />
            <div> 
             <h6 className="mb-0 mt-3">Liza Franklin</h6>
             <p>Customer</p>
             </div>
            </div>
       </div>

       <div className="testimonial py-4 px-3">
           <p>"I’ve traveled to many places, but this tour made me 
            fall in love with travel all over again. The personal touches, 
            attention to detail, and local insights made the journey unforgettable. 
            Thank you for an amazing experience!"</p>
           
           <div className="d-flex align-items-center gap-4 mt-3">
             <img src={ava03} alt="" className="w-25 h-25 rounded-2" />
            <div> 
             <h6 className="mb-0 mt-3">Danny</h6>
             <p>Customer</p>
             </div>
            </div>
       </div>

       <div className="testimonial py-4 px-3">
           <p>"What a fantastic trip! Every moment was carefully curated to make
             sure we saw the best of the region. I made new friends, learned so much, 
             and had an incredible time. I’ll definitely be booking more trips!"</p>
           
           <div className="d-flex align-items-center gap-4 mt-3">
             <img src={ava05} alt="" className="w-25 h-25 rounded-2" />
            <div> 
             <h6 className="mb-0 mt-3">Mark Den</h6>
             <p>Customer</p>
             </div>
            </div>
       </div>

       <div className="testimonial py-4 px-3">
           <p>"This was by far the best trip of my life! From the seamless 
            booking process to the incredible guided tours, every detail was perfect.
             I felt like I truly experienced the destination, not just visited it!"</p>
           
           <div className="d-flex align-items-center gap-4 mt-3">
             <img src={ava04} alt="" className="w-25 h-25 rounded-2" />
            <div> 
             <h6 className="mb-0 mt-3">Sarah</h6>
             <p>Customer</p>
             </div>
            </div>
       </div>

       <div className="testimonial py-4 px-3 ">
           <p>"The trip exceeded all of my expectations! The guides were 
            friendly and knowledgeable, and the itinerary was packed with 
            unique experiences that I’ll cherish forever. I can’t wait
             to book my next adventure with this team!"</p>
           
           <div className="d-flex align-items-center gap-4 mt-3">
             <img src={ava06} alt="" className="w-25 h-25 rounded-2" />
            <div> 
             <h6 className="mb-0 mt-3">Arav</h6>
             <p>Customer</p>
             </div>
            </div>
       </div>
  </Slider>
}
