import React from 'react';

function Mission() {
    return (
        <React.Fragment>
            <h1 className="text-center mt-5 text-primary">MISSION</h1>
            <p className="text-success mx-5 mt-3 text-center">Our Mission to reduce crime,harassment,rape,online fraud and many more.Everyone will think before making a mistake because everyone knows that if complaints are registered in this portal, then
                action will be taken on it.Neither we will support any corrupt people nor will we allow anyone to support them.</p>
            <div className="container">
                <div class="row miss_ion py-4">
                    <div class="col-3 "><img src="assets/11.png" /></div>
                    <div class="col-3 "><img src="assets/12.png" /></div>
                    <div class="col-3 "><img src="assets/13.png" /></div>
                    <div class="col-3 "><img src="assets/14.png" /></div>
                    <div class="col-3 "><img src="assets/15.png" /></div>
                    <div class="col-3 "><img src="assets/16.png" /></div>
                    <div class="col-3 "><img src="assets/17.png" /></div>
                    <div class="col-3 "><img src="assets/18.png" /></div>
                </div>
            </div>
            <div className="container bg-success ">
                <div className="row emer_gency d-flex">
                    <div className="col-lg-12">
                        <h1 className="m-5 mx-5 text-light">Emergency Service</h1>
                        <p className="mx-5 text-light">Our team works 24*7. So from day to night if you feel anything wrong can happen with you just use this section or call
                            our emergency service. We will provide you assistance as soon as possible.</p>
                    </div>
                    <div className="mx-5 m-3 mb-5 ">
                        <button type="button" className="btn btn-primary">Emergency Complaint</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Mission;