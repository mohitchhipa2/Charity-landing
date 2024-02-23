import React from 'react'
import Collection from '../component/Collection'
import { Link, useNavigate } from 'react-router-dom'

const Blog = () => {
  const navigate = useNavigate()
  return (
    <div style={{background:'white'}}>

      <section className="main-content">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-12">

              {Collection.map((item, index) => {
                return (
                  <Link to={`/SinglePage/${item.id}`}>
                    <article className="post single-post">
                      <div className="single-post-content">
                        <a title href="#">
                          <img style={{ height: "500px", width: "820px" }} key={index} alt src={item.Image} />
                        </a>
                      </div>
                      {/* end .bd-view  */}
                      <div className="single-post-title">
                        <h2>
                          <a href="#">
                            {item.heading}
                          </a>
                        </h2>
                        {/*  end blog-post-title  */}
                        <p className="single-post-meta">
                          <i className="fa fa-user" />
                          &nbsp; {item.name}&nbsp;
                          &nbsp;<i className="fa fa-calendar" />
                          &nbsp; {item.date}
                        </p>
                        <p>
                          {item.description}
                        </p>
                      </div>
                      {/* end col-sm-8  */}
                    </article>
                  </Link>
                )
              })

              }
              {/*  end blog-pagination */}
            </div>
            {/*  end col-sm-8 */}
            <div className="col-md-4 col-sm-12">

              {/*  end .widget */}
              <div className="widget site-sidebar">
                <h2 className="widget-title">Categories</h2>
                <ul className="widget-post-category clearfix">
                  <li>
                    <a title="View all posts filed under Environment" href="#">Child Education</a>
                    <span className="pull-right badge">42</span>
                  </li>
                  <li>
                    <a title="View all posts filed under Technology" href="#">Happy Family</a>
                    <span className="pull-right badge">40</span>
                  </li>
                  <li>
                    <a title="View all posts filed under Health" href="#">Helpless Shelter</a>
                    <span className="pull-right badge">32</span>
                  </li>
                  <li>
                    <a title="View all posts filed under Disaster" href="#">Fundraising
                    </a>
                    <span className="pull-right badge">26</span>
                  </li>
                  <li onClick={() => navigate("/Donation")}>
                    <a title="View all posts filed under Environment Right"  >Direct Donation</a>
                    <span className="pull-right badge">18</span>
                  </li>
                  <li>
                    <a title="View all posts filed under Education" href="#">Join Now</a>
                    <span className="pull-right badge">12</span>
                  </li>
                </ul>
              </div>
              {/*  end .widget */}
              <div className="widget site-sidebar">
                <h2 className="widget-title">Recent Posts</h2>
                <div className="single-recent-post">
                  <a href="#">Zomato Commits to Making Food Delivery</a>
                  <span>
                    <i className="fa fa-calendar" />&nbsp; April 19, 2017</span>
                </div>
                <div className="single-recent-post">
                  <a href="#">Make Kalam's House A Knowledge Centre</a>
                  <span>
                    <i className="fa fa-calendar" />&nbsp; April 18, 2017</span>
                </div>
                <div className="single-recent-post">
                  <a href="#">Central Government Retracts Proposal</a>
                  <span>
                    <i className="fa fa-calendar" />&nbsp; April 17, 2017</span>
                </div>
              </div>
              {/*  end .widget */}
             
              {/*  end .widget */}
            </div>
            {/* end .col-sm-4  */}
          </div>
          {/*  end row  */}
        </div>
        {/*  end container */}
      </section>




    </div>
  )
}

export default Blog;
