import React from 'react'
import pic1 from './images/imgforoffer.jpeg'

function Offer() {
    
  return (
    <div className="container d-flex">
			
				<div className="card" style={{width: "18rem", padding:"1rem", margin:"1rem",  borderTop:"2px solid green", borderBottom:"2px solid green"}}>
					<div className="card-header text-center" style={{borderTop:"2px solid black"}}><strong>Offer for 1-Month</strong></div>
  					<img src={pic1} className="card-img-top" alt="network error" />
  					<div className="card-body" style={{borderBottom:"2px solid black"}}>
						<div className='text-center'>
							<h6 className="card-text"><del>1000 <span>RS</span></del></h6>
							<p className="card-text">Price : 600 RS</p>
                            <p className="card-text text-success"> <span>40% OFF</span></p>
							{/* <input id="user_id" type="hidden" name="userid"value="<%=user1.getUid()%>"/> 
                            <input id="payment_600" type="hidden" name="amount" value="600"/>
							<button type="button" onClick="paymentStart_600()" className="btn btn-warning">Pay Now</button> */}    
						</div>		
  					</div>
				</div>
			
				<div className="card" style={{width: "18rem", padding:"1rem", margin:"1rem", borderTop:"2px solid green", borderBottom:"2px solid green"}}>
					<div className="card-header text-center" style={{borderTop:"2px solid black"}}><strong>Offer for 3-Month</strong></div>
  					<img src={pic1} className="card-img-top" alt="network error" />
  					<div className="card-body" style={{borderBottom:"2px solid black"}}>
						<div className=' text-center' >
							<h6 className="card-text"><del>3000 <span>RS</span></del></h6>
                            <p className="card-text">Price : 1500 RS</p>
                            <p className="card-text text-success"> <span>50% OFF</span></p>
							{/* <input id="user_id" type="hidden" name="userid"value="<%=user1.getUid()%>"/> 
                            <input id="payment_600" type="hidden" name="amount" value="600"/>
							<button type="button" onClick="paymentStart_600()" className="btn btn-warning">Pay Now</button> */}
						</div>		
  					</div>
				</div>
			
			
				<div className="card" style={{width: "18rem", padding:"1rem", margin:"1rem",borderTop:"2px solid green", borderBottom:"2px solid green"}}>
					<div className="card-header text-center"style={{borderTop:"2px solid black"}}><strong>Offer for 6-Month</strong></div>
  					<img src={pic1} className="card-img-top" alt="network error" />
  					<div className="card-body" style={{borderBottom:"2px solid black"}}>
					  		<div className=' text-center' >
								<h6 className="card-text"><del>6000 <span>RS</span></del></h6>
                            	<p className="card-text">Price : 2400 RS</p>
                            	<p className="card-text text-success"> <span>60% OFF</span></p>
								{/* <input id="user_id" type="hidden" name="userid"value="<%=user1.getUid()%>"/> 
                            	<input id="payment_600" type="hidden" name="amount" value="600"/>
								<button type="button" onClick="paymentStart_600()" className="btn btn-warning">Pay Now</button> */}
							</div>	
  					</div>
				</div>
			
				<div className="card" style={{width: "18rem", padding:"1rem", margin:"1rem", borderTop:"2px solid green", borderBottom:"2px solid green"}}>
					<div className="card-header text-center" style={{borderTop:"2px solid black"}}><strong>Offer for 12-Month</strong></div>
  					<img src={pic1} className="card-img-top" alt="network error" />
  					<div className="card-body" style={{borderBottom:"2px solid black"}}>
					    	<div className=' text-center'>
								<h6 className="card-text "><del>12000 <span>RS</span></del></h6>
								<p className="card-text">Price : 5000 RS</p>
                            	<p className="card-text text-success"> <span>65% OFF</span></p>
								{/* <input id="user_id" type="hidden" name="userid"value="<%=user1.getUid()%>"/> 
                            	<input id="payment_600" type="hidden" name="amount" value="600"/>
								<button type="button" onClick="paymentStart_600()" className="btn btn-warning">Pay Now</button> */}
							</div>	
  					</div>
				</div>
			</div>
	
  )
}

export default Offer
