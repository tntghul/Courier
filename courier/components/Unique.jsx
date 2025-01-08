import React from 'react'

const Unique = () => {
  return (
    <>
    <div className="container mt-5 mb-5">
        <div className="row">
            <h2 className='d-flex justify-content-center display-4 mb-5 mt-5'>Our Unique Value Proposition</h2>
            <div className="col-lg-4 d-flex flex-column align-items-center mt-4">
            <i className="bi bi-clock-history display-1"></i>
                <p className='display-6 fs-5 mt-5'>Sender/Recipients enjoy quicker and more cost-effictive delivery services</p>
            </div>
            <div className="col-lg-4 d-flex flex-column align-items-center mt-4">
            <i className="bi bi-currency-dollar display-1"></i>
                <p className='display-6 fs-5 mt-5'>Travel Agencies can earn by utilizing their unused/extra luggage space effectively.</p>
            </div>
            <div className="col-lg-4 d-flex flex-column align-items-center mt-4">
            <i className="bi bi-cloud-download display-1"></i>
                <p className='display-6 fs-5 mt-5'>The environment experiences a decrease in delivery emissions,contributing to sustainability efforts.</p>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Unique
