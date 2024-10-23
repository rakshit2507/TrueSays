import React from 'react';
import OwlCarousel from 'react-owl-carousel';

function Team() {
    return (
        <React.Fragment>
            {/* <div className="container-lg">
                    <div className="row ">
                        <div className="col-lg-12">
                            <div id="carouselExampleIndicators" className="carousel slide mt-5 cards" data-bs-ride="carousel">                             
                                <div className="card w-50 mx-3" >
                                    <img src="assets/ind1.jpg" className="card-img px-3 py-3"/>
                                    <div className="card-body ">
                                        <p className="card-text text-center">Director</p>
                                    </div>
                                </div>
                                <div className="card w-50 mx-3" >
                                    <img src="assets/ind1.jpg" className="card-img px-3 py-3"/>
                                    <div className="card-body">
                                        <p className="card-text text-center">Director and CEO</p>
                                    </div>
                                </div>
                                <div className="card w-50 mx-3" >
                                    <img src="assets/ind1.jpg" className="card-img px-3 py-3"/>
                                    <div className="card-body">
                                        <p className="card-text text-center">HR Manager</p>
                                    </div>
                                </div>
                                <div className="card w-50 mx-3" >
                                    <img src="assets/ind1.jpg" className="card-img px-3 py-3"/>
                                    <div className="card-body">
                                        <p className="card-text text-center">Product Manager</p>
                                    </div>
                                </div>
                                <div className="card w-50 mx-3" >
                                    <img src="assets/ind1.jpg" className="card-img px-3 py-3"/>
                                    <div className="card-body">
                                        <p className="card-text text-center">Account Manager</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div> */}
            <section id="team">
                <div classname="container">
                    <div classname="row">
                        <div classname="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                            <div classname="sec-heading text-center">
                                <div classname="section-title">
                                    <h2 className="text-center">Our Team</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div classname="testimonial-box">
                    <div classname="container">
                        <div classname="row">
                            <div classname="col-lg-12">
                                <OwlCarousel
                                    items={4}
                                    loop={true}
                                    nav={false}
                                    dots={false}
                                    autoplay={true}
                                    autoplayTimeout={5000}
                                    smartSpeed={750}
                                    margin={20}

                                    classname="team-slider owl-carousel">
                                    <div classname="single-box text-center card-body">
                                        <div classname="img-area">
                                            <img
                                                alt="Subhamay sarkar"
                                                classname="img-fluid move-animation"
                                                src="assets/11.jpeg"
                                            />
                                        </div>
                                        <div classname="info-area">
                                            <h4>Subhamay Sarkar</h4>
                                            <p>Director and CEO</p>
                                        </div>
                                    </div>
                                    <div classname="single-box text-center">
                                        <div classname="img-area">
                                            <img
                                                alt=""
                                                classname="img-fluid move-animation"
                                                src="assets/dharam1.jpeg"
                                            />
                                        </div>
                                        <div classname="info-area">
                                            <h4>Dharam Pal</h4>
                                            <p>Director</p>
                                        </div>
                                    </div>
                                    {/* <div classname="single-box text-center">
                                            <div classname="img-area">
                                                <img
                                                    alt=""
                                                    classname="img-fluid move-animation"
                                                    src="assets/subir.jpeg"
                                                />
                                            </div>
                                            <div classname="info-area">
                                                <h4>Subir Sarkar</h4>
                                                <p>Director</p>
                                            </div>
                                        </div> */}
                                    <div classname="single-box text-center">
                                        <div classname="img-area">
                                            <img
                                                alt=""
                                                classname="img-fluid move-animation"
                                                src="assets/pinki1.jpeg"
                                            />
                                        </div>
                                        <div classname="info-area">
                                            <h4>Pinki Yadav</h4>
                                            <p>HR Manager</p>
                                        </div>
                                    </div>
                                    <div classname="single-box text-center">
                                        <div classname="img-area">
                                            <img
                                                alt=""
                                                classname="img-fluid move-animation"
                                                src="assets/nikita.jpg"
                                            />
                                        </div>
                                        <div classname="info-area">
                                            <h4>Nikita Rajput</h4>
                                            <p>Product Manager</p>
                                        </div>
                                    </div>
                                    {/* <div classname="single-box text-center">
                                            <div classname="img-area">
                                                <img
                                                    alt=""
                                                    classname="img-fluid move-animation"
                                                    src="assets/nikita.jpg"
                                                />
                                            </div>
                                        </div> */}
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default Team;