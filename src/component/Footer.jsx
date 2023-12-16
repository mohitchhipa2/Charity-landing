import React from 'react'
import "./Header.css"

const Footer = () => {
  return (
    <div>
      
      <footer>
  <section className="footer-widget-area footer-widget-area-bg">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-12">
          <div className="footer-widget clearfix">
            <div className="sidebar-widget-wrapper">
              <div className="footer-widget-header clearfix">
                <h3>Pages</h3>
              </div>
              {/*  end .footer-widget-header */}
              <ul className="footer-useful-links">
                <li>
                  <a href="/">
                    <i className="fa fa-angle-double-right fa-footer" />
                     Home
                  </a>
                </li>
                <li>
                  <a href="/About">
                    <i className="fa fa-angle-double-right fa-footer" />
                   About
                  </a>
                </li>
                <li>
                  <a href="/Portfolio">
                    <i className="fa fa-angle-double-right fa-footer" />
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="/Blog">
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
                  <a href="/Faq">
                    <i className="fa fa-angle-double-right fa-footer" />
                    Faq
                  </a>
                </li>
                <li>
                  <a href="/Howitworks">
                    <i className="fa fa-angle-double-right fa-footer" />
                    How it works
                  </a>
                </li>
                <li>
                  <a href="/Terms&condition">
                    <i className="fa fa-angle-double-right fa-footer" />
                    Terms and condition
                  </a>
                </li>
                <li>
                  <a href="/Privacy">
                    <i className="fa fa-angle-double-right fa-footer" />
                   Privacy Policy</a>
                </li>
              </ul>
            </div>
            {/*  end .footer-widget  */}
          </div>
          {/*  end .footer-widget  */}
        </div>
        {/*  end .col-md-4 col-sm-12 */}
        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <div className="footer-widget clearfix">
            <div className="sidebar-widget-wrapper">
              <div className="footer-widget-header clearfix">
                <h3>Contact</h3>
              </div>
              {/*  end .footer-widget-header */}
              <ul className="footer-useful-links">
                <li>
                  <a href="/Contact">
                    <i className="fa fa-angle-double-right fa-footer" />
                   Contact Us
                  </a>
                </li>
                <li>
                  <a href="/Donation">
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
        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <div className="footer-widget">
            <div className="sidebar-widget-wrapper">
              <div className="footer-widget-header clearfix">
                <h3>About</h3>
              </div>
              {/*  end .footer-widget-header */}
              <p>We are a volunteer based organisation and helps disabled and under-privileged children by providing them with funding for equipment and services so they can live a better life.</p>
            </div>
            {/*  end .footer-widget  */}
          </div>
          {/*  end .footer-widget  */}
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
Jagatpura, Jaipur

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
                  <a href="#">support  msntrust2023@gmail.com</a>
                   
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
                <p>
                    Phone <br />
                +91-11- 2981812
                </p>
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
                  <a href="#" className="footer-social-icon">
                    <span className="fa fa-facebook icon" />
                  </a>
                  <a href="#" className="footer-social-icon">
                    <span className="fa fa-twitter icon" />
                  </a>
                  <a href="#" className="footer-social-icon">
                    <span className="fa fa-pinterest icon" />
                  </a>
                  <a href="#" className="footer-social-icon">
                    <span className="fa fa-linkedin icon" />
                  </a>
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
            Copyright © 2023. All right reserved by
            <a href="https://metablocktechnologies.in/" target="_blank" className="color-primary"> MetaBlock Technologies</a>
          </p>
        </div>
        {/* end .col-sm-6  */}
      </div>
      {/* end .row  */}
    </div>
    {/*  end .container  */}
  </section>
  {/*  end .footer-content  */}
</footer>





    </div>
  )
}

export default Footer
