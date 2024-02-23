import "./Header.css"
import '@fortawesome/fontawesome-free/css/all.css';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


const Header = (props) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handlefalse = () => {
    setOpen(!open);
  }
  return (
    <div>


      <header className="main-header clearfix" data-sticky_header="true">
        <section className="header-wrapper navgiation-wrapper">
          <div className="main-top-header clearfix">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 text-left hidden-sm hidden-xs">
                  <div className="top-bar-social">
                    <a href="https://www.facebook.com/MaaShantiNirmalaCharitableTrust">
                      <i class="fa-brands fa-facebook"></i>
                    </a>
                    <a href="https://twitter.com/MSNCTrust" >
                      <i class="fa-brands fa-x-twitter"></i>
                    </a>


                    <a href="https://www.youtube.com/@MaaShantiNirmalaCharitable">
                      <i class="fa-brands fa-youtube"></i>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 text-right hidden-sm hidden-xs">
                  <div className="top-bar-link">

                    <a onClick={() => navigate('/signup')}>SignIn</a>
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
                    <a onClick={() => navigate("/")}>
                      <img src="public/logo2.jpg.png" alt="Logo" />
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
                          <a href="mailto:msntrust2023@gmail.com" className="head-content">
                            msntrust2023@gmail.com
                          </a>
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
                  <li onClick={() => navigate("/")} className="drop">
                    <a title="Home Layout 01" >Home</a>
                  </li>
                  <li onClick={() => navigate("/About")}>
                    <a title="About Us">About Us</a>

                  </li>
                  <li onClick={() => navigate("/Portfolio")} className="drop">
                    <a >Portfolio</a>
                    <ul className="drop-down">

                    </ul>
                  </li>
                  <li className="drop">
                    <a onClick={() => navigate('/Blog')}>Blog</a>
                  </li>
                  <li>
                    <a >others</a>
                    <ul className="drop-down">
                      <li onClick={() => navigate("/Contact")}>
                        <a  >contact us</a>
                      </li>
                      <li onClick={() => navigate("/Faq")}>
                        <a >faq</a>
                      </li>
                      <li onClick={() => navigate("/Howitworks")}>
                        <a >How it works</a>
                      </li>
                      <li onClick={() => navigate("/Terms&condition")}>
                        <a >terms & condition</a>
                      </li>
                      <li onClick={() => navigate("/Privacy")}>
                        <a >privacy policy</a>
                      </li>
                    </ul>
                  </li>


                </ul>

              </div>
              <div className="navbar-header pull-right">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <div className="navbar-contact hidden-sm hidden-xs">
                  <ul>
                    <li onClick={() => navigate("/Donation")}><a className="btn btn-theme" title="Donate Now">Donate Now</a></li>
                  </ul>
                </div>
              </div>
            </div>

          </div>




          {props.outlet}
        </section>
      </header>



    </div>
  )
}

export default Header
