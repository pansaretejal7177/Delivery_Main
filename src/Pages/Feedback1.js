import { Button } from 'bootstrap'
import React,{ useState } from 'react'
import styled from "styled-components"
import { Form } from 'react-bootstrap'
import {addDoc,collection} from 'firebase/firestore'
import { db } from "./firebase"
const GridWrapper = styled.div`
  margin-left: 20em;
`;
export default function Feedback1() {
  const [email,setEmail] = useState('');
  const [feedbackt,setFeedbackt] = useState('') ;
  function handleSubmit(e){
    e.preventDefault()
    if(email === ''){
      return
    }

   const feedbackCollRef = collection(db,'feedback')
   addDoc(feedbackCollRef,{email,feedbackt}).then(response => {
     console.log(response)
   }).catch(error => {
     console.log(error.message)
   })

   setEmail('');
   setFeedbackt('');
  }
  return (
    <GridWrapper>
      <div className="cb text-white ">
      <form onSubmit={handleSubmit}>
        <div className="p-4" style={{ marginTop: "-5%", zIndex: "1", borderRadius: "10px", }}>
          <div classname="pp" style={{ color: "rgb(0, 0, 0)", marginTop: "38%", display: "flex", flexDirection: "column", alignItems: "center", fontSize: "17px", fontWeight: "bold", }}>
            <div class="d-flex" style={{paddingBottom:"20px", width:"100%"}}>
              
              <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value) }required/>
              
            </div>
            <div className="d-flex" style={{paddingBottom:"20px", width:"100%"}}>
            <textarea id="textarea" name="feedbackt" rows="4" cols="50" style={{border:"none"}} placeholder="   Enter Feedback" value={feedbackt} onChange={e => setFeedbackt(e.target.value)} required/>
            
            </div>
            <div className="d-flex">
            <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
        </form>
      </div>
    </GridWrapper>
  )
  }