import React from 'react'

export default function About(props) {
  return (
   <div className="container my-2">
        <div className="accordion" id="accordionExample" >
            <div className="accordion-item" >
                <h2 className="accordion-header" id="headingOne" >
                    <button style={{backgroundColor: props.mode === 'dark'?'black':'white'}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <h6 style={{color: props.mode === 'dark'?'white':'black'}}>{props.title1}</h6>
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{backgroundColor: props.mode === 'dark'?'black':'white'}}  >
                       <p style={{color: props.mode === 'dark'?'white':'black'}}>Set Information About Us</p>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button style={{backgroundColor: props.mode === 'dark'?'black':'white'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                         <h6 style={{color: props.mode === 'dark'?'white':'black'}}>{props.title2}</h6>
                        </button>
                    </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{backgroundColor: props.mode === 'dark'?'black':'white'}}>
                        <p style={{color: props.mode === 'dark'?'white':'black'}}>Write Details About Technology To Be Use</p>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button style={{backgroundColor: props.mode === 'dark'?'black':'white'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <h6 style={{color: props.mode === 'dark'?'white':'black'}}>{props.title3}</h6>
                        </button>
                    </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor: props.mode === 'dark'?'black':'white'}}>
                           <p style={{color: props.mode === 'dark'?'white':'black'}}>Set Contact Details</p>
                        </div>
                </div>
            </div>
        </div>

    </div>
  )
}

