import React, { useState } from "react";
import { FaUserLock, FaUserTie, FaUserShield } from "react-icons/fa";
import Modal from 'react-bootstrap/Modal';
import ChangePassword from './ChangePassword';
import NKin from './NKin';
import ADetails from './ADetails';
import { ArrowLeftSquare } from "react-iconly";

const Account = (props) => {
        const [accountDetails, setAccountDetails] = useState(false);
        const [show, setShow] = useState(false);
        const [show2, setShow2] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        const handleClose2 = () => setShow2(false);
        const handleShow2 = () => setShow2(true);
        console.log(props.changeAccountSetting);

        if (accountDetails) {
            return ( < ADetails changeAccountDetails = { setAccountDetails }
                / > )
            }
            return ( < div className="mx-3">
                <
                ArrowLeftSquare size = "medium"
                set = "broken"
                onClick = {
                    () => { props.changeAccountSetting(false) }
                }
                className = " my-4 active" / > <
                h3 > Account Settings < /h3>  <
                div className = "row p-2 px-3 border-bottom" > <
                div className = "col-1" >
                <
                FaUserLock size = "30"
                className = 'my-3 active' / >
                <
                /
                div >
                <
                div className = "col-11 mt-3" >
                <
                h4 className = "active bolder"
                onClick = { handleShow2 } > Password < /h4> <
                h6 > Change your Password < /h6> < /
                div >
                <
                /
                div >
                <
                div className = "row p-2 px-3 border-bottom" > <
                div className = "col-1" >
                <
                FaUserTie size = "30"
                className = 'my-3 active' / >
                <
                /
                div >
                <
                div className = "col-11 mt-3" >
                <
                h4 className = "active bolder"
                onClick = { handleShow } > Next of Kin < /h4> <
                h6 > Who would be incharge incase you are not here ? < /h6> < /
                div >
                <
                /
                div >
                <
                div className = "row p-2 px-3 border-bottom" > <
                div className = "col-1" >
                <
                FaUserShield size = "30"
                className = 'my-3 active' / >
                <
                /
                div >
                <
                div className = "col-11 mt-3" >
                <
                h4 className = "active bolder"
                onClick = {
                    () => { setAccountDetails(true) }
                } > Account Details < /h4> <
                h6 > Change your details < /h6> < /
                div > <
                Modal show = { show2 }
                dialogClassName = "my-modal1"
                onHide = { handleClose2 } >
                <
                ChangePassword / > < /
                Modal > <
                Modal show = { show }
                dialogClassName = "my-modal1"
                onHide = { handleClose } >
                <
                NKin / > < /
                Modal >
                <
                / 
                div >
                <
                /
                div >
            )
        }

        export default Account;