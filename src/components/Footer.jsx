import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Header Section */}
        <div className="footer-header">
          <h2 className="footer-logo">DUBAI MALL</h2>
        </div>

        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-social">
            <h4 className="footer-heading">FOLLOW US</h4>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14-2.825 0-4.643 1.72-4.643 4.805V9.5H8v4h2v9.5h4v-9.5z" />
                </svg>
              </a>
              <a href="#" className="social-icon">
                {/* Custom X logo since Twitter is the bird */}
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="social-icon">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M21.582 6.186a2.686 2.686 0 00-1.884-1.895C17.92 3.84 12 3.84 12 3.84s-5.92 0-7.698.45A2.686 2.686 0 002.418 6.186C1.98 7.965 1.98 12 1.98 12s0 4.035.438 5.814a2.686 2.686 0 001.884 1.895c1.778.45 7.698.45 7.698.45s5.92 0 7.698-.45a2.686 2.686 0 001.884-1.895c.438-1.78.438-5.814.438-5.814s0-4.035-.438-5.814zM9.995 15.422V8.578L15.932 12l-5.937 3.422z" />
                </svg>
              </a>
              <a href="#" className="social-icon">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="footer-newsletter">
            <h4 className="footer-heading">RECEIVE OUR NEWSLETTER</h4>
            <form className="newsletter-form">
              <input type="email" placeholder="Email Address" required />
              <button type="submit">SIGN UP</button>
            </form>
          </div>

          <div className="footer-apps">
            <h4 className="footer-heading">DOWNLOAD THE APP</h4>
            <div className="app-buttons">
              <a href="#" className="app-btn">
                <div className="app-btn-icon">
                   <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M16.365 21.442c-1.341 1.433-2.736 1.455-4.225.048-1.488-1.407-2.91-1.386-4.275.02-1.22 1.259-2.28 1.403-3.085.45-3.83-4.542-5.07-12.008-1.5-16.5 1.54-1.92 3.51-2.43 5.46-1.5 1.63.78 2.87.84 4.54.02 2.23-1.07 4.19-.55 5.56 1.27-3.66 2.08-4.21 6.55-1.18 9.07.6.5 1.28.84 2.01 1.05-1.01 2.92-2.19 4.88-3.3 6.07zm-4.73-19.34c-.16-2.5 1.95-4.48 4.29-4.5.38 2.58-1.98 4.67-4.29 4.5z"/></svg>
                </div>
                <div className="app-btn-text">
                  <span>Available on the</span>
                  <strong>App Store</strong>
                </div>
              </a>
              <a href="#" className="app-btn">
                <div className="app-btn-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a2.49 2.49 0 01-.19-.94V2.754c0-.343.064-.67.189-.94zm1.187.33L15.352 10.44 20.373 5.42 4.796 2.144zM21.1 5.75L16.08 10.77l-1.378 1.378 1.378 1.378 5.02 5.02a2.38 2.38 0 00.55-1.536v-9.72c0-.57-.2-1.1-.55-1.54zM4.796 21.856L20.373 18.58l-5.02-5.02L4.796 21.856z"/></svg>
                </div>
                <div className="app-btn-text">
                  <span>GET IT ON</span>
                  <strong>Google play</strong>
                </div>
              </a>
               <a href="#" className="app-btn app-gallery-btn">
                <div className="app-btn-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="red"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/></svg>
                </div>
                <div className="app-btn-text">
                  <span>EXPLORE IT ON</span>
                  <strong>AppGallery</strong>
                </div>
              </a>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Links Section */}
        <div className="footer-links">
          <div className="link-column">
            <h4 className="footer-heading">VISITOR INFORMATION</h4>
            <ul>
              <li><a href="#">Services</a></li>
              <li><a href="#">Mall Map</a></li>
              <li><a href="#">Emaar Gift Card</a></li>
              <li><a href="#">The Lounge</a></li>
              <li><a href="#">More from Emaar</a></li>
            </ul>
          </div>
          <div className="link-column">
            <h4 className="footer-heading">ABOUT US</h4>
            <ul>
              <li><a href="#">About Dubai Mall</a></li>
              <li><a href="#">About Emaar</a></li>
              <li><a href="#">Media Centre</a></li>
              <li><a href="#">Emaar Malls</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div className="link-column no-heading">
            <h4 className="footer-heading hidden">EXTRA LINKS</h4>
            <ul>
              <li><a href="#">E-Services/Tenants' Portal</a></li>
              <li><a href="#">Leasing Enquiries</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Parking FAQs</a></li>
            </ul>
          </div>
          <div className="link-column contact-column">
            <h4 className="footer-heading">CONTACT US</h4>
            <p>UAE ONLY: 800 DUBAI MALL (800 38224 6255)</p>
            <p><a href="mailto:enquiry@thedubaimall.com">enquiry@thedubaimall.com</a></p>
            <p className="chat-link">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="#25D366" style={{ marginRight: '5px' }}>
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.12-.489-.215-1.636-.604-3.12-1.936-1.144-1.028-1.916-2.296-2.14-2.682-.225-.386-.024-.595.168-.788.172-.172.386-.449.579-.674.193-.224.257-.385.385-.642.128-.256.064-.481-.032-.673-.096-.193-.835-2.016-1.144-2.759-.302-.727-.607-.628-.835-.639-.215-.011-.464-.014-.722-.014-.257 0-.675.097-1.028.482-.353.385-1.35 1.317-1.35 3.213 0 1.895 1.382 3.729 1.575 3.985.193.256 2.714 4.143 6.574 5.811 3.86 1.668 3.86 1.112 4.567 1.047.708-.064 2.249-.918 2.57-1.804.322-.885.322-1.642.225-1.803-.097-.161-.354-.257-.74-.45zM12.031 2C6.495 2 2 6.495 2 12.031c0 1.862.484 3.666 1.405 5.257L2 22l4.864-1.365c1.52.83 3.242 1.267 4.996 1.267 5.535 0 10.03-4.495 10.03-10.03C22.062 6.495 17.566 2 12.031 2z" />
              </svg>
              <a href="#">Chat with Us</a>
            </p>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Bottom Info Section */}
        <div className="footer-bottom-info">
          <div className="emaar-logo-group">
            <span className="emaar-logo">EMAAR</span>
            <a href="#" className="view-entities">View All Group Entities <span className="arrow">▼</span></a>
          </div>
          <p className="developer-info">Emaar Properties PJSC is the Master Developer of Dubai Mall</p>
        </div>
      </div>
        
      {/* Copyright Bar */}
      <div className="footer-copyright">
        <p>©2026 Emaar Malls. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
