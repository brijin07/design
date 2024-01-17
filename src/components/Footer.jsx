import React from 'react';
import { Row, Col } from 'react-bootstrap';



const Footer = () => {
  return (
   <footer className=" footer bg-body-tertiary text-center">
  {/* Grid container */}
  


      <Row className="w-100">
          {/*Grid column 1*/}
          <Col xs={12} lg={6} md={12} mb={12} mb-md-0>
            <div className='d-flex justify-content-md-around mt-5 ms-2  w-100'>
                <div>
                    <h6 className="text-uppercase">ONER ACTIVE</h6>
                    <ul className="list-unstyled mb-0">
                      <li>
                        <a className="text-body" href="#!">About us</a>
                      </li>
                      <li>
                        <a className="text-body" href="#!">Careers</a>
                      </li>
                      <li>
                        <a className="text-body" href="#!">Sitemap</a>
                      </li>
                      <li>
                      </li>
                    </ul>
                </div>
                <div>
                    <h6 className="text-uppercase">SERVICE</h6>
                    <ul className="list-unstyled mb-0">
                      <li>
                        <a className="text-body" href="#!">Size Guide</a>
                      </li>
                      <li>
                        <a className="text-body" href="#!">Contact</a>
                      </li>
                      <li>
                        <a className="text-body" href="#!">Shipping</a>
                      </li>
                      <li>
                        <a className="text-body" href="#!">Returns</a>
                      </li>
                    </ul>
                </div>
                <div className='rewards'>
                    <h6 className="text-uppercase">TOP CATEGORIES
</h6>
                    <ul className="list-unstyled mb-0">
                      <li>
                        <a className="text-body" href="#!">Bottoms & Leggings</a>
                      </li>
                      <li>
                        <a className="text-body" href="#!">Sports Bras</a>
                      </li>
                      <li>
                        <a className="text-body" href="#!">Hoodies & Jackets</a>
                      </li>
                      <li>
                        <a className="text-body" href="#!">T-shirts & Tops</a>
                      </li>
                    </ul>
                </div>
                <div>
                    <h6 className="text-uppercase">REWARDS</h6>
                    <ul className="list-unstyled mb-0">
                     <li>
  <a classname="text-body" href="#!"><i className="fa-solid fa-star" style={{color: '#63E6BE'}} />Loyalty Club </a>
</li>

                
                    
                    </ul>
                </div>
            </div>
          </Col>
        
          <Col xs={12} lg={6} md={12} mb={12} mb-md-0>
          <div className='mt-5 ms-5 w-100'>
        <h6 className="text-uppercase">SIGN UP FOR OUR NEWSLETTER</h6>
       <span> <input  type="text" placeholder=' your e-mail'  style={{height:"35px", width:"200px"}} /><button className='btnu'><i class="fa-solid fa-greater-than"></i></button></span>
                <section className="">
      {/* Facebook */}
      <a data-mdb-ripple-init className="btn btn-outline btn-floating " href="#!" role="button"><i className="fab fa-facebook-f" /></a>
      {/* Twitter */}
      <a data-mdb-ripple-init className="btn btn-outline btn-floating " href="#!" role="button"><i className="fab fa-twitter" /></a>
      {/* Google */}
      <a data-mdb-ripple-init className="btn btn-outline btn-floating " href="#!" role="button"><i className="fab fa-google" /></a>
      {/* Instagram */}
      <a data-mdb-ripple-init className="btn btn-outline btn-floating " href="#!" role="button"><i className="fab fa-instagram" /></a>
      {/* Linkedin */}
      <a data-mdb-ripple-init className="btn btn-outline btn-floating " href="#!" role="button"><i className="fab fa-linkedin-in" /></a>
      {/* Github */}
      <a data-mdb-ripple-init className="btn btn-outline btn-floating" href="#!" role="button"><i className="fab fa-github" /></a>
    </section>
          
        </div>
          
          </Col>

          <p className='mt-2'>© 2024 Oner Active | All Rights Reserved.</p>

    
        </Row>
       
    
   
  
 
</footer>

  );
};

export default Footer;
