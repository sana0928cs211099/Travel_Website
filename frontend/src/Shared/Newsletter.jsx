import React from 'react'
import './newsletter.css';

import { Container, Row, Col } from 'reactstrap';
import maleTourist from '../assets/images/male-tourist.png';

const Newsletter = () => {
  return <section className='newsletter'>
      <Container>
          <Row>
              <Col lg='6'>
                 <div className="newsletter__content">
                     <h2>Subscribe now to get useful traveling information.</h2>

                        <div className="newsletter__input">
                            <input type="email" placeholder="Your Email Address" />
                            <button className="newsletter__btn btn">Subscribe</button>
                        </div>

                         <p>Every tour promises moments of wonder, learning, and connection,
                             making travel as enriching as it is enjoyable.</p>
                 </div>
              </Col>
              <Col lg='6'>
                  <div className="newsletter__img">
                     <img src={maleTourist} alt="male tourist" />
                  </div>
              </Col>
          </Row>
      </Container>
  </section>
}

export default Newsletter