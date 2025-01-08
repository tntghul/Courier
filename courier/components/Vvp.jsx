import React from 'react'
import aoc1 from '../src/assets/aoc1.png'

const Vvp = () => {
  return (
    <>
      <div className="container">
        <div className="row">
           
            <div className="col-lg-1"></div>
            <div className="col-lg-6 mt-5">
            <h2 className='display-4 mt-5'>Vision And Value Proposition</h2>
                <p className='display-4 fs-5 mt-5'> Our vision is to redefine logistics by fostering a communitity-driven ecosystem that optimizeses travelers' routes for efficient , same-day deliveries.</p>
               <p className='display-4 fs-5'> Affordability : Cost-effective solutions compared to traditional courier services.</p>
               <p className='display-4 fs-5'>Speed and Efficiency : Swift delivery facilitated by utilizing travelers' routes for faster transportation.</p>
               <p className='display-4 fs-5'> Security and Reliability : Trustworthy handling of packages ensured by reliable travelers and sender-vertified profiles.</p>
            </div>
            <div className="col-lg-4 mt-5">
                <img src={aoc1} className='img-fluid mt-5 mb-5' alt="" />
            </div>
        </div>
      </div>
    </>
  )
}

export default Vvp
