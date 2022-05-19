import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import {Grid, Paper, Typography,Button,TextField} from '@material-ui/core';
import './Notify.css';
import { EditText } from 'react-edit-text';
import { db } from '../firebaseConfig'
const GridWrapper = styled.div`
margin-left:20em;`;

function Notify() {
  const [Newspaper , setNewspaper] = useState();
  const [count , setCount] = useState();
  const [date , setDate] = useState();
  const [status , setStatus] = useState();
  const [Notify, setNotify ] = useState([]);
  useEffect(() => {
      db.collection('Notify').onSnapshot(snapshot => {
          setNotify(snapshot.docs.map(doc => ({
            id : doc.id,
            Notify : doc.data()
          })));
        })
      }, [])
      
  const submit = (e) => {
    e.preventDefault();
    db.collection("Notify").add({
      Newspaper: Newspaper,
      count: count,
      date: date,
      status:"pending"

    });
  
    setNewspaper("");
    setCount("");
    setDate("");
    setStatus("");
  };
    
      console.log(Notify);
    return(
<GridWrapper>
<div class="card mb-4">
          <div class="card-header">
            <i class="fas fa-table me-1"></i>
            Notify
          </div>
    <br></br>
      <div className="req">
      <div>
      Enter Newspaper:
      <input className='count' type="text" value={Newspaper} 
      onChange={(e) => setNewspaper(e.target.value)}/></div>
      <div>
      Enter Remaining Count:
      <input className='count' type="text"value={count} 
      onChange={(e) => setCount(e.target.value)}/>
      </div>
      <div>
      Enter Date:
      <input className='count' type="text"value={date} 
      onChange={(e) => setDate(e.target.value)}/>
      </div>
      
    <div>
      <Button color ='primary' onClick={submit} style={{margin:'30px 0px'}} variant = 'contained'>Notify</Button>                                
    </div>
  

      </div>
      <div>
      </div>
  
    
      <hr></hr>
      <div class="table100 ver5 m-b-110">
					<div class="table100-head">
						<table>
							<thead>
								<tr class="row100 head">
									<th class="cell100 column1">Newspaper</th>
									<th class="cell100 column2">Count</th>
									<th class="cell100 column3">Date</th>
									<th class="cell100 column4">Status</th>
								</tr>
							</thead>
						</table>
					</div>

					<div class="table100-body js-pscroll">
						<table>
							<tbody>
              {
                                            Notify && Notify.map(({id,Notify}) => {
                                                return (
                                                    <tr key = {id}>
                                                    <td>{Notify.Newspaper}</td>
                                                    <td>{Notify.count}</td>
                                                    <td>{Notify.date}</td>
                                                    <td>{Notify.status}</td>
                                                    </tr>
                                                )
                                            })
                                        }
							</tbody>
						</table>
					</div>
				</div>
        </div>
	
</GridWrapper>
    );

}
export default Notify;
