import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div>
          <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>About Us</h2>
          <p>"The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life."</p>
        </div>
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Email: NOVOCATALYST@gmail.com</p>
          <p>Phone: </p>7994237967
        </div>
        <div className="footer-section">
          <h2>Follow Us</h2>
          <p>Connect with us on social media:</p>
     
          <div >
          <i className='ff'  class="fa-brands fa-instagram"></i>
         
          </div>

        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer