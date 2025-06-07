import { Col, Container, Row } from 'react-bootstrap'
import './contactUs.css'

function ContactUs() {
  return (
    <>
        <Container className='concatUs'>
      <Row>
	  <Col>
		<form action="https://formsubmit.co/aleynakurrtt@gmail.com" method="POST">
        <div className="container">
			<h2>İLETİŞİM</h2>
	<div className="row input-container">
			<div className="col-xs-12">
				<div className="styled-input wide">
					<input id="first_name" name="first_name" type="text" required />
					<label htmlFor="first_name">Name</label> 
				</div>
			</div>
			<div className="col-md-6 col-sm-12">
				<div className="styled-input">
					<input type="email" id="email" name="email" required />
					<label htmlFor="email">Email</label> 
				</div>
			</div>
			<div className="col-md-6 col-sm-12">
				<div className="styled-input" >
					<input  type="number" id="number" name="number" required />
					<label  htmlFor="number">Phone Number</label> 
				</div>
			</div>
			<div className="col-xs-12">
				<div className="styled-input wide">
					<textarea id="message"  name="message" required></textarea>
					<label htmlFor="message">Message</label>
				</div>
			</div>
			<div className="col-xs-12 ">
				<button className="btn-lrg submit-btn"  type="submit">Send Message </button>
			</div>
	</div>
    </div>
	</form>
    </Col>
        <Col>
		<div className='all-phone'>
		<div className='phone-number'>
			<img src="/public/whatsapp.svg" alt="whatsapp" />
			<p>+90 530 062 21 21</p>
			<p>+90 553 958 30 31</p>
		</div>
		<div className='phone-number'>
			<img src="/public/telephone.svg" alt="telephone" />
			<p>+90 212 230 80 40</p>
			<p>+90 212 230 80 50</p>
		</div>
		</div>
		<div className='all-phone'>
		<div className='phone-number'>
			<img src="/public/printer.svg" alt="printer" />
			<p>+90 212 230 80 38</p>
		</div>
		<div className='phone-number'>
			<img src="/public/mail.svg" alt="mail" />
			<p>info@tumergroup.com.tr</p>
		</div>
		</div>
		<div>
		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.3090608090447!2d28.809475100000004!3d41.0622365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa59e19ae19cb%3A0x8d3ada755572bf18!2sTumer%20Group!5e0!3m2!1str!2str!4v1741547408788!5m2!1str!2str" width="595" height="250"   loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
		<div className='location'>
			<img src="/location.svg" alt="location" />
			Ziya Gökalp Mah. Mall Of Istanbul AVM.
            No: 7 D Blok. No:4 Başakşehir/İstanbul
			</div>
		</div>
		</Col>

      </Row>
      </Container>
    </>
  )
}

export default ContactUs