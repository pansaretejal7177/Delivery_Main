import React, { useState, useEffect } from 'react'
import Login from './Login';
import { useAuth } from '../context/AuthContext';
import { db } from "../firebaseConfig";
import Button from '@material-ui/core/Button';
import './Profile.css'
import { X } from 'react-bootstrap-icons'

function Profile() {

    const { currentUser } = useAuth();
    const [text, setText] = useState('')

    console.log(currentUser);


    const [theCurrUser, setTheCurrUser] = useState({})

    console.log(theCurrUser)

    useEffect(async () => {
        const snapshot = await db.collection('customers').get()
        let req = await snapshot.docs.map(doc => doc.data());
        console.log(req)
        console.log(localStorage.getItem("username"))
        for (let i = 0; i < req.length; i++) {
            if (req[i]['email'].toLowerCase() == localStorage.getItem("username")) {
                setTheCurrUser(req[i])

                console.log(req[i])
            }
        }
    }, [])
    return (
        <>
            <main>
                <div className="container-fluid">
                    <div className="profile-in" style={{ borderRadius: "10px", backgroundColor: "rgb(231 231 231)", width: "50%", margin: "auto", marginTop: "20%" }}>
                        <div classname="pp" style={{ color: "rgb(0, 0, 0)", display: "flex", flexDirection: "column", alignItems: "center", fontSize: "17px", fontWeight: "bold", padding: "20px" }}>
                            <div className="__header">
                                <h1 className="text-center my__Profile" style={{
                                    fontFamily: "initial",
                                    fontStyle: "bold",
                                    fontSize: "50px",
                                    textAlign: "center",
                                }}>My Profile</h1>
                            </div>
                            <div class="" style={{ paddingTop: "15px" }}>
                                <div class="mr-auto">Name: {theCurrUser['firstName']} {theCurrUser['lastName']}</div>
                                
                            </div>
                            <div className="" style={{ paddingBottom: "15px" }}>
                                <div className="mr-auto">Email: {theCurrUser['email']}</div>
                               
                                    
                                
                            </div>
                            <div className="" style={{ paddingBottom: "15px" }}>
                                <div className="mr-auto">Contact: {theCurrUser['contact']}</div>
                            </div>
                            <Button variant="contained">Edit Profile</Button>
                                </div>
                            </div></div>

                            
            
            </main>

        </>
    )
}

export default Profile