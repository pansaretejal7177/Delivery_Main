import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./Request.css";
import { Grid, Paper, Typography, Button, TextField } from "@material-ui/core";
import { EditText } from "react-edit-text";
import { EditTextarea } from "react-edit-text";
import "./Request.css";
import { db } from "../firebaseConfig";
const GridWrapper = styled.div`
  margin-left: 20em;
`;

function Request() {
  const [productName, setproductName] = useState();
  const [count, setCount] = useState();
  const [date, setDate] = useState();
  const [status, setStatus] = useState();
  const [requests, setRequests] = useState([]);
  useEffect(() => {
    db.collection("requests").onSnapshot((snapshot) => {
      setRequests(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          requests: doc.data(),
        }))
      );
    });
  }, []);

  const submit = (e) => {
    e.preventDefault();
    db.collection("requests").add({
      productName: productName,
      count: count,
      date: date,
      status: "pending",
    });

    setproductName("");
    setCount("");
    setDate("");
    setStatus("");
  };

  console.log(requests);

  return (
    <GridWrapper>
      <div class="card mb-4">
        <div class="card-header">
          <i class="fas fa-table me-1"></i>
          Request
        </div>
        <br></br>
        <div className="req">
          <div>
            Enter productName:
            <input className="count" type="text" value={productName} onChange={(e) => setproductName(e.target.value)} />
          </div>

          <div>
            Enter the Count:
            <input className="count" type="text" value={count} onChange={(e) => setCount(e.target.value)}/>
          </div>

          <div>
            Enter Date:
            <input className="count" type="text" value={date} onChange={(e) => setDate(e.target.value)} />
          </div>
     
        <div>
          <Button color="primary" onClick={submit} style={{ margin: "40px 0px" }} variant="contained" >
            Send Request
          </Button>
        </div>
        </div>

        <div></div>
        <hr></hr>
        <div class="table100 ver5 m-b-110">
          <div class="table100-head">
            <table>
              <thead>
                <tr class="row100 head">
                  <th class="cell100 column1">Product Name</th>
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
                {requests &&
                  requests.map(({ id, requests }) => {
                    return (
                      <tr key={id}>
                        <td>{requests.productName}</td>
                        <td>{requests.count}</td>
                        <td>{requests.date}</td>
                        <td>{requests.status}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </GridWrapper>
  );
}
export default Request;
