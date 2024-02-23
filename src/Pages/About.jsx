import React from 'react';
import "../component/Header.css";
import "../../generosity/css/less/layout.less"
import "../../generosity/css/less/reset.less"
import "../../generosity/css/less/mixins.less"
import "../../generosity/css/less/variables.less"
import "../../generosity/css/venobox.css"
import "../../generosity/css/animate.css"
import "../../generosity/css/font-awesome.min.css"
import "../../generosity/css/styles.css"
import { useNavigate } from 'react-router-dom';


const About = () => {
  const navigate=useNavigate()
  return (
    <div>

      <section className="page-header" data-stellar-background-ratio="0.1" style={{ backgroundPosition: '50% 50%' }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h3>
                About
              </h3>
              <p className="page-breadcrumb">
                <a >Home</a>
                / About
              </p>
            </div>
          </div>
          {/* end .row  */}
        </div>
        {/* end .container  */}
      </section>



      <section className="section-content-block">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="section-heading-wrapper no-padding">
                <h2>Our
                  <span>Vision</span>
                </h2>
                <hr />
                <p className="margin-top-20">
                  Maa Shanti Nirmala Charitable Trust has been founded on 16th June 2023 by two founder trustees with the objective of social service to the human beings. The trust has wide spectrum of services such as scholarship to students, financial aid to under priviledged persons, promoting institutions in various sectors, creation of public utility infrastructures and, finally flourishing charity in the society.  The trust is meant to cater the masses with genuine and transparent manner. Citizens are requested to donate the trust and become part of the service to human beings.
                </p>


              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <img style={{ height: "250px" }} src="../../public/4.jpg" alt />
            </div>
          </div>
          {/*  end .row*/}
          <div className="row no-gutter">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="about-highlight-1">
                <i className="fa fa-users" />
                <div className="about-content">
                  <h3>
                    <a href="#">Volunteering</a>
                  </h3>
                  <p className="about-text">We work to unite the geek community into a massive force to opportunity families and communities worldwide.</p>
                </div>
              </div>
            </div>
            {/*  end .col-lg-3 col-md-3 col-sm-12 col-xs-12  */}
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="about-highlight-1 about-featured-block">
                <i className="fa fa-support" />
                <div className="about-content">
                  <h3>
                    <a href="#">Fundraising</a>
                  </h3>
                  <p className="about-text">We work to unite the geek community into a massive force to opportunity families and communities worldwide.</p>
                </div>
              </div>
            </div>
            {/*  end .col-lg-3 col-md-3 col-sm-12 col-xs-12  */}
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="about-highlight-1">
                <i className="fa fa-briefcase" />
                <div className="about-content">
                  <h3>
                    <a href="#">Help &amp; Support</a>
                  </h3>
                  <p className="about-text">We work to unite the geek community into a massive force to opportunity families and communities worldwide.</p>
                </div>
              </div>
            </div>
            {/*  end .col-lg-3 col-md-3 col-sm-12 col-xs-12  */}
          </div>
          {/*  end .row*/}
        </div>
        {/*  end .container  */}
      </section>




      <section className="section-content-block section-counter  section-black-bg-overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <div className="counter-block-1 text-center">
                <span className="counter-icon fa fa-group" />
                <h4>Volunteer</h4>
                <span className="counter">2,019</span>
              </div>
            </div>
            {/*  end col-lg-6 col-md-6 col-sm-6 col-xs-1 */}
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <div className="counter-block-1 text-center">
                <span className="counter-icon fa fa-briefcase" />
                <h4>Projects</h4>
                <span className="counter">5,061</span>
              </div>
            </div>
            {/*  end col-lg-6 col-md-6 col-sm-6 col-xs-1 */}
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <div className="counter-block-1 text-center">
                <span className="counter-icon fa fa-hand-peace-o" />
                <h4>Donors</h4>
                <span className="counter">3,910</span>
              </div>
            </div>
            {/*  end col-lg-6 col-md-6 col-sm-6 col-xs-1 */}
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <div className="counter-block-1 text-center">
                <span className="counter-icon fa fa-trophy" />
                <h4>Awards</h4>
                <span className="counter">1,910</span>
              </div>
            </div>
            {/*  end col-lg-6 col-md-6 col-sm-6 col-xs-1 */}
          </div>
        </div>
        {/*  end .container  */}
      </section>






      <section className="section-content-block">
        <div className="container">
          <div className="row section-heading-wrapper">
            <div className="col-lg-12 col-md-12 col-sm-12 text-left">
              <h2>Our
                <span>Volunteer</span>
              </h2>
              <h4>Volunteer also include community centers and settlement houses that provide integrated services.</h4>
            </div>
            {/* end .col-sm-12  */}
          </div>
          <div className="row wow fadeIn animated" style={{ visibility: 'visible', animationName: 'fadeIn' }}>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

              {/*  end team-layout-1 */}
            </div>
            {/*  end .col-lg-3 col-md-3 col-sm-6 col-xs-12  */}
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="team-layout-1">
                <figure className="team-member">
                  <a href="#" title="JOHN ABRAHAM">
                    <img src="../../public/ceoPhoto.jpg" alt="JOHN ABRAHAM" />
                  </a>
                </figure>
                {/* end. team-member  */}
                <article className="team-info">
                  <h3>
                    Chanchal Kumar
                    <br /> <span> Founder Trustee</span>
                  </h3>
                  <div className="team-social-share text-center clearfix">
                    <a href="#" title="Facebook">
                      <i className="fa fa-facebook rectangle" />
                    </a>
                    <a href="#" title="Facebook">
                      <i className="fa fa-twitter rectangle" />
                    </a>
                    <a href="#" title="Facebook">
                      <i className="fa fa-pinterest rectangle" />
                    </a>
                    <a href="#" title="Facebook">
                      <i className="fa fa-linkedin rectangle" />
                    </a>
                  </div>
                  {/* end .author-social-box  */}
                </article>
              </div>
              {/*  end team-layout-1 */}
            </div>
            {/*  end .col-lg-3 col-md-3 col-sm-6 col-xs-12  */}
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="team-layout-1">
                <figure className="team-member">
                  <a href="#" title="JOHN ABRAHAM">
                    <img src="../../public/3.jpg" alt="JOHN ABRAHAM" />
                  </a>
                </figure>
                {/* end. team-member  */}
                <article className="team-info">
                  <h3>
                    Mala  Saxena
                    <br /> <span> Founder Trustee</span>
                  </h3>
                  <div className="team-social-share text-center clearfix">
                    <a href="#" title="Facebook">
                      <i className="fa fa-facebook rectangle" />
                    </a>
                    <a href="#" title="Facebook">
                      <i className="fa fa-twitter rectangle" />
                    </a>
                    <a href="#" title="Facebook">
                      <i className="fa fa-pinterest rectangle" />
                    </a>
                    <a href="#" title="Facebook">
                      <i className="fa fa-linkedin rectangle" />
                    </a>
                  </div>
                  {/* end .author-social-box  */}
                </article>
              </div>
              {/*  end team-layout-1 */}
            </div>
            {/*  end .col-lg-3 col-md-3 col-sm-6 col-xs-12  */}
          </div>
          {/* end .row  */}
        </div>
        {/* end .container  */}
      </section>


      <section style={{ marginBottom: '10px' }} className="section-content-block section-cta">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="cta-content wow pulse animated" data-wow-iteration={2} data-wow-duration="0.3s" style={{ visibility: 'visible', animationDuration: '0.3s', animationIterationCount: 2, animationName: 'pulse' }}>
                <h4>Awesome voluntary Work
                </h4>
                <h2 >Join with us to provide
                  <br />
                  food for African Hungry People
                </h2>
                <a onClick={() => navigate("/signup")} className="btn btn-custom" >Join With Us</a>
              </div>
              {/* end .cta-content  */}
            </div>
            {/* end .col-md-12 col-sm-12  */}
          </div>
          {/*  end .row */}
        </div>
        {/*  end .container  */}
      </section>







    </div>
  )
}

export default About
