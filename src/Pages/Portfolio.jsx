import React from 'react'


const Portfolio = () => {
  const Collections = [
    {
      Image: "../../public/education6.jpg"
    },
    {
      Image: "../../public/education3.jpg"
    }, {
      Image: "../../public/volunteers1.jpg"
    },
    {
      Image: "../../public/education4.jpg"
    },
    {
      Image: "../../public/education7.jpg"
    },
    {
      Image: "../../public/education5.jpg"
    },
    {
      Image: "../../public/education1.jpg"
    },
    {
      Image: "../../public/education2.jpg"
    },
    {
      Image: "../../public/cherity-image1.jpg"
    },
    {
      Image: "../../public/cherity-image2.jpg"
    },
    {
      Image: "../../public/cherity-image3.jpg"
    },
    {
      Image: "../../public/cherity-image4.jpg"
    },
    {
      Image: "../../public/cherity-image5.jpg"
    },
    {
      Image: "../../public/cherity-image6.jpg"
    },
    {
      Image: "../../public/volunteers1.jpg"
    },
    {
      Image: "../../public/volunteers2.jpg"
    },

  ]
  return (
    <div>

      <section className="page-header" data-stellar-background-ratio="0.1" style={{ backgroundPosition: '50% 50%' }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h3>
                Portfolio
              </h3>
              <p className="page-breadcrumb">
                <a href="#">Home</a>
                /
                <a href="#">portfolio</a>

              </p>
            </div>
          </div>
          {/* end .row  */}
        </div>
        {/* end .container  */}
      </section>





      <section className="section-content-block section-secondary-bg"> <div className="container">
        <div className="row section-heading-wrapper  wow fadeIn animated" style={{ visibility: 'visible', animationName: 'fadeIn' }}>
          <div className="col-md-12 col-sm-12 text-center">
            <h2>Photo
              <span>Gallery</span>
            </h2>
            <h4>Social Services community settlement houses provide integrated.</h4>
          </div>
          {/* end .col-sm-10  */}
        </div>
        {/* end .row  */}
      </div>
        <div className="container">
          <div className="row filterable-gallery">

            {Collections.map((item, index) => {
              return (
                <div className="col-md-3 col-sm-6 col-xs-12 gallery-container  filter hdpe">
                  <a className="gallery-light-box xs-margin vbox-item" data-gall="myGallery" >
                    <figure className="gallery-img">
                      <div key={index}>
                        <img style={{ height: "250px" }} src={item.Image} alt="" />
                      </div>
                    </figure>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
  </section>
</div>
  )
}

export default Portfolio






