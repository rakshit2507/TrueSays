import React from 'react';
import { FaLaptop, FaBriefcase, FaCalendar } from "react-icons/fa";

function Home() {
  return (
    <React.Fragment>
      <div className="row g-0">
        <div class="col-md-12">
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="assets/slide-1.png" className="d-block w-100 carousel-home" alt="..." />
                <div className="carousel-caption d-md-block">
                  <h5>Welcome to True Says</h5>
                  <p> We True SaysTeam's are always with you.So Don't worry just let us know about your complaint so that we all can together make our future safe and
                    better.You just have to raise a complaint about your concern and we will find a solution about your concern.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="assets/slide-2.png" className="d-block w-100 carousel-home" alt="..." />
                <div className="carousel-caption d-md-block">
                  <h5>Don't Feel Alone</h5>
                  <p>If you ever feel lonely, If you ever feel that you are in a situation or something wrong is happening with you but you can't do anything because of you stay alone or you
                    dont have so much friend to share or you scared than you just raise a complaint we will help you as much we can.</p>                  </div>
              </div>
              <div className="carousel-item">
                <img src="assets/slide-3.png" className="d-block w-100 carousel-home" alt="..." />
                <div className="carousel-caption d-md-block">
                  <h5>No Need To Worry</h5>
                  <p>If You are thinking that after raise a complaint you will face any intergation. If you are thinking so than you are thinking wrong because your information will be safe and
                    secure. In some cases a verfication sms or cal you can get. otherwise you don't have to worry about complaint.
                  </p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden"></span>
            </button>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-4">
            <i className="display-5 text-success"><FaLaptop /></i>
            <h2 className="py-2 text-success">Online Crime</h2>
            <p>Today online crime,fraud, harassment is increasing day by day. so
              if you are facing one of this issue.Just raise a complaint through our portal or contact us..</p>
          </div>
          <div className="col-sm-4">
            <i className="display-5 text-success"><FaBriefcase /></i>
            <h2 className="py-2 text-success">Corporate Issue</h2>
            <p>We all are facing some harassement issue in corporate life. But we afraid to
              complain a cases beacuse of loosing our jobs.In that type of cases True says will help you.</p>
          </div>
          <div className="col-sm-4">
            <i className="display-5 text-success"><FaCalendar /></i>
            <h2 className="py-2 text-success">Long Process Of Justice</h2>
            <p>We all know now a days private sector is far better from other sector. So if our mission
              and vision works as we thought then our india and our future will be so benefit from True Says and the Justice will get as soon as possible.</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Home;