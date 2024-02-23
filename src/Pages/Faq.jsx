import React, { useState } from 'react'; // Import useState from React
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const Faq = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenTwo, setIsOpenTwo] = useState(false);
  const [isOpenThree, setIsOpenThree] = useState(false);
  const [isOpenFour, setIsOpenFour] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const toggleAccordionTwo = () => {
    setIsOpenTwo(!isOpenTwo);
    setIsOpen(false); // Close the other accordion if opened
  };

  const toggleAccordionThree = () => {
    setIsOpenThree(!isOpenThree);
    setIsOpenTwo(false);
    setIsOpen(false); // Close the other accordion if opened
  };

  const toggleAccordionFour = () => {
    setIsOpenFour(!isOpenFour);
    setIsOpenThree(false);
    setIsOpenTwo(false);
    setIsOpen(false); // Close the other accordion if opened
  };

  return (
    <div  style={{background:'white'}}>
      <section className="page-header" data-stellar-background-ratio="0.1" style={{ backgroundPosition: '50% 50%' }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h3>
                Faq
              </h3>
              <p className="page-breadcrumb">
                <a href="#">Home</a>
                /
                <a href="#">Faq</a>
              </p>
            </div>
          </div>
          {/* end .row  */}
        </div>
        {/* end .container  */}
      </section>

      <section className="section-content-block section-faq">
        <div className="container">
          <div className="row section-heading-wrapper">
            <div className="col-md-12 col-sm-12 text-center">
              <h2>F.A.Q</h2>
              <h4>The tender loving care of human beings will never become obsolete.</h4>
            </div>
            {/* end .col-sm-10  */}
          </div>
          {/*  end .row  */}
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12" id="accordion">
              <div className="panel panel-default faq-box">
                <div className="panel-heading">
                  <p
                    style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
                    className="panel-title"
                  >
                    <a
                      className="accordion-toggle collapsed"
                      data-parent="#accordion"

                    >
                      I am Minor. How can I apply for scholarship?
                    </a>
                    {isOpen ? <FaChevronUp style={{ cursor: "pointer" }} onClick={toggleAccordion} /> : <FaChevronDown style={{ cursor: "pointer" }} onClick={toggleAccordion} />}
                  </p>
                </div>
                {isOpen && (
                  <div id="collapseOne" className="panel-collapse collapse in">
                    <div className="panel-body"> Yes, you can apply for a scholarship through your parents’ authentic login Id and password.</div>
                  </div>
                )}
              </div>

              <div className="panel panel-default faq-box">
                <div className="panel-heading">
                  <p style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
                    className="panel-title">
                    <a className={`accordion-toggle collapsed ${isOpenTwo ? 'active' : ''}`} onClick={toggleAccordionTwo}>How much scholarship I can get?</a>
                    {isOpenTwo ? <FaChevronUp style={{ cursor: "pointer" }} onClick={toggleAccordionTwo} /> : <FaChevronDown style={{ cursor: "pointer" }} onClick={toggleAccordionTwo} />}
                  </p>
                </div>
                {isOpenTwo && (
                  <div id="collapseTwo" className="panel-collapse collapse in">
                    <div className="panel-body">It depends on marks obtained by you in the last exam as well as yearly income of your parents.</div>
                  </div>
                )}
              </div>

            </div>
            {/* end .col-md-6  */}
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12" id="accordion2">
              <div className="panel panel-default faq-box">
                <div className="panel-heading">
                  <p style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
                    className="panel-title">
                    <a className={`accordion-toggle collapsed ${isOpenThree ? 'active' : ''}`} onClick={toggleAccordionThree}>How much scholarship I can get?</a>
                    {isOpenThree ? <FaChevronUp style={{ cursor: "pointer" }} onClick={toggleAccordionThree} /> : <FaChevronDown style={{ cursor: "pointer" }} onClick={toggleAccordionThree} />}
                  </p>
                </div>
                {isOpenThree && (
                  <div id="collapseTwo" className="panel-collapse collapse in">
                    <div className="panel-body">It depends on marks obtained by you in the last exam as well as yearly income of your parents.</div>
                  </div>
                )}
              </div>
              <div className="panel panel-default faq-box">
                <div className="panel-heading">
                  <p style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
                    className="panel-title">
                    <a className={`accordion-toggle collapsed ${isOpenFour ? 'active' : ''}`} onClick={toggleAccordionFour}>How much scholarship I can get?</a>
                    {isOpenFour ? <FaChevronUp style={{ cursor: "pointer" }} onClick={toggleAccordionFour} /> : <FaChevronDown style={{ cursor: "pointer" }} onClick={toggleAccordionFour} />}
                  </p>
                </div>
                {isOpenFour && (
                  <div id="collapseTwo" className="panel-collapse collapse in">
                    <div className="panel-body">It depends on marks obtained by you in the last exam as well as yearly income of your parents.</div>
                  </div>
                )}
              </div>
            </div>
            {/* end .col-md-6  */}
          </div>
          {/* end .row  */}
        </div>
        {/* end .container  */}
      </section>
    </div>
  );
}

export default Faq;
