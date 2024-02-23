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
import { useEffect, useState } from "react";
import { Country, State, City } from 'country-state-city';
import { PiBankFill } from "react-icons/pi";


const Contact = () => {

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    // Fetch countries and set initial state
    const fetchCountries = async () => {
      const fetchedCountries = await Country.getAllCountries();
      setCountries(fetchedCountries);
    };
    fetchCountries();
  }, []);

  const handleCountryChange = async (countryId) => {
    // Fetch states based on selected country
    const fetchedStates = await State.getStatesOfCountry(countryId);
    setStates(fetchedStates);
    setCities([]);
  };

  const handleStateChange = async (stateId) => {
    // Fetch cities based on selected state
    const fetchedCities = await City.getCitiesOfState(stateId);
    setCities(fetchedCities);
    console.log(fetchedCities)
  };





  return (
    <div>

      <section className="page-header" data-stellar-background-ratio="0.1" style={{ backgroundPosition: '50% 50%' }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h3>
                Contact
              </h3>
              <p className="page-breadcrumb">
                <a>Home</a>
                /
                <a>Contact</a>

              </p>
            </div>
          </div>
          {/* end .row  */}
        </div>
        {/* end .container  */}

      </section>

      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5839.528162375425!2d75.87731458354078!3d26.839836834208015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db7e195d24a93%3A0xc8aff3463441e377!2sGovt.%20Dispensary%20Indira%20Gandhi%20Nagar!5e0!3m2!1sen!2sin!4v1707471353933!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: '0', marginTop: "10px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <section className="section-content-block section-contact-block">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 wow fadeInLeft animated" style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
              <div className="contact-form-block">
                <h2 className="contact-title">Say hello to us</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard
                </p>
                <form role="form" action="#" method="post" id="contact-form">
                  <div className="form-group">
                    <input type="text" className="form-control" id="user_name" name="user_name" placeholder="Name" data-msg="Please Write Your Name" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="user_aadhar" name="user_aadhar" placeholder="Aadhar Number" data-msg="Please Write Your Aadhar Number" />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" id="user_email" name="user_email" placeholder="Email" data-msg="Please Write Your Valid Email" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="user_phone" name="user_phone" placeholder="Phone Number" data-msg="Please Write Your Valid Phone Number" />
                  </div>

                  <div className="form-group">
                    <select onChange={(e) => handleCountryChange(e.target.value)} className="form-control" id="user_phone" name="user_phone" placeholder="Phone Number" data-msg="Please Write Your State">
                      <option value="">Select Country</option>
                      {countries.map((country) => (
                        <option key={country.isoCode} value={country.isoCode}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">

                    <select onChange={(e) => handleStateChange(e.target.value)} className="form-control" id="user_phone" name="user_phone" placeholder="Phone Number" data-msg="Please Write Your State">
                      <option value="">Select State</option>
                      {states.map((state) => (
                        <option key={state.isoCode} value={state.isoCode}>
                          {state.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <select className="form-control" id="user_phone" name="user_phone" placeholder="Phone Number" data-msg="Please Write Your State">
                      <option value="">Select City</option>
                      {cities.map((city) => (
                        <option key={city.id} value={city.id}>
                          {city.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="user_Address" name="user_Address" placeholder="Street" data-msg="Please Write Your Address" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="user_pin" name="user_pin" placeholder="Pin Code" data-msg="Please Write Your Valid Pin Code" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="user_ip" name="user_ip" placeholder="IP Address" data-msg="Please Write Your IP Address" />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-custom">Send Now</button>
                  </div>
                </form>
              </div>
              {/* end .contact-form-block  */}
            </div>
            {/*  end col-sm-6  */}
            <div className="col-sm-6 wow fadeInRight animated" style={{ visibility: 'visible', animationName: 'fadeInRight' }}>
              <div className="col-md-12">
                <h2 className="contact-title">Contact us</h2>
                <p>
                  For inquiries or support related to Maa Shanti Nirmala Charitable Trust, please feel free to reach out to us.
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
                      <a href="mailto:msntrust2023@gmail.com">msntrust2023@gmail.com</a>
                    </address>
                  </li>
                  <li style={{ display: "flex", alignItems: "center" }}>
                    <span className="icon-container">
                      <PiBankFill />
                    </span>
                    <address>
                      <a>
                        Name of the Bank: Punjab National Bank
                        <br />
                        A/c No. 8721002100002692
                        <br />
                        IFSC: PUNB0872100
                      </a>
                    </address>
                  </li>

                  <li style={{ display: "flex", alignItems: "center" }}>
                    <span className="icon-container">
                      <PiBankFill />
                    </span>
                    <address>
                      <a>
                      Name of the Bank: State Bank of India
<br />
A/c No. 42464708309
<br />
IFSC: SBIN0061317
                      </a>
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
