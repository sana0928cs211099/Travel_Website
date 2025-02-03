import React from 'react'
import '../Shared/common-section.css';
import { Container, Row, Col} from 'reactstrap';

const CommonSection = ({title}) => {
  return (
    <section className="common__section">
        <Container>
            <Row>
                <Col lg='12'>
                    <h1 className='section__title'>{title}</h1>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default CommonSection