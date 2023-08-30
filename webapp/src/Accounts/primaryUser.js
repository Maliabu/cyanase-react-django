import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import React, { useState } from "react";
import Login from "./Login";
import SignUp from './SignUp';
import SecondaryUser from './SecondaryUser';
import TabNavItem from "./TabNavItem";
import TabContent from "./TabContent";


const BasicExample = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    //  Functions to handle Tab Switching
    const handleTab1 = () => {
        // update the state to tab1
        setActiveTab("tab1");
    };
    return ( <
        div className = 'row scroll-y mx-3' >
        <
        div className = 'col-lg-7 px-lg-5' >
        <
        div className = 'd-flex flex-row d-none p-lg-3 border justify-content-center rounded-3 flex' >
        <
        div className = ' py-2 px-lg-3' >

        <
        TabNavItem title = "API User"
        onClick = { handleTab1 }
        id = "tab1"
        activeTab = { activeTab }
        setActiveTab = { setActiveTab }
        />  < /div > < /
        div >
        <
        h2 className = 'w-100 text-center mt-5' > Welcome to the API User Portal.This Portal is
        for API Accounts creations only. < /h2> <
        h6 className = 'text-center mt-5 p-3 bg-light rounded-3' > For more information or help, contact support at:
        <
        u className = 'active ' > support @cyanase.com < /u> < /
        h6 >
        <
        div >
        <
        img src = "https://img.freepik.com/free-vector/strategic-consulting-concept-illustration_114360-8994.jpg?w=740&t=st=1678295724~exp=1678296324~hmac=d43819b5a3fbe5776cd679d2f5d57cde36a046d1ee3ec3decf5cd0f54370c9b9"
        alt = "investors"
        height = "90%"
        width = "100%"
        className = 'py-5' / > <
        /div> < /
        div > <
        div className = 'col-lg-5 ' >

        <
        TabContent id = "tab1"
        activeTab = { activeTab } > < SignUp / > < /TabContent> <
        TabContent id = "tab2"
        activeTab = { activeTab } > < Login / > < /TabContent> <
        TabContent id = "tab3"
        activeTab = { activeTab } > < SecondaryUser / > < /TabContent> < /
        div > < /div >
    );
}

export default BasicExample;