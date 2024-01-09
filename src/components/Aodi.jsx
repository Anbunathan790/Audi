import React from 'react'
import { Col, Row } from 'react-bootstrap'


function Aodi() {
  return (
    <div>
        <div className="img1">
        <div className='ms-5 p-5 text-white'>
        <h1 className='fs-2 fw-bolder'>A matter of character.</h1>
        <p className='fw-bolder fs-6 mt-3'>
        With progressive design that suits your lifestyle. <br />
        Progress you can feel. The new, fully electric <br />
        Audi Q8 e-tron and Audi Q8 Sportback e-tron range. <br />
        Future is an attitude
        </p>
        <button className='p-2 fs-5 btna'>Explore audi Q-8 e-tron</button>
        <button  className='btno fs-5 p-2 ms-1' >Explore Audi Q-8 sportsback e-tron</button>
        </div>
            
        </div>

        <div>
          <h4 className='mt-4 ms-3' >Models</h4>
          <Row className='justify-content-evenly'>
            <Col md={2}><img src="https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCEtzEwF-SlMwJZKUycmbmJ6an6QD4_I3taTmV-aUkxO0grT19ZuI3_54-eIWtvsygXvJPpX3uyh4EVpOsfkGB-DyT4XgMJjmsMYBIkkwAiukB8JgNmBgbWCiAjkgEE-PhKi3IKEosSc_XKM1NKMgQ1DIgEwuwuriGOnj7BANODQ27pAAAA?wid=291" alt="" />
            <h6 className='text-center ms-4 p-3'>Q-8 e-Tron</h6>
            </Col>

            <Col md={2}><img src="https://mediaservice.audi.com/media/live/50900/fly1400x601n8/f83rj7/2022.png?wid=291" alt="" />
            <h6 className='text-center ms-4 p-3'>Q-8 e-Tron</h6>
            </Col>

            <Col md={2}><img src="https://www.audi.in/content/dam/nemo/in/models/E-tron/etroncatalunyared_sv.png?imwidth=291" alt="" />
            <h6 className='text-center ms-4 p-3'>Q-8 e-Tron</h6>
            </Col>

            <Col md={2}><img src="https://www.audi.in/content/dam/nemo/in/models/a4-sedan/A4navarrablue_sv.png?imwidth=291" alt="" />
            <h6 className='text-center ms-5 p-3'>Q-8 e-Tron</h6>
            </Col>

            <Col md={2}><img src="https://mediaservice.audi.com/media/live/50900/fly1400x601n8/f5as/2018.png?wid=291" alt="" />
            <h6 className='text-center ms-5 p-3'>Q-8 e-Tron</h6>
            </Col>
           
          </Row>
        </div>

        <div>
          <Row>
            <Col>
            
            <img className='p-5 ms-5 mt-5 mb-5' src="https://www.audi.in/dam/nemo/in/models/a8/A86_883.jpg?imwidth=730" style={{width:'90%'}} alt="" />
          
            </Col>
           
            <Col>
            <h1 className='fw-bolder' style={{marginTop:'17rem',fontSize:'50px'}}>Audi Virtual <br /> Showroom</h1>
            <button className='p-3 fs-5 btn01'>Explore More</button>
            </Col>
          </Row>
        </div>

        <div className='img2'>
        <div className='cardo'>
          <h1 className='fw-bold'>The home of electric</h1>
          <p>Seeing the world with different eyes is what drives us. Discover <br />more  about our vision of the future of mobility. Learn more about<br /> the  technology in the Audi e-tron along with the charging options,<br /> range calculations and its benefits.</p>
          <button className='btn3 p-3 text-white'>e-tron hub</button>
          <button className='btn4 p-3 ms-1'>#FutureIsAnAttitude</button>
          </div>    
        </div>

        <div>
          <Row>
            <Col md={4} className='col1'>
            <h1 className='hh1 mt-5'>Dealer Locator</h1>
            <button className='btn5 mb-5 p-3 color-white'>Explore More </button>
            </Col>
            <Col md={8} className='col2'>
            <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30765714.04675797!2d61.007166285890456!3d19.730483714349845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1700806042077!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Col>
          </Row>
        </div>

        <div>
          <Row className='mt-5'>
            <Col md={7} className='col4 '>
              <h1 className='hh2 text-white'>Because you expect more from your <br /> Audi than just a drive from A to B. <br /> Download it now, to get more of your <br /> car on your phone.
              <br />
               <span className='fw-bold'> myAudi</span></h1>
               <button className='btn05 p-3 text-white'>myAudi connect</button>
               <button className='btn06 ms-1 p-3 text-white'>Audi Shop</button>
            </Col>
            <Col md={5} className=''>
              <img src="https://www.audi.in/content/dam/nemo/in/3_O-Homepage/122_Audi-App-Post_1690-X-1896px_WC.jpg?imwidth=845" alt="" />
            </Col>
          </Row>
        </div>

        <div>
          <Row className='p-4'>
            <h1 className='mt-5 fw-bold'>Your Audi is waiting</h1>
            <Col className='md={4} mt-3 '>
              <img src="https://www.audi.in/content/dam/nemo/in/3_O-Homepage/TestDrive-883x496.jpg?imwidth=880" alt="" />
              <h5 className='mt-3'>Book a test drive</h5>
              <p className='mt-2 fw-bold'>Click here
              <i class="fa-solid fa-chevron-right ms-2"></i></p>
            </Col>
            <Col className='md={4} mt-3'>
              <img src="https://www.audi.in/content/dam/nemo/in/3_O-Homepage/ApprovedPlus-883X496.jpg?imwidth=880" alt="" />
              <h5 className='mt-3'>Audi Approved Plus</h5>
              <p className='mt-2 fw-bold'>Click here
              <i class="fa-solid fa-chevron-right ms-2"></i></p>
            </Col>
            <Col className='md={4} mt-3'>
              <img src="https://www.audi.in/content/dam/nemo/in/3_O-Homepage/BookServices-833x496.jpg?imwidth=880" alt="" />
              <h5 className='mt-3'>Book Online Service</h5>
              <p className='mt-2 fw-bold'>Click here
              <i class="fa-solid fa-chevron-right ms-2"></i></p>
            </Col>
          </Row>
        </div>

        <div>
        <Row className='p-4'>
            <h1 className='mt-5 fw-bold'>Press Release</h1>
            <Col className='md={4} mt-3 '>
              <img src="https://www.audi.in/content/dam/nemo/in/Downloads/news/1dc7a11d2a48784bfbe60726d47fcb4c8e470e3d.jpeg?imwidth=441" alt=""  style={{width:'100%'}}/>
              <h5 className='mt-3'>Audi India innaugurates country first RE-powered ultra-fast charging station</h5>
              <p className='mt-2 fw-bold'>2023-12-14
              <i class="fa-solid fa-chevron-right ms-2"></i></p>
            </Col>
            <Col className='md={4} mt-3'>
              <img src="https://www.audi.in/content/dam/nemo/in/Downloads/news/Q8%20e-tron.jpg?imwidth=441" alt="" style={{width:'100%',height:'73%'}} />
              <h5 className='mt-3'>Audi India annouces price hike across model ranges </h5>
              <p className='mt-2 fw-bold'>2023-11-27
              <i class="fa-solid fa-chevron-right ms-2"></i></p>
            </Col>
            <Col className='md={4} mt-3'>
              <img src="https://www.audi.in/content/dam/nemo/in/Downloads/S5/Audi%20S5%20Sportback%20Platinum%20Edition_1.jpg?imwidth=441" alt="" style={{width:'100%',height:'73%'}}/>
              <h5 className='mt-3'>Audi India launches Audi S5 Sportsback Plantinum Edition for the festive season</h5>
              <p className='mt-2 fw-bold'>2023-10-16
              <i class="fa-solid fa-chevron-right ms-2"></i></p>
            </Col>
          </Row>
        </div>
    </div>
  )
}

export default Aodi