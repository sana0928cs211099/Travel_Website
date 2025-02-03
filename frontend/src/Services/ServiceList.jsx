import React from 'react'
import ServiceCard from './ServiceCard';
import { Col } from 'reactstrap';

import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import customizationImg from '../assets/images/customization.png';

const servicesData = [
    {
      imgUrl: weatherImg,
      title: 'Weather Forecast',
      desc: 'Get real-time weather updates for your chosen location.',  
    },
    {
      imgUrl: guideImg,
      title: 'Tour Guide',
      desc: 'Book a private tour guide to help you plan your visit.',
    },
    {
      imgUrl: customizationImg,
      title: 'Customization',
      desc: 'Tailor your tour experience to your preferences.',
    },
  ];


const ServiceList = () => {
  return (
    <>
      {
        servicesData.map((item, index) => (
          <Col lg='3'md='6' sm='12' className="mb-4" key={index}>
            <ServiceCard item={item} />
          </Col>
        ))
      }
    </>
  )
}

export default ServiceList