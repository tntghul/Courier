import React from 'react'
import stock from '../src/assets/stock.webp'

const Tship = () => {
  return (
    <>

     <div className="container mb-5">
        <div className="row">
            <div className="col-lg-6 mt-5">
                <h6 className='mt-5 fs-5 display-1'>TRACK ORDER</h6>
                <h1 className='mt-5 display-1'><b>TRACK YOUR SHIPMENT</b></h1>
                <form action="">
                    <label htmlFor="" className='form control mt-3'>Enter the Consignment No.</label>
                    <input type="text" className='form -control m-3 rounded-line' placeholder='Enter tracking number' />
                    <input type="submit" value="Track Result" className='btn btn-warning' />
                </form>
            </div>
            <div className="col-lg-4 mt-5">
                    <img src={stock} className='img-fluid mt-5 mb-5' alt="" />
                </div>
        </div>
     </div>

    </>
  )
}

export default Tship
