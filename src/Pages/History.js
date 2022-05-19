import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import styled from 'styled-components';
import './History.css';
const GridWrapper = styled.div`
margin-left:20em;
`;
function History() {
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
            History
          </div>
   <div className='History'>
   <div class="card mb-4">
   <br></br>
            <div class="limiter">
				<div class="table100 ver5 m-b-110">
					<div class="table100-head">
						<table>
							<thead>
								<tr class="row100 head">
									<th class="cell100 column1">Area Code</th>
									<th class="cell100 column2">Area</th>
									<th class="cell100 column3">Pin Code</th>
									<th class="cell100 column4">Status</th>
								</tr>
							</thead>
						</table>
					</div>

					<div class="table100-body js-pscroll">
						<table>
							<tbody>
							

								
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
export default History;
