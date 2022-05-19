import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import './Customer.css';
import {Grid, Paper, Typography,Button,TextField} from '@material-ui/core';
import { EditText } from 'react-edit-text';
import { db } from '../firebaseConfig'
const GridWrapper = styled.div`
margin-left:20em;`;

function Markhistory() {

    const [customers, setcustomers ] = useState([]);
	useEffect(() => {
		db.collection('customers').onSnapshot(snapshot => {
			setcustomers(snapshot.docs.map(doc => ({
			  id : doc.id,
			  customers : doc.data()
			})));
		  })
		}, [])
	  
		console.log(customers); 
    return(
<GridWrapper>
<div class="card mb-4">
          <div class="card-header">
            <i class="fas fa-table me-1"></i>
            Mark Successfully Completed Area
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
                                    <th class="cell100 column1">Mark</th>
									<th class="cell100 column2">Area Code</th>
									<th class="cell100 column3">Area</th>
									<th class="cell100 column4">Pin Code</th>
									</tr>
							</thead>
						</table>
					</div>

					<div class="table100-body js-pscroll">
						<table>
							<tbody>
							{
								customers && customers.map(({id,customers}) => {
                                                return (
                                                    
                                                    <tr key = {id}>
                                                    <td><input type="checkbox"/></td>
                                                    <td>{customers.areaCode}</td>
                                                    <td>{customers.areaName}</td>
                                                    <td>{customers.pincode}</td>                                                  
                                                    </tr>
                                                )
                                            })
                                        }


								
							</tbody>
						</table>
					</div>
                    
				</div>
			</div>
            <br></br>
                    <div>
                    <Button type='Submit'
                        color ='primary' style={{margin:'40px 0px'}} variant = 'contained' >Save</Button>
                    </div>
		</div>
</div>
</div>
</GridWrapper>
    );

}
export default Markhistory;
