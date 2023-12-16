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

const Contact = () => {
  return (
    <div>
      
      <section className="page-header" data-stellar-background-ratio="0.1" style={{backgroundPosition: '50% 50%'}}>
  <div className="container">
    <div className="row">
      <div className="col-sm-12 text-center">
        <h3>
           Contact
        </h3>
        <p className="page-breadcrumb">
          <a href="#">Home</a>
          /
          <a href="#">Contact</a>
           
        </p>
      </div>
    </div>
    {/* end .row  */}
  </div>
  {/* end .container  */}
</section>


<section className="section-content-block section-contact-block">
  <div className="container">
    <div className="row">
      <div className="col-sm-6 wow fadeInLeft animated" style={{visibility: 'visible', animationName: 'fadeInLeft'}}>
        <div className="contact-form-block">
          <h2 className="contact-title">Say hello to us</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
          </p>
          <form role="form" action="#" method="post" id="contact-form">
            <div className="form-group">
              <input type="text" className="form-control" id="user_name" name="user_name" placeholder="Name" data-msg="Please Write Your Name" />
            </div>
            <div className="form-group">
              <input type="email" className="form-control" id="user_email" name="user_email" placeholder="Email" data-msg="Please Write Your Valid Email" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" id="email_subject" name="email_subject" placeholder="Subject" data-msg="Please Write Your Message Subject" />
            </div>
            <div className="form-group">
              <textarea className="form-control" rows={5} name="email_message" id="email_message" placeholder="Message" data-msg="Please Write Your Message" defaultValue={""} />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-custom">Send Now</button>
            </div>
          </form>
        </div>
        {/* end .contact-form-block  */}
      </div>
      {/*  end col-sm-6  */}
      <div className="col-sm-6 wow fadeInRight animated" style={{visibility: 'visible', animationName: 'fadeInRight'}}>
        <div className="col-md-12">
          <h2 className="contact-title">Contact us</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
          </p>
        </div>
        <div className="col-md-12">
          <ul className="contact-info">
            <li>
              <span className="icon-container">
                <i className="fa fa-home" />
              </span>
              <address>4-H-9, Indira Gandhi Nagar Jagatpura, Jaipur</address>
            </li>
            <li>
              <span className="icon-container">
                <i className="fa fa-phone" />
              </span>
              <address>
                <a href="#">+91-11- 2981812</a>
              </address>
            </li>
            <li>
              <span className="icon-container">
                <i className="fa fa-envelope" />
              </span>
              <address>
                <a href="mailto:">msntrust2023@gmail.com</a>
              </address>
            </li>
            <li>
            
               
            </li>
          </ul>
        </div>
      </div>
      
      {/*  end col-sm-6  */}
    </div>
    {/* end row  */}
  </div>
  {/*  end .container */}
</section>




    </div>
  )
}

export default Contact
