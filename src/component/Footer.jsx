import React from 'react'
import "./Header.css"
import { useNavigate } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";

const Footer = (props) => {
  const navigate = useNavigate()
  return (
    <div>

      <footer onClick={window.scrollTo(0, 0)}>
        <section className="footer-widget-area footer-widget-area-bg">
          <div className="container">
            <div className="row">
              <div className='footer-other'>
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <div className="footer-widget clearfix">
                    <div className="sidebar-widget-wrapper">
                      <div className="footer-widget-header clearfix">
                        <h3>Pages</h3>
                      </div>
                      {/*  end .footer-widget-header */}
                      <ul className="footer-useful-links">
                        <li>
                          <a onClick={() => navigate('/')}>
                            <i className="fa fa-angle-double-right fa-footer" />
                            Home
                          </a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/About')} >
                            <i className="fa fa-angle-double-right fa-footer" />
                            About
                          </a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/Portfolio')} >
                            <i className="fa fa-angle-double-right fa-footer" />
                            Portfolio
                          </a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/Blog')} >
                            <i className="fa fa-angle-double-right fa-footer" />
                            Blog
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/*  end .footer-widget  */}
                  </div>
                  {/*  end .footer-widget  */}
                </div>
                {/*  end .col-md-3 col-sm-6 */}
                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                  <div className="footer-widget clearfix">
                    <div className="sidebar-widget-wrapper">
                      <div className="footer-widget-header clearfix">
                        <h3>Others</h3>
                      </div>
                      {/*  end .footer-widget-header */}
                      <ul className="footer-useful-links">
                        <li>
                          <a onClick={() => navigate('/Faq')}>
                            <i className="fa fa-angle-double-right fa-footer" />
                            Faq
                          </a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/Howitworks')} >
                            <i className="fa fa-angle-double-right fa-footer" />
                            How it works
                          </a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/Terms&condition')}>
                            <i className="fa fa-angle-double-right fa-footer" />
                            Terms and condition
                          </a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/Privacy')}>
                            <i className="fa fa-angle-double-right fa-footer" />
                            Privacy Policy</a>
                        </li>
                      </ul>
                    </div>
                    {/*  end .footer-widget  */}
                  </div>
                  {/*  end .footer-widget  */}
                </div>
              </div>
              {/*  end .col-md-4 col-sm-12 */}
              <div className='contactus'>
                <div className=" col-lg-3 col-md-3 col-sm-12 col-xs-12">
                  <div className="footer-widget clearfix">
                    <div className="sidebar-widget-wrapper">
                      <div className="footer-widget-header clearfix">
                        <h3>Contact</h3>
                      </div>
                      {/*  end .footer-widget-header */}
                      <ul className="footer-useful-links">
                        <li>
                          <a onClick={() => navigate('/Contact')}>
                            <i className="fa fa-angle-double-right fa-footer" />
                            Contact Us
                          </a>
                        </li>
                        <li>
                          <a onClick={() => navigate('/Donation')}>
                            <i className="fa fa-angle-double-right fa-footer" />
                            Donate Now
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/*  end .footer-widget  */}
                  </div>
                  {/*  end .footer-widget  */}
                </div>
                {/*  end .col-md-4 col-sm-12 */}
                <div className=" col-lg-3 col-md-3 col-sm-12 col-xs-12">
                  <div className="footer-widget">
                    <div className="sidebar-widget-wrapper">
                      <div className="footer-widget-header clearfix">
                        <h3>Donate Here</h3>
                      </div>
                      {/*  end .footer-widget-header */}
                      <img className='scanner' src="../../public/Scanner.jpg" alt="" />
                    </div>
                    <div style={{ color: "white" }}>
                      UPI ID: maashanti8309@sbi
                    </div>
                    {/*  end .footer-widget  */}
                  </div>
                  {/*  end .footer-widget  */}
                </div>
              </div>
              {/*  end .col-md-4 col-sm-12 */}
            </div>
            {/* end row  */}
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="footer-widget">
                  <div className="sidebar-widget-wrapper">
                    <div className="textwidget contact-us">
                      <span className="fa fa-location-arrow" />
                      <p>
                        4-H-9, Indira Gandhi Nagar
                        Jagatpura, Jaipur , 302017

                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="footer-widget">
                  <div className="sidebar-widget-wrapper">
                    <div className="textwidget contact-us">
                      <span className="fa fa-envelope-o" />
                      <p>
                        <a href="mailto:msntrust2023@gmail.com">support  msntrust2023@gmail.com</a>

                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="footer-widget">
                  <div className="sidebar-widget-wrapper">
                    <div className="textwidget contact-us">
                      <span className="fa fa-phone" />
                      <a href='tel:+919829570672'>
                        &nbsp;
                        +919829570672
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="footer-widget">
                  <div className="sidebar-widget-wrapper">
                    <div className="textwidget contact-us">
                      <span className="fa fa-mail-forward" />
                      <p>
                        Spreads The Words
                        <br />
                        <p style={{ display: 'flex', alignItems: "center" }}>
                          <a href='https://www.facebook.com/MaaShantiNirmalaCharitableTrust' className="footer-social-icon">
                            <span className="fa fa-facebook icon" />
                          </a>
                          <a className="footer-social-icon" href='https://twitter.com/MSNCTrust' >
                            <i className="fa-brands fa-x-twitter"></i>
                          </a>
                          <a style={{ marginLeft: "7px" }} href="https://www.youtube.com/@MaaShantiNirmalaCharitable">
                            <i class="fa-brands fa-youtube"></i>
                          </a>

                        </p>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end .container  */}
        </section>
        {/*  end .footer-widget-area  */}
        {/*FOOTER CONTENT  */}
        <section className="footer-contents">
          <div className="container">
            <div className="row clearfix">
              <div className="col-md-12 col-sm-12 text-center">
                <p className="copyright-text">
                  Copyright © 2024. All right reserved by
                  <a href="https://metablocktechnologies.in/" target="_blank" className="color-primary"> MetaBlock Technologies</a>
                </p>
              </div>
              {/* end .col-sm-6  */}
            </div>
            {/* end .row  */}
          </div>
          {props.outlet}
          {/*  end .container  */}
        </section>
        {/*  end .footer-content  */}
      </footer>





    </div>
  )
}

export default Footer
