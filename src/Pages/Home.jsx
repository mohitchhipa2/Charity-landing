import React from 'react';
// import "../component/Header.css";
import "../../generosity/css/less/layout.less"
import "../../generosity/css/less/reset.less"
import "../../generosity/css/less/mixins.less"
import "../../generosity/css/less/variables.less"
import "../../generosity/css/venobox.css"
import "../../generosity/css/animate.css"
import "../../generosity/css/font-awesome.min.css"
import "../../generosity/css/styles.css"
import { useNavigate } from 'react-router-dom';



const Home = () => {


    const navigate = useNavigate()
    return (
        <div>
            <section className="section-banner"
                data-bg_color="#000000" data-bg_opacity="0.1" data-bg_color_2="#000000" data-bg_opacity_2="0.7" style={{ background: 'linear-gradient( rgba(0,0,0,0.1),  rgba(0,0,0,0.7) ), url("public/6.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'repeat', backgroundAttachment: 'inherit', backgroundSize: 'cover', overflow: 'hidden' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12" >
                            <div className="banner-content wow fadeInUp animated" style={{ visibility: 'visible', animationName: 'fadeInUp', }}>
                                <h2>
                                    YOUR
                                    <span>SMALL</span>
                                    <br />DONATION CAN
                                    <br />BRING
                                    <span>HUGE</span>
                                    SMILE
                                </h2>
                                <h3>
                                    Since 2002, we provide children's legal rights for safe future.
                                    <br />
                                    We ensure financial supports over 10k orphans and their families.
                                </h3>
                                <div className="slider-button">

                                    <a onClick={() => navigate('/Donation')} className="btn btn-custom-inverse">Donate Now</a>
                                </div>
                            </div>
                        </div>
                        {/* end .col-md-12  */}
                    </div>
                </div>
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
                            <img style={{ height: '450px', width: '750px' }} src="../../public/cherity-image2.jpg" alt />
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

            <section className="section-content-block section-cta">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 text-center">
                            <div className="cta-content-1 wow pulse animated" data-wow-iteration={2} data-wow-duration="0.3s" style={{
                                visibility: 'visible', animationDuration: '0.3s', animationIterationCount: 2, animationName: 'pulse'
                            }}>

                                <iframe width="100%" height="600" src="https://www.youtube-nocookie.com/embed/Ga28sZ7yupw?si=_peqdKRVG_-nSfpS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                <h2>Awesome voluntary Work
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




            <section className="section-content-block section-secondary-bg">
                <div className="container wow fadeIn animated" style={{ visibility: 'visible', animationName: 'fadeIn' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }} className="row">
                        <div className="col-md-7">
                            <figure className="urget-cause-image">
                                <img src="../../public/education1.jpg" alt="activity" />
                            </figure>
                        </div>
                        {/* end .col-sm-12  */}
                        <div className="col-md-5">
                            <div className="urgent-cause">
                                <div className="cause-content">
                                    <div className="cause-text">
                                        <h4>URGENT
                                            <span>CAUSE</span>
                                        </h4>
                                        <hr />
                                        <h2 className="margin-top-11">
                                            <a href="#">Ensure education for all</a>
                                        </h2>
                                        <p>
                                            We work to unite the geek community into a massive force to opportunity families and communities worldwide.We work to unite the geek community into a massive force to opportunity families and communities worldwide.
                                        </p>
                                    </div>
                                    {/*  end .cause-text  */}
                                    <div className="row">

                                        <div className="col-sm-12 clearfix">

                                            <a className="btn btn-theme pull-right" onClick={() => navigate('/Donation')}>Donate Now</a>
                                        </div>
                                    </div>
                                </div>
                                {/* end .cause-content  */}
                            </div>
                            {/* end .cause-wrapper  */}
                        </div>
                        {/* end .col-md-8  */}
                    </div>
                    {/* end .row  */}
                </div>
                {/* end .container  */}
            </section>






            <section className="section-content-block">
                <div className="container">
                    <div className="row section-heading-wrapper">
                        <div className="col-md-12 col-sm-12 text-center">
                            <h2>Our
                                <span>Causes</span>
                            </h2>
                            <h4>Provide integrated services for local communities.</h4>
                        </div>

                    </div>


                    <div className="cause-container carousel-main  ">

                        <div className="col-lg-4 col-md-5 col-sm-6 col-xs-12 carousel-image">
                            <div className="cause-layout-1">
                                <figure className="cause-img">
                                    <img style={{ height: "420px", width: "585px" }} src="../../public/education2.jpg" alt="Cause" />
                                </figure>


                                <div className="cause-content text-center">
                                    <h5>
                                        <a href="#">Protect Children Rights</a>
                                    </h5>
                                    <p>
                                        The alliance for children rights is dedicated solely to protecting the rights of impovere, abused and neglected children.
                                    </p>
                                    <div className="clearfix">
                                        <a className="btn btn-theme text-uppercase" onClick={() => navigate('/Donation')}>Donate Now</a>
                                    </div>
                                </div>



                            </div></div>

                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 carousel-image">
                            <div className="cause-layout-1">
                                <figure className="cause-img">
                                    <img style={{ height: "420px" }} src="../../public/education3.jpg" alt="Cause" />
                                </figure>


                                <div className="cause-content text-center">
                                    <h5>
                                        <a href="#">Ensure Safe Foods</a>
                                    </h5>
                                    <p>
                                        The alliance for children rights is dedicated solely to protecting the rights of impovere, abused and neglected children.
                                    </p>
                                    <div className="clearfix">
                                        <a className="btn btn-theme text-uppercase" onClick={() => navigate('/Donation')}>Donate Now</a>
                                    </div>
                                </div>


                            </div></div>


                    </div>


                </div>

            </section>


            <section className="section-content-block section-counter section-black-bg-overlay" data-stellar-background-ratio="0.5" style={{ backgroundPosition: '0% -23.3555px' }}>
                <div className="container">
                    <div className="row wow fadeIn animated" style={{ visibility: 'visible', animationName: 'fadeIn' }}>
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
                        <div className="col-md-12 col-sm-12 text-center">
                            <h2>Upcoming
                                &nbsp;<span>Events / Blogs</span>
                            </h2>
                            <h4>Social Services community settlement houses provide integrated.</h4>
                        </div>
                        {/* end .col-sm-10  */}
                    </div>
                    {/* end .row  */}
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="event-wrapper-1">
                                <figure className="event-img">
                                    <img style={{ height: '430px', width: "500px" }} src="../../public/cherity-image4.jpg" alt />
                                    <div className="event-date">
                                        <i className="fa fa-calendar" />
                                        15 Sep 2017</div>
                                </figure>
                                <div className="event-content">
                                    <h5>
                                        <a >Bring Orphan's Happiness</a>
                                    </h5>
                                    <p>We work to unite the geek community into a massive force to opportunity families and communities worldwide.</p>

                                </div>
                            </div>
                            {/* end .event-wrapper-1  */}
                        </div>
                        {/* end .col-lg-4 col-md-4  */}
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="event-wrapper-1">
                                <figure className="event-img">
                                    <img style={{ height: '430px', width: "500px" }} src="../../public/cherity-image5.jpg" alt />
                                    <div className="event-date">
                                        <i className="fa fa-calendar" />
                                        25 Sep 2017</div>
                                </figure>
                                <div className="event-content">
                                    <h5>
                                        <a >Provide Equal Opportunity</a>
                                    </h5>
                                    <p>We work to unite the geek community into a massive force to opportunity families and communities worldwide.</p>

                                </div>
                            </div>
                            {/* end .event-wrapper-1  */}
                        </div>
                        {/* end .col-lg-4 col-md-4  */}
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="event-wrapper-1">
                                <figure className="event-img">
                                    <img style={{ height: '430px', width: "500px" }} src="../../public/cherity-image3.jpg" alt />
                                    <div className="event-date">
                                        <i className="fa fa-calendar" />
                                        20 Sep 2017</div>
                                </figure>
                                <div className="event-content">
                                    <h5>
                                        <a >Charity Benefit Concert</a>
                                    </h5>
                                    <p>We work to unite the geek community into a massive force to opportunity families and communities worldwide.</p>

                                </div>
                            </div>
                            {/* end .event-wrapper-1 */}
                        </div>
                        {/* end .col-lg-4 col-md-4  */}
                    </div>
                    {/* end .row  */}

                </div>
                {/* end .container  */}
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
                    <div className="row wow fadeIn animated volunteers-image" style={{ visibility: 'visible', animationName: 'fadeIn' }}>

                        {/*  end .col-lg-3 col-md-3 col-sm-6 col-xs-12  */}
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <div className="team-layout-1">
                                <figure className="team-member">
                                    <a title="JOHN ABRAHAM">
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
                                    <a title="JOHN ABRAHAM">
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









            {/* <section className="section-content-block">
                <div className="container">
                    <div className="row section-heading-wrapper">
                        <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                            <h2>Donors
                                <span>Feedbacks</span>
                            </h2>
                            <h4>Human Rights charities support the passage and enforcement.</h4>
                        </div>
                       
                    </div>
                    <div className="row">
                        <div className="testimonial-container owl-carousel owl-loaded owl-drag">
                            <div className="owl-stage-outer"><div className="owl-stage" style={{ transform: 'translate3d(-2340px, 0px, 0px)', transition: 'all 0.25s ease 0s', width: 4095 }}><div className="owl-item cloned" style={{ width: 585 }}><div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div className="testimony-layout-2">
                                    <p className="testimony-text">
                                        Very professional, outstanding service. We needed work done on our van before a trip and they were able to squeezed us in without any issues.Very excellent quick service. Staff were extremely polite. I will be returning and will tell people to come here!
                                    </p>
                                    <div className="testimony-info">
                                        <h4>Sunnybrook Church</h4>
                                        <h6 className="bq-author-info">CEO, HW Tech Inc</h6>
                                    </div>
                                </div>
                           
                            </div></div><div className="owl-item cloned" style={{ width: 585 }}><div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div className="testimony-layout-2">
                                    <p className="testimony-text">
                                        Very professional, outstanding service. We needed work done on our van before a trip and they were able to squeezed us in without any issues.Very excellent quick service. Staff were extremely polite. I will be returning and will tell people to come here!
                                    </p>
                                    <div className="testimony-info">
                                        <h4>Sunnybrook Church</h4>
                                        <h6 className="bq-author-info">CEO, HW Tech Inc</h6>
                                    </div>
                                </div>
                         
                            </div></div><div className="owl-item" style={{ width: 585 }}><div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div className="testimony-layout-2">
                                    <p className="testimony-text">
                                        Very professional, outstanding service. We needed work done on our van before a trip and they were able to squeezed us in without any issues.Very excellent quick service. Staff were extremely polite. I will be returning and will tell people to come here!
                                    </p>
                                    <div className="testimony-info">
                                        <h4>Brandon Munson</h4>
                                        <h6>CTO, Fulcrum Design</h6>
                                    </div>
                                </div>
                          
                            </div></div><div className="owl-item" style={{ width: 585 }}><div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div className="testimony-layout-2">
                                    <p className="testimony-text">
                                        Very professional, outstanding service. We needed work done on our van before a trip and they were able to squeezed us in without any issues.Very excellent quick service. Staff were extremely polite. I will be returning and will tell people to come here!
                                    </p>
                                    <div className="testimony-info">
                                        <h4>Sunnybrook Church</h4>
                                        <h6 className="bq-author-info">CEO, HW Tech Inc</h6>
                                    </div>
                                </div>
                                
                            </div></div><div className="owl-item active" style={{ width: 585 }}><div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div className="testimony-layout-2">
                                    <p className="testimony-text">
                                        Very professional, outstanding service. We needed work done on our van before a trip and they were able to squeezed us in without any issues.Very excellent quick service. Staff were extremely polite. I will be returning and will tell people to come here!
                                    </p>
                                    <div className="testimony-info">
                                        <h4>Sunnybrook Church</h4>
                                        <h6 className="bq-author-info">CEO, HW Tech Inc</h6>
                                    </div>
                                </div>
                               
                            </div></div><div className="owl-item cloned active" style={{ width: 585 }}><div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div className="testimony-layout-2">
                                    <p className="testimony-text">
                                        Very professional, outstanding service. We needed work done on our van before a trip and they were able to squeezed us in without any issues.Very excellent quick service. Staff were extremely polite. I will be returning and will tell people to come here!
                                    </p>
                                    <div className="testimony-info">
                                        <h4>Brandon Munson</h4>
                                        <h6>CTO, Fulcrum Design</h6>
                                    </div>
                                </div>
                                
                            </div></div><div className="owl-item cloned" style={{ width: 585 }}><div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div className="testimony-layout-2">
                                    <p className="testimony-text">
                                        Very professional, outstanding service. We needed work done on our van before a trip and they were able to squeezed us in without any issues.Very excellent quick service. Staff were extremely polite. I will be returning and will tell people to come here!
                                    </p>
                                    <div className="testimony-info">
                                        <h4>Sunnybrook Church</h4>
                                        <h6 className="bq-author-info">CEO, HW Tech Inc</h6>
                                    </div>
                                </div>
                                 
                            </div></div></div></div> </div>
                       
                    </div>
                    
                </div>
               
            </section> */}


            <section className="section-content-block section-secondary-bg"> <div className="container">
                <div className="row section-heading-wrapper  wow fadeIn animated" style={{ visibility: 'visible', animationName: 'fadeIn' }}>
                    <div className="col-md-12 col-sm-12 text-center">
                        <h2>Photo
                            <span>Archives</span>
                        </h2>
                        <h4>Social Services community settlement houses provide integrated.</h4>
                    </div>
                    {/* end .col-sm-10  */}
                </div>
                {/* end .row  */}
            </div>
                <div className="container">
                    <div className="row filterable-gallery">

                        <div className="col-md-3 col-sm-6 col-xs-12 gallery-container  filter hdpe">
                            <a className="gallery-light-box xs-margin vbox-item" data-gall="myGallery" >
                                <figure className="gallery-img">
                                    <img style={{ height: "250px" }} src="../../public/education2.jpg" alt="gallery image" />
                                </figure>
                                {/* end .cause-img  */}
                            </a>
                            {/* end .gallery-light-box  */}
                        </div>
                        {/* end .col-sm-3  */}
                        <div className="col-md-3 col-sm-6 col-xs-12 gallery-container  filter sprinkle">
                            <a className="gallery-light-box xs-margin vbox-item" data-gall="myGallery" >
                                <figure className="gallery-img">
                                    <img style={{ height: "250px" }} src="../../public/education3.jpg" alt="gallery image" />
                                </figure>
                                {/* end .cause-img  */}
                            </a>
                        </div>
                        {/* end .col-sm-3  */}
                        <div className="col-md-3 col-sm-6 col-xs-12 gallery-container filter hdpe">
                            <a className="gallery-light-box xs-margin vbox-item" data-gall="myGallery"  >
                                <figure className="gallery-img">
                                    <img style={{ height: "250px" }} src="../../public/volunteers1.jpg" alt="gallery image" />
                                </figure>
                                {/* end .cause-img  */}
                            </a>
                            {/* end .gallery-light-box  */}
                        </div>
                        {/* end .col-sm-3  */}
                        <div className="col-md-3 col-sm-6 col-xs-12 gallery-container filter spray">
                            <a className="gallery-light-box xs-margin vbox-item" data-gall="myGallery" >
                                <figure className="gallery-img">
                                    <img style={{ height: "250px" }} src="../../public/cherity-image5.jpg" alt="gallery image" />
                                </figure>
                                {/* end .cause-img  */}
                            </a>
                        </div>
                        {/* end .col-sm-3  */}
                        <div className="col-md-3 col-sm-6 col-xs-12 gallery-container filter irrigation">
                            <a className="gallery-light-box xs-margin vbox-item" data-gall="myGallery" >
                                <figure className="gallery-img">
                                    <img style={{ height: "250px" }} src="../../public/volunteers3.jpg" alt="gallery image" />
                                </figure>
                                {/* end .cause-img  */}
                            </a>
                            {/* end .gallery-light-box  */}
                        </div>
                        {/* end .col-sm-3  */}
                        <div className="col-md-3 col-sm-6 col-xs-12 gallery-container filter sprinkle">
                            <a className="gallery-light-box xs-margin vbox-item" data-gall="myGallery"  >
                                <figure className="gallery-img">
                                    <img style={{ height: "250px" }} src="../../public/cherity-image1.jpg" alt="gallery image" />
                                </figure>
                                {/* end .cause-img  */}
                            </a>
                        </div>
                        {/* end .col-sm-3  */}
                        <div className="col-md-3 col-sm-6 col-xs-12 gallery-container filter hdpe">
                            <a className="gallery-light-box xs-margin vbox-item" data-gall="myGallery"  >
                                <figure className="gallery-img">
                                    <img style={{ height: "250px" }} src="../../public/education4.jpg" alt="gallery image" />
                                </figure>
                                {/* end .cause-img  */}
                            </a>
                            {/* end .gallery-light-box  */}
                        </div>
                        {/* end .col-sm-3  */}
                        <div className="col-md-3 col-sm-6 col-xs-12 gallery-container filter irrigation">
                            <a className="gallery-light-box xs-margin vbox-item" data-gall="myGallery"  >
                                <figure className="gallery-img">
                                    <img style={{ height: "250px" }} src="../../public/education5.jpg" alt="gallery image" />
                                </figure>
                                {/* end .cause-img  */}
                            </a>
                        </div>
                        {/* end .col-sm-3  */}
                    </div>
                    {/* end .row  */}
                </div>
                {/* end .container */}
            </section>

        </div>
    )
}

export default Home
