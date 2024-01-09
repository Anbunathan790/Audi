import React from 'react'
import { Col, Row } from 'react-bootstrap'


function Footer() {
  return (
    <div className=' footer'>
      <div className=' p-5'>
      <Row>
      <Col className='md={2}'>
        <h3>Models</h3>
        <p>all models</p>
        <p>model price list</p>
      </Col>
      <Col className='md={2}'>
        <h3>Used Cars</h3>
        <p>Audi Approved Plus</p>
        <p>Dealer Locator</p>
      </Col>
      <Col className='md={2}'>
      <h3>Customer Area</h3>
      <p>Audi Owners</p>
      <p>Audi Service</p>
      <p>myAudi Connect</p>
      <p>Audi Club Rewards</p>
      <p>Audi Concierge</p>
      <p>Sustainability</p>
      <p>Discover Audi from Home</p>
      <p>Book a test drive</p>
      </Col>
      <Col className='md={2}'>
      <h3>Innovation</h3>
      <p>Audi Sport</p>
      <p>Audi RS e-tron GT</p>
      <p>Audi e-tron GT</p>
      <p>Audi quattro</p>
      <p>Audi e-tron hub</p>
      </Col>
      <Col className='md={2}'>
      <h3>Support</h3>
      <p>Careers</p>
      <p>Press</p>
      <p>Audi Shop</p>
      <p>Imprint</p>
      <p>Corporate Governance</p>
      <p>Contact / Newsletter</p>
      </Col>
      <div className='fs-3 '>
      <i class="fa-brands fa-facebook"></i>
      <i class="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-youtube"></i>
      <i class="fa-brands fa-twitter"></i>
      <i class="fa-brands fa-linkedin"></i>
      </div>
      <hr />
      <div>
      “The specified values of fuel consumption and emission are determined according to the mandatory emission test measurement specified in Rule 115 of Central Motor Vehicle Rules 1989 (CMVR), under controlled conditions using reference fuel, at an agency authorized under Rule 126 of CMVR. Fuel consumption and emission values may vary due to factors such as driving habits, road and traffic condition, fuel quality, maintenance practices, loading pattern, ambient condition and engineering tolerances etc. <br /><br />

The values declared for the vehicles have been obtained from one of the variant tested as per Central Motor Vehicle Rule 115. Fuel consumption and emission value for other variants may differ. Audi India or its authorize dealers shall not be held liable for any difference in fuel consumption values, due to any of the aforesaid variables. <br /><br />

Due to constant product improvement / changes in regulatory framework, technical specification provided herewith are subject to change without prior notice, customers are requested to contact Audi Call Centre / Audi Authorised Dealer for further details.”
      </div>
    </Row>
    </div>
    </div>
  )
}

export default Footer