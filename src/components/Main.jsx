import React from 'react'
import { Container, Row, Col,  } from 'react-bootstrap';
import Login from './Login';
import Footer from './Footer';


function Main() {
  return (
    <div>
   <Container fluid  className='main11'>
      <Row className='mainn'>
        <Col>
         <img src="https://www.oneractive.com/cdn/shop/files/ONER_LoyaltyClubHeadBanner_desktop_ms_20200825.png?v=1600256838" className='img1' alt="" />
       
         <div className='text'>
            <h2>LOYALTY CLUB</h2>
            <p>Welcome to the Oner Active Loyalty Club.<br/>
              Become a member, collect loyalty points, and gain valuable benefits.</p>

            <button className='btns'>Join Now</button>
            
            <p>
              Already have an account{' '}
              <span>
                <a href="" style={{ color: 'black' }}>
                  Log in
                </a>
              </span>
            </p>
          </div>
          </Col>
      </Row>
      
      <div className="text-center mt-2">
      <h1>HOW IT WORKS</h1>
      <p>Earn Oner Points and redeem them when making purchases, level up your member status to get exclusive perks, and benefit from referring friends.</p>
      
      <Row className="main1 mt-5">
        
        <Col xs={6} sm={6} md={3}>
          <img src="https://cdn.shopify.com/s/files/1/0429/6120/7445/files/loyalty_works_01.svg?v=1600248639" alt="" className='add' />
          <h6 className='fw-bolder'>Step 1</h6>
          <p>Create an account</p>
        </Col>
        
        <Col xs={6} sm={6} md={3}>
        <img src="https://cdn.shopify.com/s/files/1/0429/6120/7445/files/loyalty_works_02.svg?v=1600248639" alt="" className='add' />
          <h6 className='fw-bolder'>Step 2</h6>
          <p>Earn points for every $ spent</p>
        </Col>
        
        <Col xs={6} sm={6} md={3}>
        <img src="https://cdn.shopify.com/s/files/1/0429/6120/7445/files/loyalty_works_03.svg?v=1600248639" alt="" className='add' />

          <h6 className='fw-bolder'>Step 3</h6>
          <p>Level up for exclusive perks</p>
        </Col>
        
        <Col xs={6} sm={6} md={3}>
        <img src="https://cdn.shopify.com/s/files/1/0429/6120/7445/files/loyalty_works_04.svg?v=1600248639" alt="" className='add' />

          <h6 className='fw-bolder'>Step 4</h6>
          <p>Earn points for every $ spent</p>
        </Col>
        <Col xs={6} sm={6} md={6}>



        <Login/>
        </Col>

        <Col sm={12} md={12}>

        <h1 className='mt-5'>HOW TO EARN POINTS</h1>

        </Col>

        <Col xs={6} sm={6} md={3} className='mt-5'>
          <img src="https://cdn.shopify.com/s/files/1/0429/6120/7445/files/loyalty_earn_01.svg?v=1600248639" alt="" className='add' />
          <h6 className='fw-bolder'>+350 points</h6>
          <p>Create an account</p>
        </Col>
        
        <Col xs={6}  sm={6} md={3} className='mt-5'>
        <img src="https://cdn.shopify.com/s/files/1/0429/6120/7445/files/loyalty_earn_02.svg?v=1600248639" alt="" className='add' />
          <h6 className='fw-bolder'>up to 150 points</h6>
          <p>Earn points for every $ spent</p>
        </Col>
        
        <Col xs={6}  sm={6} md={3} className='mt-5'>
        <img src="https://cdn.shopify.com/s/files/1/0429/6120/7445/files/loyalty_earn_03.svg?v=1600248639" alt="" className='add' />

          <h6 className='fw-bolder'>+750 Points</h6>
          <p>Level up for exclusive perks</p>
        </Col>
        
        <Col xs={6} sm={6} md={3} className='mt-5'>
        <img src="	https://cdn.shopify.com/s/files/1/0429/6120/7445/files/loyalty_earn_04.svg?v=1600248639" alt="" className='add' />

          <h6 className='fw-bolder'>+10,000 Points</h6>
          <p>Earn points for every $ spent</p>
        </Col>

        <Col xs={6} sm={6} md={4}>
        <img src="	https://cdn.shopify.com/s/files/1/0429/6120/7445/files/loyalty_earn_05.svg?v=1600248639" alt="" className='add' />

          <h6 className='fw-bolder'>+100 Points</h6>
          <p>Like us on Facebook

</p>
        </Col>
        <Col xs={6} sm={6} md={4}>
        <img src="	https://cdn.shopify.com/s/files/1/0429/6120/7445/files/loyalty_earn_06.svg?v=1600248639
" alt="" className='add' />

          <h6 className='fw-bolder'>+100 Points</h6>
          <p>Follow us on Instagram

</p>
        </Col>
        <Col xs={6} sm={6} md={4}>
        <img src="		https://cdn.shopify.com/s/files/1/0429/6120/7445/files/loyalty_earn_07.svg?v=1600248639" alt="" className='add' />

          <h6 className='fw-bolder'>+100 Points</h6>
          <p>Follow us on Twitter</p>
        </Col>

        <Col xs={12} sm={12} md={12}>



<Login/>
</Col>

        <Col sm={12} md={12}>

        <h1 className='mt-5'>REFER FRIENDS FOR UP TO $50 OFF.</h1>

        </Col>

        <Col xs={6} sm={6} md={3} className='mt-5'>
        <img src="	https://cdn.shopify.com/s/files/1/0429/6120/7445/files/GiftCard_COM_5.png?v=1600256730" alt="" className='addo' />

          <h6 className='fw-bolder'>1 FRIEND</h6>
          <p>Create an account</p>
        </Col>
        
        <Col xs={6}  sm={6} md={3} className='mt-5'>
        <img src="https://cdn.shopify.com/s/files/1/0429/6120/7445/files/GiftCard_COM_15.png?v=1600256730" alt="" className='addo' />

          <h6 className='fw-bolder'>3 FRIENDS</h6>
          <p>Earn points for every $ spent</p>
        </Col>
        
        <Col xs={6}  sm={6} md={3} className='mt-5'>
        <img src="	https://cdn.shopify.com/s/files/1/0429/6120/7445/files/GiftCard_COM_15.png?v=1600256730" alt="" className='addo' />

          <h6 className='fw-bolder'>5 FRIENDS</h6>
          <p>Level up for exclusive perks</p>
        </Col>
        
        <Col xs={6} sm={6} md={3} className='mt-5'>
        <img src="https://cdn.shopify.com/s/files/1/0429/6120/7445/files/GiftCard_COM_50.png?v=1600256730" alt="" className='addo' />

          <h6 className='fw-bolder'>10 FRIENDS</h6>
          <p>Earn points for every $ spent</p>
        </Col>

        
        <Col xs={6} sm={6} md={6}>



<Login/>
</Col>
<Container></Container>
<Row>
<Col sm={12} md={12}>
<h4 className='mt-5 '>FAQ - GENERAL</h4>
<h5 className='text-start'>Q: What is the Oner Active Loyalty member club?

</h5>
<p className='text-start'>A: It is our way of saying “thank you” for being a loyal customer. Earn points (Oner Points) and redeem when making purchases, level up to get exclusive perks, or benefit from referring friends.</p>

<h5 className='text-start'>Q: How to become a Loyalty club member?

</h5>
<p className='text-start'>A: It is our way of saying “thank you” for being a loyal customer. Earn points (Oner Points) and redeem when making purchases, level up to get exclusive perks, or benefit from referring friends.</p>


</Col>
<Col sm={12} md={12} >
  
<h4 className='mt-5 '>FAQ - ONER POINTS
</h4>
<h5 className='text-start'>Q: What are Oner Points?

</h5>
<p className='text-start'>A: It is our way of saying “thank you” for being a loyal customer. Earn points (Oner Points) and redeem when making purchases, level up to get exclusive perks, or benefit from referring friends.</p>

<h5 className='text-start'>Q: How to earn Oner Points?



</h5>
<p className='text-start'>A: It is our way of saying “thank you” for being a loyal customer. Earn points (Oner Points) and redeem when making purchases, level up to get exclusive perks, or benefit from referring friends.</p>

<h5 className='text-start'>Q: How to earn Oner Points?



</h5>
<p className='text-start'>A: It is our way of saying “thank you” for being a loyal customer. Earn points (Oner Points) and redeem when making purchases, level up to get exclusive perks, or benefit from referring friends.</p>

<h5 className='text-start'>Q: How long are Oner Points valid for?





</h5>
<p className='text-start'>A: It is our way of saying “thank you” for being a loyal customer. Earn points (Oner Points) and redeem when making purchases, level up to get exclusive perks, or benefit from referring friends.</p>

<h5 className='text-start'>Q: How to earn Oner Points?



</h5>
<p className='text-start'>A: It is our way of saying “thank you” for being a loyal customer. Earn points (Oner Points) and redeem when making purchases, level up to get exclusive perks, or benefit from referring friends.</p>


</Col>

       

  <Col sm={12} md={12}>
  <h4 className='mt-5 '>FAQ - MEMBER STATUS</h4>
  <h5 className='text-start'>Q: How can I level up?
  
  
  
  </h5>
  <p className='text-start'>A: It is our way of saying “thank you” for being a loyal customer. Earn points (Oner Points) and redeem when making purchases, level up to get exclusive perks, or benefit from referring friends.</p>
  
  <h5 className='text-start'>How long is my membership status valid for?
  
  </h5>
  <p className='text-start'>A: It is our way of saying “thank you” for being a loyal customer. Earn points (Oner Points) and redeem when making purchases, level up to get exclusive perks, or benefit from referring friends.</p>
  
  
  </Col>


<Col sm={12} md={12}>
<h4 className='mt-5 '>FAQ - REFER A FRIEND</h4>
<h5 className='text-start'>Q: How can I level up?



</h5>
<p className='text-start'>A: It is our way of saying “thank you” for being a loyal customer. Earn points (Oner Points) and redeem when making purchases, level up to get exclusive perks, or benefit from referring friends.</p>

<h5 className='text-start'>How long is my membership status valid for?

</h5>
<p className='text-start'>A: It is our way of saying “thank you” for being a loyal customer. Earn points (Oner Points) and redeem when making purchases, level up to get exclusive perks, or benefit from referring friends.</p>


</Col>
</Row>
<Row className='mainn'>
        <Col>
         <img src="https://www.oneractive.com/cdn/shop/files/ONER_LoyaltyClubBanner_mobile_ms_20200825.png?v=1600256773" className='img1' alt="" />
       
         <div className='text'>
            <h2>IT'S YOUR TURN!</h2>
            <p>Join today and collect loyalty points to gain valuable benefits
              </p>            
           <Login/>
          </div>
          </Col>
      </Row>

      <Footer/>

      </Row>

      

     
    </div>

    
    </Container>
   

      



    
       
    </div>
  )
}

export default Main