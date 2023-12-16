import React from 'react'
import Collection from '../component/Collection'
import { Link } from 'react-router-dom'

const  Blog = () => {
  return (
    <div>
      
     <section className="main-content">
  <div className="container">
    <div className="row">
      <div className="col-md-8 col-sm-12">

        { Collection.map((item,index)=>{
          return(
            <Link to={`/SinglePage/${item.id}`}>
        <article className="post single-post">
          <div className="single-post-content"> 
            <a title href="#">
              <img key={index} alt src={item.Image} />
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
              &nbsp; {item.name}
              &nbsp;<i className="fa fa-book" />
              &nbsp;<a title="View all posts" href="#">
                {item.category}
              </a>
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
        <div className="widget site-sidebar">
          <h2 className="widget-title">Search</h2>
          <form action="index.html" id="search-form" className="search-form" role="form" method="get">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search...." />
              <span className="input-group-addon">
                <i className="fa fa-search" />
              </span>
            </div>
            <input type="hidden" defaultValue="submit" />
          </form>
          {/* end #search-form  */}
        </div>
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
            <li>
              <a title="View all posts filed under Environment Right" href="#">Direct Donation</a>
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
        <div className="widget site-sidebar">
          <h2 className="widget-title">Tags</h2>
          <ul className="widget-recent-tags clearfix">
            <li>
              <a href title>
                claycold</a>
            </li>
            <li>
              <a href title>
                crushing</a>
            </li>
            <li>
              <a href title>
                chattels</a>
            </li>
            <li>
              <a href title>
                dinarchy</a>
            </li>
            <li>
              <a href title>
                cienaga</a>
            </li>
            <li>
              <a href title>
                doolie</a>
            </li>
          </ul>
          {/*  end .widget-recent-tags */}
        </div>
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

export default  Blog;
