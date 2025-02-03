import React, {useEffect} from 'react';
import '../Styles/home.css';
import { Container, Row, Col } from 'reactstrap';
import about1 from '../assets/images/about1.jpg';
import about2 from '../assets/images/about2.jpg';
import aboutVid0 from '../assets/images/aboutVid0.mp4';
import aboutVid1 from '../assets/images/aboutVid1.mp4';
import aboutVid2 from '../assets/images/aboutVid2.mp4';
import aboutVid5 from '../assets/images/aboutVid5.mp4';
import aboutVid4 from '../assets/images/aboutVid4.mp4';
import aboutVid6 from '../assets/images/aboutVid6.mp4';
import aboutVid7 from '../assets/images/aboutVid7.mp4';
import tourV1 from '../assets/images/tourV1.mp4';
import tourV2 from '../assets/images/tourV2.mp4';
import tourV3 from '../assets/images/tourV3.mp4';
import tourV4 from '../assets/images/tourV4.mp4';
// import tourV5 from '../assets/images/tourV5.mp4';
// import tourV6 from '../assets/images/tourV6.mp4';
// import tourV7 from '../assets/images/tourV7.mp4';
import worldImg from '../assets/images/world.png';
import Subtitle from '../Shared/Subtitle';
import ServiceList from '../Services/ServiceList';
import Newsletter from '../Shared/Newsletter';


const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <>
      {/*========================= Hero section start ======================= */}
      <section>
        <Container>
          <Row>

          <Col lg='2'>
            <div className="hero__img-box">
              <img src={about1} alt="" />
            </div>
            </Col>

            <Col lg='2'>
            <div className="hero__img-box hero__video-box mt-4">
              <video src={aboutVid0} alt="" autoPlay loop/>
            </div>
            </Col>

            <Col lg='2'>
            <div className="hero__img-box">
              <img src={about2} alt="" />
            </div>
            </Col>

            <Col lg="6">
              <div className="hero__content ml-6">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={'Know Before You Go'} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>Discover, experience
                  <span className='highlight'> and travel effortlessly.</span>
                </h1>
                <p> It leaves us with stories, 
                    friendships, and memories that last a lifetime, enriching us in ways that
                     no other experience can. In every destination, we find a piece of ourselves,
                      making travel not just about places but about transformation.</p>
              </div>
            </Col>
            
            
           
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
                 <Subtitle subtitle={'Visit Places'}/>
                 <h2 className="freatured__tour-title">Some Beautiful Places</h2>
              </Col>
              <Col lg='2'>
            <div className="hero__img-box">
            <video src={aboutVid1} alt="" autoPlay loop/>
            </div>
            </Col>

            <Col lg='2'>
            <div className="hero__img-box hero__video-box">
              <video src={aboutVid2} alt="" autoPlay loop/>
            </div>
            </Col>

            <Col lg='2'>
            <div className="hero__img-box">
            <video src={aboutVid5} alt="" autoPlay loop/>
            </div>
            </Col>

            <Col lg='2'>
            <div className="hero__img-box">
            <video src={aboutVid4} alt="" autoPlay loop/>
            </div>
            </Col>

            <Col lg='2'>
            <div className="hero__img-box">
            <video src={aboutVid6} alt="" autoPlay loop/>
            </div>
            </Col>

            <Col lg='2'>
            <div className="hero__img-box">
            <video src={aboutVid7} alt="" autoPlay loop/>
            </div>
            </Col>

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
                     <p>Our local guides, passionate and knowledgeable, lead travelers
                         through historic landmarks, hidden gems, and vibrant local scenes, 
                         sharing insights that bring each place to life
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
                    <video src={tourV1} alt="" autoPlay loop muted/>
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

                <Col lg='4'>
                <div className="experience__img1">
                    <video src={tourV2} alt="" autoPlay controls loop muted/>
                </div>
                </Col>

                <Col lg='4'>
                <div className="experience__img1">
                    <video src={tourV3} alt="" autoPlay controls loop muted/>
                </div>
                </Col>

                <Col lg='4'>
                <div className="experience__img1">
                    <video src={tourV4} alt="" autoPlay controls loop muted/>
                </div>
                </Col>

             </Row>
          </Container>
        </section>

        {/*========================= Gallery section End ======================= */}

           <Newsletter/>

    </>
  )
}

export default About