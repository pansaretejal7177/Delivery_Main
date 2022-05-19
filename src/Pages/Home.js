import React from "react";
import styled from "styled-components";
import "./Home.css";
import Customer from './Customer';
const GridWrapper = styled.div`
  margin-left: 20em;
`;

function Home() {
  
  return (
    <>
    <GridWrapper>
      <div className="products">
        <br></br>

        <div class="row">
          <div class="col-xl-3 col-md-6">
            <div class="card bg-primary text-white mb-4">
              <div class="card-body">
                View Customers <br></br>
              </div>
              <div class="card-footer d-flex align-items-center justify-content-between">
                <a class="small text-white stretched-link" href='/customer'>
                  View Details
                </a>
                <div class="small text-white">
                  <i class="fas fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6">
            <div class="card bg-warning text-white mb-4">
              <div class="card-body">
                View History<br></br> 
              </div>
              <div class="card-footer d-flex align-items-center justify-content-between">
                <a class="small text-white stretched-link" href="/history">
                  Click here
                </a>
                <div class="small text-white">
                  <i class="fas fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6">
            <div class="card bg-success text-white mb-4">
              <div class="card-body">Mark Successfully delivered Area</div>
              <div class="card-footer d-flex align-items-center justify-content-between">
                <a class="small text-white stretched-link" href="/markhistory">
                  Click here
                </a>
                <div class="small text-white">
                  <i class="fas fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </GridWrapper>
    <Customer/>
    </>
  );
}

export default Home;
