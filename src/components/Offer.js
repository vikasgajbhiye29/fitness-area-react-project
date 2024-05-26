import React from 'react'
import offer_40 from './images/offer_1stMonth.png'
import offer_50 from './images/offer_2ndMonth.png'
import offer_60 from './images/offer_3rdMonth.png'
import offer_65 from './images/offer_4thMonth.png'

function Offer() {
    
  return (
    	<div className='container my-2' style={{marginBottom:"1rem"}} >
				<div className='row'>
					<div className='my-3 col-sm-3'>
					<div className="card " style={{border:"2px solid yellow"}}>
					{/* <div className="card-header text-center" ><strong>Offer for 1-Month</strong></div> */}
  					<img src={offer_40} className="card-img-top" alt="network error" />
  					{/* <div className="card-body" >
						<div className='text-center'>
							<h6 className="card-text"><del>1000 <span>RS</span></del></h6>
							<p className="card-text">Price : 600 RS</p>
                            <p className="card-text text-success"> <span>40% OFF</span></p>
							<input id="user_id" type="hidden" name="userid"value="<%=user1.getUid()%>"/> 
                            <input id="payment_600" type="hidden" name="amount" value="600"/>
							<button type="button" onClick="paymentStart_600()" className="btn btn-warning">Pay Now</button>    
						</div>		
  					</div> */}
					</div>
					</div>

					<div className='my-3 col-sm-3'>
					<div className="card" style={{border:"2px solid yellow"}}>
					{/* <div className="card-header text-center" ><strong>Offer for 3-Month</strong></div> */}
  					<img src={offer_50} className="card-img-top" alt="network error" />
  					{/* <div className="card-body" >
						<div className=' text-center' >
							<h6 className="card-text"><del>3000 <span>RS</span></del></h6>
                            <p className="card-text">Price : 1500 RS</p>
                            <p className="card-text text-success"> <span>50% OFF</span></p>
							<input id="user_id" type="hidden" name="userid"value="<%=user1.getUid()%>"/> 
                            <input id="payment_600" type="hidden" name="amount" value="600"/>
							<button type="button" onClick="paymentStart_600()" className="btn btn-warning">Pay Now</button>
						</div>		
  					</div> */}
						</div>
					</div>

					<div className='my-3 col-sm-3'>
					<div className="card" style={{border:"2px solid yellow"}}>
					{/* <div className="card-header text-center"><strong>Offer for 6-Month</strong></div> */}
  					<img src={offer_60} className="card-img-top" alt="network error" />
  						{/* <div className="card-body" >
					  		<div className=' text-center' >
								<h6 className="card-text"><del>6000 <span>RS</span></del></h6>
                            	<p className="card-text">Price : 2400 RS</p>
                            	<p className="card-text text-success"> <span>60% OFF</span></p>
								<input id="user_id" type="hidden" name="userid"value="<%=user1.getUid()%>"/> 
                            	<input id="payment_600" type="hidden" name="amount" value="600"/>
								<button type="button" onClick="paymentStart_600()" className="btn btn-warning">Pay Now</button>
							</div>	
  						</div> */}
							</div>
					</div>

					<div className='my-3 col-sm-3'>
					<div className="card" style={{border:"2px solid yellow"}}>
					{/* <div className="card-header text-center" ><strong>Offer for 12-Month</strong></div> */}
  					<img src={offer_65} className="card-img-top" alt="network error" />
  						{/* <div className="card-body" >
					    	<div className=' text-center'>
								<h6 className="card-text "><del>12000 <span>RS</span></del></h6>
								<p className="card-text">Price : 5000 RS</p>
                            	<p className="card-text text-success"> <span>65% OFF</span></p>
								<input id="user_id" type="hidden" name="userid"value="<%=user1.getUid()%>"/> 
                            	<input id="payment_600" type="hidden" name="amount" value="600"/>
								<button type="button" onClick="paymentStart_600()" className="btn btn-warning">Pay Now</button>
							</div>	
  						</div> */}
						</div>
					</div>
				</div>
		</div>
	
  )
}

export default Offer
