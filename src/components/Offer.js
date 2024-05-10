import React from 'react'
import pic1 from './images/imgforoffer.jpeg'

function Offer() {
    
  return (
        <div class="container my-3">
		<div class="container text-center">
			<h1>Best Offers</h1>
			<div class="row align-items-center my-3">
				<div class="col">
					<div class="card" style={{width: "18rem"}}>
						<img src={pic1} class="card-img-top" alt="network error"/>
						<div class="card-body">
							<h5 class="card-title">One Month</h5>
							<h3 class="card-text"><del>1000 <span>RS</span></del></h3>
                            <p class="card-text text-success">Discount : <span>40% OFF</span></p>
                            <p class="card-text">Offer Price : 600 RS</p>
							<input id="user_id" type="hidden" name="userid"value="<%=user1.getUid()%>"/> 
                            <input id="payment_600" type="hidden" name="amount" value="600"/>
							<button type="button" onClick="paymentStart_600()" class="btn btn-warning">Pay Now</button>
                        </div>
					</div>
				</div>
				<div class="col">
					<div class="card" style={{width: "18rem"}}>
						<img src={pic1} class="card-img-top" alt="network error"/>
						<div class="card-body">
							<h5 class="card-title">Three Month</h5>
							<h3 class="card-text"><del>3000 <span>RS</span></del></h3>
                            <p class="card-text text-success"> Discount : <span>50% OFF</span></p>
                            <p class="card-text">Offer Price : 1500 RS</p>
							<input id="user_id" type="hidden" name="userid" value=""/> 
                            <input id="payment_1500" type="hidden" name="amount" value="1500"/>
							<button type="button" onClick="paymentStart_1500()" class="btn btn-warning">Pay Now</button>
                        </div>
					</div>
				</div>
				<div class="col">
					<div class="card" style={{width: "18rem"}}>
						<img src={pic1} class="card-img-top" alt="network error"/>
						<div class="card-body">
							<h5 class="card-title">Six Month</h5>
							<h3 class="card-text"><del>6000 <span>RS</span></del></h3>
                            <p class="card-text text-success">Discount : <span>60% OFF</span></p>
                            <p class="card-text">Offer Price : 2400 RS</p>
							<input id="user_id" type="hidden" name="userid"value="<%=user1.getUid()%>"/> 
                            <input id="payment_2400" type="hidden" name="amount" value="2400"/>
							<button type="button" onClick="paymentStart_2400()" class="btn btn-warning">Pay Now</button>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card" style={{width: "18rem"}}>
						<img src={pic1} class="card-img-top" alt="network error"/>
						<div class="card-body">
							<h5 class="card-title">One Year</h5>
							<h3 class="card-text"><del>12000 <span>RS</span></del></h3>
							<p class="card-text text-success">Discount : <span>65% OFF</span></p>
                            <p class="card-text">Offer Price : 5000 RS</p>
							<input id="user_id" type="hidden" name="userid" value="<%=user1.getUid()%>"/> 
                            <input id="payment_5000"type="hidden" name="amount" value="5000"/>
							<button type="button" onClick="paymentStart_5000()" class="btn btn-warning">Pay Now</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Offer
