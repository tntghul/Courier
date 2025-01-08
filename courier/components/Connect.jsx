import React from 'react'

const Connect = () => {
  return (
    <>
     <div className="container">
        <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-5 mt-5">
                <h3 className='mb-5 display-5 text-warning'>Get in Touch And We'll Connect You Shortly</h3>
                <div className='d-flex border rounded text-warning p-4'>
                <i className="bi bi-phone display-4"></i>
                <p className='p-3 display-5 fs-4'>Call Us 24/7
                    7569856321
                </p>
                </div>
                <div className='d-flex border-warning rounded bg-warning p-4 mt-4 '>
                <i className="bi bi-whatsapp display-4"></i>
                <p className='p-3 display-5 fs-4'>WhatsApp help
                    7569856321
                </p>
                </div>
                <div className='d-flex border rounded text-warning p-4 mt-4 mb-5'>
                <i className="bi bi-envelope-at display-4"></i>
                <p className='p-3 display-5 fs-4'>Support
                    info@queriersathi.com
                </p>
                </div>
            </div>
            <div className="col-lg-5 mb-5">
            <h3 className='mb-5 display-5 text-warning mt-5'>Feel Free to Write Your Valuable Feedback</h3>
            <form action="">
                <label className='form-label mt-3'>Name</label>
                <input type="text" className='form-control mb-3' placeholder='Your name' />
                <label className=' form-label'>Email</label>
                <input type="email" className='form-control mb-3' placeholder='@gmail.com' />
                <label className='form-label'>Phone No.</label>
                <input type="text" className='form-control mb-3' placeholder='75*******4' />
                <label className='form-label'>Your Feedback</label>
                <textarea type="text-area" className='form-control' />
                <input type="submit" value="SUBMIT" className='btn btn-warning mt-4' />
            </form>
            </div>
        </div>
     </div>

    </>
  )
}

export default Connect
