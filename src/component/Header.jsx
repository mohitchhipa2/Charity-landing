 import React from 'react'
 import "./Header.css"
 import '@fortawesome/fontawesome-free/css/all.css';
import { useNavigate } from 'react-router-dom';



 const Header = () => {
const navigate=useNavigate()

   return (
     <div>
       

     <header className="main-header clearfix" data-sticky_header="true">
  <section className="header-wrapper navgiation-wrapper">
    <div className="main-top-header clearfix">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 text-left hidden-sm hidden-xs">
            <div className="top-bar-social">
              <a href="#">
              <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="#">
              <i class="fa-brands fa-x-twitter"></i>
              </a>
              <a href="#">
              <i class="fa-brands fa-pinterest"></i>
              </a>
              <a href="#">
              <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
              <i class="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 text-right hidden-sm hidden-xs">
            <div className="top-bar-link">
               
              <a href="/Contact">Support</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="header-top">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12 header-col-logo">
            <div className="header-logo logo">
              <a href=''>
                <img src="../../public/logo image.jpg" alt="Logo" />
              </a>
            </div>
            {/* end .logo  */}
          </div>
          {/* end .col-md-3  */}
          <div className="col-md-8 hidden-xs">
            <div className="row">
              <div className="col-md-4 col-sm-4 info-separotor">
                <div className="header-icon-boxs">
                  <div className="icon-container">
                    <i className="fa fa-phone" />
                  </div>
                  <div className="text">
                    <span className="head-heading">Get In Touch</span>
                    <span className="head-content">
                    msntrust2023@gmail.com
                    </span>
                  </div>
                </div>
              </div>
              {/* end .col-md-4  */}
              <div className="col-md-4 col-sm-4 info-separotor">
                <div className="header-icon-box">
                  <div className="icon-container">
                    <i className="fa fa-home" />
                  </div>
                  <div className="text">
                    <span className="head-heading">Office Address</span>
                    <span className="head-content">
                    4-H-9, Indira Gandhi Nagar Jagatpura, Jaipur
                    </span>
                  </div>
                </div>
                {/* end .repair-icon-box  */}
              </div>
              {/* end .col-md-4  */}
              <div className="col-md-4 col-sm-4 info-separotor">
                <div className="header-icon-box">
                  <div className="icon-container">
                    <i className="fa fa-clock-o" />
                  </div>
                  <div className="text">
                    <span className="head-heading">Opening Hour</span>
                    <span className="head-content">
                      10.00 - 18.00 UTC+06
                    </span>
                  </div>
                </div>
                {/* end .header-icon-box  */}
              </div>
              {/* end .col-md-4  */}
            </div>
            {/* end .row  */}
          </div>
          {/* end .col-md-8  */}
        </div>
        {/* end .row  */}
      </div>
      {/* end .container  */}
    </div>
    {/* end header-top  */}
    <div className="navbar navbar-default">
      <div className="container clearfix">
        <div className="navbar-collapse collapse pull-left">
          <ul className="nav navbar-nav">
            <li onClick={()=>navigate("/")} className="drop">
              <a  href="#" title="Home Layout 01" className="link-active">Home</a>
              <ul className="drop-down">
                 
                
              </ul>
            </li>
            <li onClick={()=>navigate("/About")}>
              <a  href="#" title="About Us">About Us</a>
              
            </li>
            <li onClick={()=>navigate("/Portfolio")} className="drop">
              <a href="#">Portfolio</a>
              <ul className="drop-down">
                 
              </ul>
            </li>
             <li className="drop">
              <a href="/Blog">Blog</a>
            </li>
            <li>
              <a href="#" >others</a>
              <ul className="drop-down">
                <li onClick={()=>navigate("/Contact")}>
                  <a  href="#" >contact us</a>
                </li>
                <li onClick={()=>navigate("/Faq")}>
                  <a  href="#">faq</a>
                </li>
                <li onClick={()=>navigate("/Howitworks")}>
                  <a  href="#">How it works</a>
                </li>
                <li  onClick={()=>navigate("/Terms&condition")}>
                  <a href="#">terms & condition</a>
                </li>
                <li onClick={()=>navigate("/Privacy")}>
                  <a href="#">privacy policy</a>
                </li>
              </ul>
            </li>
            
             
          </ul>
          {/* end .nav .navbar-nav  */}
        </div>
        <div className="navbar-header pull-right">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <div className="navbar-contact hidden-sm hidden-xs">
            <ul>
              <li onClick={()=>navigate("/Donation")}><a className="btn btn-theme"  title="Donate Now">Donate Now</a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* end .container  */}
    </div>
    {/* end .navbar .navbar-default  */}
  </section>
</header>



     </div>
   )
 }
 
 export default Header
 