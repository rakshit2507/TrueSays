import React, { Component } from 'react';

export class WhyUs extends Component {
    render(){
        return(
          <React.Fragment>
              <h1 className="text-center mt-5 text-primary">WHY US? </h1>
                <div className="container mt-5">
          <div className="row">
            <div className="col-sm-4">
                
            <h2 className="py-2 text-success fs-3">Why True Says?</h2>
              <p>If we can do everything with Digital India then why can’t we register complaint cases. 
                  If there is an online register portal then why still so much harrasement,corruption, crime is happening. 
                  With the fear of the online register panel people should have committed crime at a lower rate. 
                  But it is increasing day by day without register the proper complaint in police station.</p>
            </div>
            <div className="col-sm-4">
            <h2 className="py-2 text-success fs-3">If there is police and lawyer then why would anyone complaint in the private sector?</h2>
              <p>The first thing is that he is not complaining in the private sector.He is just registering in our portal. 
                  We are the mediator. We will send the complaint to the respective station.</p>
            </div>
            <div className="col-sm-4">
              <h2 className="py-2 text-success fs-3">So why would anyone complaint to the mediator?</h2>
              <p>The first thing is that you don't need to go to the station.Secondly, if you are afraid that after making your complaint,
                   you may have problems. In that case you can hide your identity by giving proper evidence</p>
            </div>
          </div>
        </div>
        </React.Fragment>
        )
    }
}
export default WhyUs;