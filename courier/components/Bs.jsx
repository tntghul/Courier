// import React from 'react'

// const Bs = () => {
//     return (
//         <>

//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-1"></div>
//                     <div className="col-lg-7 mt-5 ">
//                         <h2 className='display-4'>BOOK SHIPMENT</h2>
//                         <form type="" className='border rounded p-4 mt-5 mb-5 bg-secondary'>
//                             <div className="mb-3">
//                                 <label for="" className="form-label mt-4">Origin Pincode *</label>
//                                 <input type="text" className="form-control" aria-describedby="" />
                               
//                             </div>
//                             <div className="mb-3">
//                                 <label for="" className="form-label">Destination Pincode *</label>
//                                 <input type="text" className="form-control"/>
//                             </div>
//                             <div className="mb-3">
//                                 <label for="" className="form-label">Select Package Contents *</label>
//                                 <input type="text" className="form-control"/>
//                             </div>
//                             <div className="mb-3">
//                                 <label for="" className="form-label">Describe Your Package *</label>
//                                 <input type="text" className="form-control"/>
//                             </div>
//                             <div className="mb-3">
//                                 <label for="" className="form-label">Select Package Size *</label>
//                                 <input type="text" className="form-control"/>
//                             </div>

//                             <button type="submit" className="btn btn-success mb-4">Calculate Price</button>
//                             <input type="submit" value="Next" className='btn btn-warning form-control' />
//                         </form>
//                     </div>
//                 </div>
//             </div>


//         </>
//     )
// }

// export default Bs


import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

function Bs() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      
      content: (
        <div className="container">
            <div className="col-lg-6">
            <div className="mb-3">
          <label className="form-label">Origin Pincode</label>
          <input type="text" className="form-control" id="name" name="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Destination Pincode</label>
          <input type="text" className="form-control" id="name" name="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Select Package Contents</label>
          <select className="form-select" id="options" name="options" required>
            <option value="">Select an option</option>
            <option value="option1">Books & Documents</option>
            <option value="option2">Cloths & Personal Items</option>
            <option value="option3">Consumables</option>
            <option value="option4">Electronics</option>
            <option value="option5">Households Items</option>
            <option value="option6">Sports Equipment</option>
            <option value="option7">Others</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Describe Your Packages</label>
          <select className="form-select" id="options" name="options" required>
            <option value="">Select an option</option>
            <option value="option1">Document/Envelope</option>
            <option value="option2">Pouch/Plastic</option>
            <option value="option3">Personal Bag / Shoe Box</option>
            <option value="option4">Carton/ Box/ Suitcase</option>
            <option value="option5">Others,Please Specify</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Select Packages Size</label>
          <select className="form-select" id="options" name="options" required>
            <option value="">Select an option</option>
            <option value="option1">1-500 GM(XS)</option>
            <option value="option2">500 GM - 2KG(S)</option>
            
          </select>
        </div>
        </div>
        </div>
      ),
    },
    {
      title: "Step 2",
      content: (
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" required />
        </div>
      ),
    },
    {
      title: "Step 3",
      content: (
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password" required />
        </div>
      ),
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-body">
          <div className="d-flex justify-content-between mb-4">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`progress-step ${index <= currentStep ? "active" : ""}`}
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: index <= currentStep ? "#007bff" : "#e9ecef",
                  color: index <= currentStep ? "#fff" : "#6c757d",
                  fontWeight: "bold",
                }}
              >
                {index + 1}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            <h3 className="mb-3">{steps[currentStep].title}</h3>
            {steps[currentStep].content}

            <div className="d-flex justify-content-between">
              {currentStep > 0 && (
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handlePrev}
                >
                  Previous
                </button>
              )}

              {currentStep < steps.length - 1 && (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleNext}
                >
                  Next
                </button>
              )}

              {currentStep === steps.length - 1 && (
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Bs;
