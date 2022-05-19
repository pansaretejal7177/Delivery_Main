import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import styled from "styled-components";
import "./Newspaper.css";
const GridWrapper = styled.div`
  margin-left: 20em;
`;
function Newspaper() {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    db.collection("Products").onSnapshot((snapshot) => {
      setProducts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          Products: doc.data(),
        }))
      );
    });
  }, []);

  console.log(Products);
  return (
    <GridWrapper>
      <div class="card mb-4">
        <div class="card-header">
          <i class="fas fa-table me-1"></i>
          Newspaper Details
        </div>
        <br></br>
        <div class="card mb-4">
          <div class="limiter">
            <div class="table100 ver5 m-b-110">
              <div class="table100-head">
                <table>
                  <thead>
                    <tr class="row100 head">
                      <th class="cell100 column1">Name</th>
                      <th class="cell100 column2">Publication Name</th>
                      <th class="cell100 column3">Publication Type</th>
                      <th class="cell100 column4">Quantity</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div class="table100-body js-pscroll">
                <table>
                  <tbody>
                    {Products &&
                      Products.map(({ id, Products }) => {
                        return (
                          <tr key={id}>
                            <td>{Products.productName}</td>
                            <td>{Products.publicationName}</td>
                            <td>{Products.publicationType}</td>
                            <td>{Products.stock}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GridWrapper>
  );
}
export default Newspaper;
