import React from 'react'
import '../App.css'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  const socials = [
    { icon: <FaFacebookF />, link: "#" },
    { icon: <FaTwitter />, link: "#" },
    { icon: <FaInstagram />, link: "#" },
    { icon: <FaYoutube />, link: "#" },
  ];
  return (
    <div className='me-5 ms-5 mt-5 H-100'>

      <div style={{ backgroundColor: '#24286B' }} className='rounded-top-5 p-5'>

        <div className='row text-light'>
          <div className='col-12 col-md-4 mb-4'>
            <h1 className='mb-3 heading'>LOGO</h1>
            <p>Shaping the UAE’s future <br />with precision & passion</p>
          </div>

          <div className='col-6 col-md-2 mb-4'>
            <h5 className='mb-3'>Useful Links</h5>
            <div>
              <div className='mb-2'><a href="" className='text-light text-decoration-none'>Home</a></div>
              <div className='mb-2'><a href="" className='text-light text-decoration-none'>About Us</a></div>
              <div className='mb-2'><a href="" className='text-light text-decoration-none'>Our Services</a></div>
              <div className='mb-2'><a href="" className='text-light text-decoration-none'>Our Projects</a></div>
              <div className='mb-2'><a href="" className='text-light text-decoration-none'>Testimonials</a></div>
            </div>
          </div>

          <div className='col-6 col-md-2 mb-4'>
            <h5 className='mb-3'>Support</h5>
            <div>
              <div className='mb-2'><a href="" className='text-light text-decoration-none'>Privacy policy</a></div>
              <div className='mb-2'><a href="" className='text-light text-decoration-none'>Terms & Conditions</a></div>
              <div className='mb-2'><a href="" className='text-light text-decoration-none'>Contact Us</a></div>
            </div>
          </div>

          <div className='col-12 col-md-4 mb-4'>
            <div className='text-light mb-3'>
              <h5 className='mb-3'>Find Us</h5>
              <a href="https://maps.app.goo.gl/acGMFg34jcmVuTZ87" className='text-light text-decoration-none'>Bright Hurst Contracting LLC <br /> Office No: 1203 , Al Shatha Tower <br />Dubai Internet City, Dubai, UAE <br />P.O. Box: 123456</a>
            </div>
            <div className='mt-3'>
              <h5 className='mb-3'>Social Media Links</h5>
              <div className="d-flex gap-3">
                {socials.map((item, index) => (
                  <a key={index} href={item.link} className="text-light fs-5">
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
        <hr className='text-light ' />
        <div className="d-flex align-items-center justify-content-center">
          <p className="text-light text-center opacity-50 mb-0">
            © {new Date().getFullYear()}
            <a href="/" className="text-light text-decoration-none ms-1">
              Bright Hurst
            </a>. All Rights Reserved.
          </p>
        </div>

      </div>


    </div>
  )
}

export default Footer