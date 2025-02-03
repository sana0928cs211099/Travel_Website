import React, {useEffect} from 'react';
import '../Styles/home.css';

import { Container, Row, Col } from 'reactstrap';
import home1 from '../assets/images/home1.jpg';
import home2 from '../assets/images/home2.jpg';
import homeVid from '../assets/images/homeVid.mp4';
import worldImg from '../assets/images/world.png';
import experienceImg from '../assets/images/experience.png';
import Subtitle from '../Shared/Subtitle';
import SearchBar from '../Shared/SearchBar';
import ServiceList from '../Services/ServiceList';
import FeaturedTourList from '../Components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../Components/Image-gallery/MasonryImagesGallery';
import { Testimonials } from '../Components/Testimonial/Testimonials';
import Newsletter from '../Shared/Newsletter';


const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/*========================= Hero section start ======================= */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={'Know Before You Go'} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>Traveling opens the door to creating
                  <span className='highlight'> memories</span>
                </h1>
                <p>Traveling opens a door to the vast, colorful world beyond our 
                  routines, inviting us to explore new cultures, landscapes, 
                  and ways of life. Each journey holds the potential to broaden 
                  our perspective, offering moments of discovery, awe, and connection.</p>
              </div>
            </Col>
            
            <Col lg='2'>
            <div className="hero__img-box">
              <img src={home1} alt="" />
            </div>
            </Col>

            <Col lg='2'>
            <div className="hero__img-box hero__video-box mt-4">
              <video src={homeVid} alt="" autoPlay loop/>
            </div>
            </Col>

            <Col lg='2'>
            <div className="hero__img-box mt-5">
              <img src={home2} alt="" />
            </div>
            </Col>
            
            <SearchBar/>
           
          </Row>
        </Container>
      </section>

        {/*========================= Hero section End ======================= */}

        {/*========================= Services section start ======================= */}

        <section>
          <Container>
            <Row>
              <Col lg="3">
                <h5 className="services__subtitle">What we serve</h5>
                <h2 className='services__title'>We offer our best services</h2>
              </Col>
              <ServiceList/>
            </Row>
          </Container>
        </section>

        {/*========================= Services section End ======================= */}

        {/*========================= freatured section start ======================= */}

        <section>
          <Container>
            <Row>
              <Col lg="12" className="mb-5">
                 <Subtitle subtitle={'Explore'}/>
                 <h2 className="freatured__tour-title">Our featured tours</h2>
              </Col>
              <FeaturedTourList/>
            </Row>
          </Container>
        </section>

        {/*========================= freatured section End ======================= */}

        {/*========================= Experience section start ======================= */}

          <section>
            <Container>
               <Row>
                <Col lg='6'>
                  <div className="experience__content">
                     <Subtitle subtitle={'Experience'}/>
                     <h2>With our all experience <br/> we will serve you</h2>
                     <p>Our travel website offers curated tour experiences designed 
                      to make every journey unforgettable. From guided city tours to
                       immersive cultural excursions, each trip is crafted to highlight
                        the best of every destination while ensuring comfort, safety,
                         and authentic encounters. 
                     </p>
                  </div>
                
                <div className="counter__wrapper d-flex align-items-center gap-5">
                    <div className="counter__box">
                      <span>12k+</span>
                      <h6>Successfull Trip</h6>
                    </div>
                    <div className="counter__box">
                      <span>2k+</span>
                      <h6>Regular clients</h6>
                    </div>
                    <div className="counter__box">
                      <span>15</span>
                      <h6>Years experience</h6>
                    </div>
                </div>

                </Col>
                <Col lg='6'>
                    <div className="experience__img">
                      <img src={experienceImg} alt="" />
                    </div>
                </Col>
               </Row>
            </Container>
          </section>

        {/*========================= Experience section End ======================= */}

        {/*========================= Gallery section Start ======================= */}

        <section>
          <Container>
             <Row>
                <Col lg='12'>
                <Subtitle subtitle={'Gallery'}/>
                <h2 className='gallery__title'>Visit our customers tour gallery</h2>
                </Col>
                <Col lg='12'>
                <MasonryImagesGallery/>
                </Col>
             </Row>
          </Container>
        </section>

        {/*========================= Gallery section End ======================= */}

        {/*========================= Testimonial section End ======================= */}

        <section>
           <Container>
              <Row>
                  <Col lg='12'>
                    <Subtitle subtitle={'Fans Love'}/>
                    <h2 className='testimonial__title'>What our fans say about us</h2>
                  </Col>
                  <Col lg='12'>
                  <Testimonials/>
                  </Col>
              </Row>
           </Container>
        </section>

        {/*========================= Testimonial section End ======================= */}

           <Newsletter/>

    </>
  )
}

export default Home