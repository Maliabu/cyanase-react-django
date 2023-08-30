import { useEffect } from "react";
import { GetRiskProfile } from "../Api/MainRequests";
import React, { useState } from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import Risk from '../images/Group 130.png'
import RProfile from '../Accounts/RProfile';
import Modal from 'react-bootstrap/Modal';
import { Activity } from "react-iconly";

const RiskProfile = ({ id, activeTab, children }) => {
    const [show2, setShow2] = useState(false);
    const [complete, setComplete] = useState("Incomplete");
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    useEffect(() => {
        GetRiskProfile().then(res => {
            console.log(res)
            if (res.status === true) {
                setComplete("Complete")
            }
        });
    }, []);
    return ( <
        div className="row mx-3"> <
        div className = "row p-1 bg-lighter px-2 rounded-4" >
        <
        div className = "col-6 bg-white rounded-4 p-2" >
        <
        img src = { Risk }
        width = '90%'
        className = "m-5"
        height = '80%'
        alt = "investors" / >
        <
        /div> <
        div className = "col-6 p-5 text-center" > <
        div className = "row p-3 bg-white rounded-4" >
        <
        h4 className = "active bolder" > Investor Risk Profile < /h4>  <
        Activity size = "xlarge"
        set = "broken"
        className = 'my-5 active' / >
        <
        h6 >
        The risk profile is intended to grade and check how much you can accommodate an investment risk.The information you provide here is strictly
        for grading purposes.Thus we don not share it with any third parties or use it
        for any other activities. <
        /h6> < /
        div > < h6 className = "mt-3 p-4 bg-white rounded-3 bolder" > Risk profile Status: < span className = "rounded-2 px-5 mx-3 py-2 status" > {
            complete
        } < /span> < /
        h6 > <
        h6 className = "py-3 px-5 mt-3 mx-5 bk-warning rounded-3"
        onClick = { handleShow2 } > Complete Your Risk profile < /h6> < /
        div > <
        Modal show = { show2 }
        onHide = { handleClose2 }
        dialogClassName = "my-modal" >

        <
        RProfile /
        >
        <
        /
        Modal > < /
        div > < /
        div >
    );
};

export default RiskProfile;