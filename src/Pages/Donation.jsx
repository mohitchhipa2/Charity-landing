import { useEffect, useState } from 'react';
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
import { Country, State, City } from 'country-state-city';



const Donation = () => {
  const navigate = useNavigate()
  const [showOtherInput, setShowOtherInput] = useState(false);

  const handleRadioChange = (event) => {
    if (event.target.value === "option2") {
      setShowOtherInput(true);
    } else {
      setShowOtherInput(false);
    }
  };

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

  const [taxType, setTaxType] = useState('');
  const [panNumber, setPanNumber] = useState('');
  const [tanNumber, setTanNumber] = useState('');

  const handleTaxTypeChange = (event) => {
    const selectedTaxType = event.target.value;
    setTaxType(selectedTaxType);
    // Reset PAN number and TAN number when tax type changes
    setPanNumber('');
    setTanNumber('');
  };


  const [identificationType, setIdentificationType] = useState('');
  const [identificationNumber, setIdentificationNumber] = useState('');

  const handleIdentificationTypeChange = (event) => {
    const selectedIdentificationType = event.target.value;
    setIdentificationType(selectedIdentificationType);
    // Reset identification number when type changes
    setIdentificationNumber('');
  };


  const [paymentMethod, setPaymentMethod] = useState('');

  // Function to handle payment method change
  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  // Function to render bank details based on the selected payment method
  const renderBankDetails = () => {
    if (paymentMethod === 'UPI') {
      return (
        <div>
          {/* Bank details for UPI payment method */}
          <p>Name of the Bank: State Bank of India</p>
          <p>A/c No. 42464708309</p>
          <p>IFSC: SBIN0061317</p>
        </div>
      );
    } else if (paymentMethod === 'Bank Account') {
      return (
        <div>
          {/* Bank details for Bank Account payment method */}
          <p>Name of the Bank: Punjab National Bank</p>
          <p>A/c No. 8721002100002692</p>
          <p>IFSC: PUNB0872100</p>
        </div>
      );
    } else {
      // Render nothing if no payment method is selected
      return null;
    }
  };


  return (
    <div>

      <section className="page-header" data-stellar-background-ratio="0.1" style={{ backgroundPosition: '50% 50%' }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h3>
                Donation
              </h3>
              <p className="page-breadcrumb">
                <a href="#">Home</a>
                /
                <a href="#">donation</a>

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
            <div className="col-sm-12">
              <div className="donation-form-wrapper">
                <form method="post" name="donation_form" className="donation_form " id="donation_form">
                  <div className="donation-form-info-1 scanner-donation">
                    <div>
                      <h4>Donation Information</h4>
                      <p>I would like to make a donation in the amount of:</p>
                      <div style={{ display: "flex", alignItems: 'center' }}>
                        <label style={{ display: "flex", alignItems: 'center' }} className="radio-inline">
                          <input type="radio" defaultValue={1000} id="amount_1" name="inlineRadioOptions" onChange={() => setShowOtherInput(false)} />
                          500
                        </label>
                        <label style={{ display: "flex", alignItems: 'center' }} className="radio-inline">
                          <input type="radio" defaultValue={500} id="amount_2" name="inlineRadioOptions" onChange={() => setShowOtherInput(false)} />
                        2000
                        </label>
                        <label style={{ display: "flex", alignItems: 'center' }} className="radio-inline">
                          <input type="radio" defaultValue={100} id="amount_3" name="inlineRadioOptions" onChange={() => setShowOtherInput(false)} />
                         5000
                        </label>
                        <label style={{ display: "flex", alignItems: 'center' }} className="radio-inline">
                          <input type="radio" defaultValue={50} id="amount_4" name="inlineRadioOptions" onChange={() => setShowOtherInput(false)} />
                          10000
                        </label>
                      </div>
                      <div style={{ display: "flex", alignItems: 'center' }} className="radio">
                        <label style={{ display: "flex", alignItems: 'center' }}>
                          <input
                            type="radio"
                            name="inlineRadioOptions"
                            id="optionsRadios2"
                            value="option2"
                            onChange={handleRadioChange}
                          />
                          Other:
                          {showOtherInput && (
                            <input
                              style={{ marginLeft: "10px" }}
                              placeholder='Other Amount'
                              type="text"
                              name="other_amount"
                            />
                          )}
                        </label>
                      </div>
                    </div>
                    <div>
                      <img style={{ width: '300px' }} src="../../public/Scanner.jpg" alt="" />
                    </div>
                  </div>
                  {/* end .donation-form-info-1  */}
                  <div className="donation-form-info-2">
                    <h4>Donor Information</h4>
                    <div className="form-group">
                      <label htmlFor="first_name" className="col-sm-2 control-label">First Name:
                      </label>
                      <div className="col-md-6 col-sm-10">
                        <input placeholder='First Name' type="text" className="form-control" id="first_name" name="first_name" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="last_name" className="col-sm-2 control-label">Last Name:
                      </label>
                      <div className="col-md-6 col-sm-10">
                        <input placeholder='Last Name' type="text" className="form-control" id="last_name" name="last_name" />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="address" className="col-sm-2 control-label">Address:
                      </label>
                      <div className="col-md-6 col-sm-10">
                        <input placeholder='Address...' type="text" className="form-control" id="address" name="address" />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="Country" className="col-sm-2 control-label">Country:
                      </label>
                      <div className="col-md-6 col-sm-10">
                        <select onChange={(e) => handleCountryChange(e.target.value)} className="form-control" id="user_phone" name="user_phone" placeholder="Phone Number" data-msg="Please Write Your State">
                          <option value="">Select Country</option>
                          {countries.map((country) => (
                            <option key={country.isoCode} value={country.isoCode}>
                              {country.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="States" className="col-sm-2 control-label">State:
                      </label>
                      <div className="col-md-6 col-sm-10">
                        <select onChange={(e) => handleStateChange(e.target.value)} className="form-control" id="user_phone" name="user_phone" placeholder="Phone Number" data-msg="Please Write Your State">
                          <option value="">Select State</option>
                          {states.map((state) => (
                            <option key={state.isoCode} value={state.isoCode}>
                              {state.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="city" className="col-sm-2 control-label">City:
                      </label>
                      <div className="col-md-6 col-sm-10">
                        <select className="form-control" id="user_phone" name="user_phone" placeholder="Phone Number" data-msg="Please Write Your State">
                          <option value="">Select City</option>
                          {cities.map((city) => (
                            <option key={city.id} value={city.id}>
                              {city.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                     
                    <div className="form-group">
                      <label htmlFor="city" className="col-sm-2 control-label">Tax Information:
                      </label>
                      <div className="col-md-6 col-sm-10">
                        <select
                          className="form-control"
                          id="city"
                          name="country"
                          value={taxType}
                          onChange={handleTaxTypeChange}
                        >
                          <option value="">Select</option>
                          <option value="PAN Number">PAN Number</option>
                          <option value="TAN Number">TAN Number</option>
                        </select>
                      </div>
                    </div>
                    {taxType === 'PAN Number' && (
                      <div className="form-group">
                        <label htmlFor="panNumber" className="col-sm-2 control-label">
                          PAN Number:
                        </label>
                        <div className="col-md-6 col-sm-10">
                          <input
                            type="text"
                            id="panNumber"
                            name="panNumber"
                            value={panNumber}
                            onChange={(event) => setPanNumber(event.target.value)}
                            placeholder="Enter PAN Number"
                          />
                        </div>
                      </div>
                    )}
                    {taxType === 'TAN Number' && (
                      <div className="form-group">
                        <label htmlFor="tanNumber" className="col-sm-2 control-label">
                          TAN Number:
                        </label>
                        <div className="col-md-6 col-sm-10">
                          <input
                            type="text"
                            id="tanNumber"
                            name="tanNumber"
                            value={tanNumber}
                            onChange={(event) => setTanNumber(event.target.value)}
                            placeholder="Enter TAN Number"
                          />
                        </div>
                      </div>
                    )}

                    <div className="form-group">
                      <label htmlFor="city" className="col-sm-2 control-label">Identify:
                      </label>
                      <div className="col-md-6 col-sm-10">
                        <select
                          className="form-control"
                          id="city"
                          name="country"
                          value={identificationType}
                          onChange={handleIdentificationTypeChange}
                        >
                          <option value="">Select</option>
                          <option value="Aadhar Number">Aadhar Number</option>
                          <option value="Driving License">Driving License</option>
                          <option value="Voter ID">Voter ID</option>
                        </select>
                      </div>
                    </div>
                    {identificationType && (
                      <div className="form-group">
                        <label htmlFor="identificationNumber" className="col-sm-2 control-label">
                          {identificationType}:
                        </label>
                        <div className="col-md-6 col-sm-10">
                          <input
                            type="text"
                            id="identificationNumber"
                            name="identificationNumber"
                            value={identificationNumber}
                            onChange={(event) => setIdentificationNumber(event.target.value)}
                            placeholder={`Enter ${identificationType}`}
                          />
                        </div>
                      </div>
                    )}
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" defaultValue name="hide_name" />
                        Please do not publish my name. I would like to remain anonymous.
                      </label>
                    </div>
                  </div>

                  <div className="donation-form-info-2">
                    <input type="submit" name="donate_now" defaultValue="Donate Now" className="btn btn-danger btn-lg btn-submit-donation" />
                  </div>

                </form>
              </div>

            </div>

          </div>

        </div>

      </section>


    </div>
  )
}

export default Donation
