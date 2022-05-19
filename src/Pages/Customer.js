import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import styled from 'styled-components';
import './Customer.css';
const GridWrapper = styled.div`
margin-left:20em;`;

function Customer() {

	const [subscriptions, setsubscriptions ] = useState([]);
	useEffect(() => {
		db.collection('subscription').onSnapshot(snapshot => {
			setsubscriptions(snapshot.docs.map(doc => ({
			  id : doc.id,
			  subscription : doc.data()
			})));
		  })
		}, [])
	  
		console.log(subscriptions); 

    return(
<GridWrapper>
<div class="card mb-4">
          <div class="card-header">
            <i class="fas fa-table me-1"></i>
            Customer
          </div>
   <div className='Customer'>
   <div class="card mb-4">
   <br></br>
            <div class="limiter">
				<div class="table100 ver5 m-b-110">
					<div class="table100-head">
						<table>
							<thead>
								<tr class="row100 head">
									<th class="cell100 column1">Customer name</th>
									<th class="cell100 column2">Subscribed Newspaper</th>
									<th class="cell100 column3">Address</th>
									<th class="cell100 column4">Contact No</th>
									<th class="cell100 column5">Start Date</th>
									<th class="cell100 column6">End Date</th>

								</tr>
							</thead>
						</table>
					</div>

					<div class="table100-body js-pscroll">
						<table>
							<tbody>
							{
								subscriptions && subscriptions.map(({id,subscription}) => {
                                                return (
                                                    <tr key = {id}>
                                                    <td>{subscription.firstName}{subscription.lastname}</td>
                                                    <td>{subscription.ProductName}</td>
                                                    <td>{subscription.address}</td>
                                                    <td>{subscription.contact}</td>
                                                    <td>{subscription.StartDate}</td>
													<td>{subscription.EndDate}</td>
                                                    </tr>
                                                )
                                            })
                                        }


								
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
</div>
</div>
</GridWrapper>
    );

}
export default Customer;
