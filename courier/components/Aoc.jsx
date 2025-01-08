import React from 'react'
import aoc from '../src/assets/aoc.png'

const Aoc = () => {
  return (
    <>
      
      <div className="container">
        <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-6">
                <h2 className='display-4 mt-4 mb-5'>About Our Company</h2>
                <p className='display-4 fs-5'>QUERIERsathi PVT LTD is a groundbreaking peer to-peer product delivery startup revolutionizing the traditional courier and delivery industry. the company aims to leverageour registered buses running daily between Delhi, Noida, Gurugram, Jaipur, Agra, and Provide faster, cost-effective and eco-friendly delivery solutins.</p>
                <p className='display-4 fs-5'>Peer-to-peer delivery service for parcel and document sending. The platform that connects senders directly with verified travelers to deliver parcels and documents. It also provides door-to-door pickup and delivery service. the websites allows users to book directly on the website, and track the shipment. It also allows travellers to get listed on the platform for service based on the the travel dates</p>
                <p className='display-4 fs-5'>Peer-to-peer delivery service for parcel and document sending. The platform that connects senders directly with verified travelers to deliver parcels and documents. It also provides door-to-door pickup and delivery service. the websites allows users to book directly on the website, and track the shipment. It also allows travellers to get listed on the platform for service based on the the travel dates</p>          
                <p className='display-4 fs-5'>The websites allows users to book directly on the website, and track the shipment. It also allows travellers to get listed on the platform for service based on the the travel dates</p>
            </div>
            <div className="col-lg-4">
                <img src={aoc} className='img-fluid mt-5 mb-5' alt="" />
            </div>
        </div>
      </div>


    </>
  )
}

export default Aoc
