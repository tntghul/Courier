import React from 'react'
import stock from '../src/assets/stock.webp'

const Habout = () => {
  return (
    <>
      <div className="container mb-5 justify-content-center">
        <div className="row g-0">
            <h1 className='d-flex justify-content-center mt-5 display-3 underline'>About Us</h1>
            <div className="col-lg-1"></div>
            <div className="col-lg-5 mt-5">
              <img src={stock} className='img-fluid' alt="" />
            </div>
            <div className="col-lg-5 mt-5">
                <h2 className='display-5 fs-1'>Who are we?</h2>
                <p className='display-3 fs-6 mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro magni consectetur quo possimus praesentium, dignissimos quas alias aliquam repudiandae quae itaque quibusdam vitae harum deserunt. Assumenda voluptatum nobis neque modi.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident id animi reprehenderit voluptatum non sint ut mollitia modi officia odit, deleniti earum dignissimos nulla facere voluptatibus dolor sit velit! Asperiores?
                </p>
                <p className='fs-6 display-1 mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab voluptatum corrupti quis laboriosam fugiat soluta ipsum accusamus, asperiores reiciendis eos eveniet.</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Habout
