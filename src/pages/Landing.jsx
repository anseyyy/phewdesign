import React from 'react'
import { Col, Row } from 'react-bootstrap'
import '../App.css'
import './Landing.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";




function Landing() {
  return (
    <div>
      {/* Landing Section */}
      <div className="hero-section d-flex align-items-end text-center">
        <div className="container pb-5">

          <h1 className="hero-title text-light mb-3">
            Shaping the UAE’s future <br />
            with precision & passion
          </h1>

          <p className="hero-desc text-light mb-4">
            Bright Hurst Contracting LLC delivers expert interior fit-out, MEP,
            and civil works across the UAE with a focus on quality,
            innovation, and integrity.
          </p>

          <button className="btn btn-light text-black rounded-5 hero-btn">
            Get A Quote
          </button>

        </div>
      </div>




      {/* About Us */}
      <div className="section-wrapper">

        <a href="#about" className="text-decoration-none text-dark">
          • About Us
        </a>

        <div className="mt-4">
          <h1 className="section-heading text-dark">
            Building Excellence, Delivering Trust
          </h1>

          {/* Layer 1*/}
          <div className="mt-5 mb-5">
            <Row>

              <Col lg={4} md={6}>
                <p className="section-para">
                  Bright Hurst Contracting LLC is a leading interior fit-out,
                  electro-mechanical, and civil contracting company based in the UAE.
                  With a strong commitment to quality, innovation, and integrity,
                  we bring client visions to life through expert craftsmanship.
                </p>
              </Col>

              <Col lg={4} md={6}>
                <div className="project-card">
                  <img src="./images/worker.jpg" alt="worker" />
                </div>
              </Col>

              <Col lg={4} md={12} className="d-flex flex-column gap-3">
                <div className="p-4 text-card">
                  <h5>MISSION</h5>
                  <p>
                    To deliver premium-quality construction and interior solutions
                    with precision and professionalism.
                  </p>
                </div>

                <div className="p-4 text-card">
                  <h5>VISION</h5>
                  <p>
                    To be one of the most trusted and respected contracting companies
                    in the UAE.
                  </p>
                </div>
              </Col>

            </Row>
          </div>

          {/*  Layer 2  */}
          <div className="mt-5">
            <Row className="align-items-stretch">

              {/* LEFT */}
              <Col lg={4} md={6} className="d-flex flex-column gap-3 gap-lg-4 mb-4 mb-lg-0">

                <div className="text-light d-flex align-items-end feature-box flex-fill rounded-3" style={{ backgroundColor: "#24286B" }}>
                  <h1>Why <br /> Choose Us!</h1>
                </div>

                <div className="text-card feature-box flex-fill d-flex flex-column justify-content-center">
                  <div>
                    <img src="./images/expe.png" width="50" height="50" alt="" />
                    <p className="fw-bold mt-3">End-to-End Expertise</p>
                    <p className="mb-0">
                      From interior fit-outs to MEP and civil works, we offer fully
                      integrated solutions under one roof.
                    </p>
                  </div>
                </div>

              </Col>

              {/* slide show using carousel */}
              <Col lg={4} md={12} className="d-flex justify-content-center mb-4 mb-lg-0">
                <div id="workerCarousel" className="carousel slide carousel-fade h-100" data-bs-ride="carousel" data-bs-interval="2000">
                  <div className="carousel-inner h-100 overflow-hidden rounded-3">

                    <div className="carousel-item active h-100">
                      <img src="./images/worker1.jpg" className="worker-img" alt="" />
                    </div>

                    <div className="carousel-item h-100">
                      <img src="./images/worker.jpg" className="worker-img" alt="" />
                    </div>

                    <div className="carousel-item h-100">
                      <img src="./images/chair.jpg" className="worker-img" alt="" />
                    </div>

                  </div>
                </div>
              </Col>

              {/* RIGHT */}
              <Col lg={4} md={6} className="d-flex flex-column gap-3 gap-lg-4">

                <div className="text-card feature-box flex-fill d-flex flex-column justify-content-center">
                  <div>
                    <img src="./images/people.png" width="50" height="50" alt="" />
                    <p className="fw-bold mt-3">Client-Centric Approach</p>
                    <p className="mb-0">
                      Every project is customized to align with your vision.
                    </p>
                  </div>
                </div>

                <div className="text-card feature-box flex-fill d-flex flex-column justify-content-center">
                  <div>
                    <img src="./images/tick.png" width="50" height="50" alt="" />
                    <p className="fw-bold mt-3">Uncompromising Quality</p>
                    <p className="mb-0">
                      Premium materials and proven techniques ensure durability.
                    </p>
                  </div>
                </div>

              </Col>

            </Row>
          </div>

        </div>
      </div>





      {/*  Our Project */}
      <div style={{ minHeight: '100vh', height: 'auto' }}>
        <div className="py-5 project-section-bg">
          <div className="mx-3 mx-md-4 mx-lg-5 px-lg-4">


            <a href="#Project" className="text-decoration-none text-light" style={{ opacity: 0.6, fontSize: "14px" }}>
              • Our Projects
            </a>


            <div className="text-light d-flex flex-column flex-lg-row gap-4 gap-lg-5 mt-4 mt-lg-5" >

              {/* LEFT */}
              <div className="flex-fill" style={{ flex: 1 }}>

                <h1 style={{ fontWeight: "500", lineHeight: "1.3" }}>
                  Milestones That Define <br className="d-none d-lg-block" />
                  Our Journey of Excellence
                </h1>

                {/* Image  */}
                <div className='project-card mt-4 mt-lg-5' style={{ height: "420px", width: "100%", backgroundImage: "url(/images/chair.jpg)", backgroundSize: "cover", backgroundPosition: "center", position: "relative" }} >

                  <div className='p-3' style={{ position: "absolute", bottom: "20px", left: "20px", color: "white", zIndex: 2 }}>
                    <p className='fw-bold mb-0'>Cube Studio</p>
                    <p className='mb-0'>UAE - Grand Mosque</p>
                  </div>

                </div>

              </div>

              {/* RIGHT */}
              <div className="flex-fill mt-3 mt-lg-0" style={{ flex: 1 }}>

                <p style={{ maxWidth: "500px", opacity: 0.8, lineHeight: "1.7" }}>
                  Each completed project reflects our commitment to quality, innovation,
                  and client satisfaction. These milestones showcase our expertise in
                  delivering impactful solutions across interior fit-out, MEP, and civil
                  contracting.
                </p>

                {/* Image*/}
                <div className='project-card mt-4 mt-lg-5' style={{ height: "420px", width: "100%", backgroundImage: "url(/images/building.jpg)", backgroundSize: "cover", backgroundPosition: "center", position: "relative" }} >

                  <div className='p-3' style={{ position: "absolute", bottom: "20px", left: "20px", color: "white", zIndex: 2 }}>
                    <p className='fw-bold mb-0'>Al Marina Tower</p>
                    <p className='mb-0'>UAE - Al Ain</p>

                  </div>
                </div>


              </div>

            </div>
          </div>
        </div>
      </div>





      {/*  Testimonials */}
      <div className='m-lg-5 p-lg-5 m-3 p-3'>
        <a href="#testimonials" className='text-decoration-none text-dark opacity-25'>• Testimonials</a>
        <div>
          <h1 className='text-dark mt-4 mt-lg-5'>Voices of Trust That Reflect Our <br className="d-none d-lg-block" /> Commitment and Craftsmanship</h1>

          <div>
            <Row className='mt-4 mt-lg-5 d-flex align-items-stretch'>

              {/*  card1 */}
              <Col lg={4} md={12} className="d-flex flex-column gap-3 mb-4 mb-lg-0 align-items-center align-items-lg-start">
                <div className="p-4 p-md-5 mt-lg-5 testimonial-card w-100" style={{ maxWidth: "412px" }}>


                  <div className="quote-icon">❝</div>


                  <p className="testimonial-text">
                    "We partnered with Bright Hurst for a large-scale commercial project involving
                    MEP and civil works. Their professionalism, technical expertise, and timely
                    execution made them a reliable choice. They handled complex challenges with
                    ease and efficiency."
                  </p>

                  <hr />

                  <div className="d-flex gap-3 mt-1">
                    <img src="./images/client1.jpg" alt="" className="client-img flex-shrink-0" />
                    <div>
                      <p className="fw-bold mb-0">Mohammed Khalid,</p>
                      <p className="mb-0">Project Manager, GulfTech Engineering</p>
                    </div>
                  </div>

                </div>
              </Col>


              {/*  card2 */}
              <Col lg={4} md={12} className="d-flex flex-column gap-3 mb-4 mb-lg-0 align-items-center align-items-lg-start">
                <div className="p-4 p-md-5 testimonial-card w-100" style={{ maxWidth: "412px" }}>


                  <div className="quote-icon">❝</div>

                  <p className="testimonial-text">
                    "Bright Hurst exceeded our expectations in every aspect of the project.
                    Their interior fit-out work was precise, elegant, and truly reflected our
                    vision. The team maintained clear communication and delivered on time
                    without compromising on quality."
                  </p>

                  <hr />

                  <div className="d-flex gap-3 mt-1">
                    <img src="./images/client2.jpg" alt="" className="client-img flex-shrink-0" />
                    <div>
                      <p className="fw-bold mb-0">Aisha Rahman,</p>
                      <p className="mb-0">Managing Director, Al Noor</p>
                    </div>
                  </div>

                </div>

                {/* left & right Button */}

                <div className='d-flex justify-content-center mt-3 mt-lg-5 w-100' style={{ maxWidth: "412px" }}>

                  <button style={{ borderRadius: "50%", width: "50px", height: "50px", borderColor: "#24286B", backgroundColor: "#fff", color: "#24286B" }} className='btn btn-outline-dark me-5'>
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </button>

                  <button style={{ borderRadius: "50%", width: "50px", height: "50px", borderColor: "#24286B", backgroundColor: "#fff", color: "#24286B" }} className='btn btn-outline-dark me-5'>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>

                </div>

              </Col>


              {/* card3 */}
              <Col lg={4} md={12} className="d-flex flex-column gap-3 mb-4 mb-lg-0 align-items-center align-items-lg-start">
                <div className="p-4 p-md-5 mt-lg-5 testimonial-card w-100" style={{ maxWidth: "412px" }}>


                  <div className="quote-icon">❝</div>

                  <p className="testimonial-text">
                    "From start to finish, Bright Hurst delivered a seamless experience.
                    Their attention to detail and commitment to quality craftsmanship made
                    our residential project stand out. Highly recommended for anyone looking
                    for trusted construction partners in the UAE."
                  </p>

                  <hr />

                  <div className="d-flex gap-3 mt-1">
                    <img src="./images/client3.jpg" alt="" className="client-img flex-shrink-0" />
                    <div>
                      <p className="fw-bold mb-0">Sara Al Farsi,</p>
                      <p className="mb-0">Homeowner, Jumeirah Dubai</p>
                    </div>
                  </div>

                </div>
              </Col>


            </Row>
          </div>


        </div>
      </div>




      {/*  form */}
      <div className='m-lg-5 p-lg-5 m-3 p-3'>
        <a href="#contactus" className='text-decoration-none text-dark opacity-25'>• Contact Us</a>
        <div className='mt-5'>
          <h1 className='text-dark'>Connect with Bright Hurst</h1>

          <div className='p-lg-5 p-0 mt-4'>
            <div style={{ backgroundColor: '#F5F5F5' }} className='d-flex flex-column flex-lg-row rounded-3'>
              {/*  form part 1 */}

              <div className='p-md-5 p-4 m-lg-5 m-3 rounded-3 text-light w-100 flex-fill' style={{ backgroundColor: '#24286B', backgroundImage: 'linear-gradient(to top, #01098B 0%, #01098B 100%)' }}>
                <h1 className='mb-5'> We’re Just a <br /> Message Away</h1>

                <div className='my-4 text-light d-flex gap-4'>
                  <div> <i className="fa fa-phone" aria-hidden="true"></i> </div>
                  <div>
                    <p>Call : <br />
                      +971 XXXXXXXXX <br />
                      +971 XXXXXXXXX</p>
                  </div>
                </div>


                <div className='my-4 text-light d-flex gap-4'>
                  <div> <i className="fa fa-envelope-o"></i> </div>
                  <div>
                    <p>Mail : <br />
                      brighthurst123@gmail.com</p>
                  </div>
                </div>


                <div className='my-4 text-light d-flex gap-4'>
                  <div> <i className="fa fa-id-card-o"></i> </div>
                  <div>
                    <p>Head Office : <br />
                      Bright Hurst Contracting LLC<br />Office No: 1203, Al Shatha Tower<br />Dubai Internet City, Dubai, UAE<br />P.O. Box: 123456</p>
                  </div>
                </div>


              </div>


              {/*  form part 2 */}
              <div className='p-md-5 p-4 m-lg-5 m-3 rounded w-100 flex-fill' style={{ backgroundColor: '#F5F5F5', height: '100%' }}>
                <form action="" >


                  <div className="mb-3 d-flex flex-column flex-md-row gap-3">
                    <div className="w-100">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input type="text" className="form-control" style={{ backgroundColor: '#F5F5F5' }} id="name" placeholder="Name" />
                    </div>
                    <div className="w-100">
                      <label htmlFor="email" className="form-label">E mail ID</label>
                      <input type="email" className="form-control" style={{ backgroundColor: '#F5F5F5' }} id="email" placeholder="E mail ID" />
                    </div>
                  </div>



                  <div className='mb-3'>
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input type="text" className="form-control " style={{ backgroundColor: '#F5F5F5' }} id="subject" placeholder='Subject' />
                  </div>
                  <div className='mb-3'>
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control  " style={{ backgroundColor: '#F5F5F5' }} id="message" rows="10" placeholder='Message'></textarea>
                  </div>
                  <div className='d-flex justify-content-end'><button type="submit" className="btn rounded-5 text-light" style={{ backgroundColor: '#24286B' }}>Send Message</button></div>
                </form>
              </div>

            </div>


          </div>

        </div>

      </div>





      {/*  map */}
      <div className="map-responsive">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d260295.3021266677!2d55.16003746829559!3d24.8915416843505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1771499117349!5m2!1sen!2sin"
          allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Google Maps Embed"></iframe>
      </div>


    </div>
  )
}

export default Landing