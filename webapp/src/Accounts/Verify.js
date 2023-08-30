import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { API_EMAIL_VERIFY } from '../api';
import axios from 'axios';

class VerifyEmail extends Component {
    //state for form data
    state = {
        verificationcode: ''
    };
    success = () => {
        document.getElementById("successMessage").innerHTML = "Successful"
        document.getElementById("successMessage").style.backgroundColor = "green"
        document.getElementById("successMessage").style.color = "white"
        document.getElementById("successMessage").style.borderColor = "green"
        document.getElementById("errorMessage").style.display = 'block'
        document.getElementById("errorMessage").style.color = "green"
        document.getElementById("errorMessage").style.borderColor = "green"
        document.getElementById("errorMessage").innerText = "You are logged in"
        setTimeout(() => {
            document.getElementById("errorMessage").style.display = 'none'
        }, 6000);
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
        console.log(this.state, this.props);
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let form_data = new FormData();
        form_data.append('verificationcode', this.state.verificationcode);
        axios.post(`${API_EMAIL_VERIFY}`, form_data, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .catch(function(error) {
                const errorDisplay = () => {
                    document.getElementById("errorMessage").innerText = error.response
                    document.getElementById("errorMessage").style.display = 'block'
                    document.getElementById("errorMessage").style.color = "red"
                    document.getElementById("errorMessage").style.borderColor = "red"
                    setTimeout(() => {
                        document.getElementById("errorMessage").style.display = 'none'
                    }, 6000);
                }
                const errorSignUp = () => {
                    document.getElementById("successMessage").innerHTML = "Something went wrong"
                    document.getElementById("successMessage").style.backgroundColor = "red"
                    document.getElementById("successMessage").style.color = "white"
                    document.getElementById("successMessage").style.borderColor = "red"
                    setTimeout(() => {
                        document.getElementById("successMessage").innerHTML = "Login Unsuccessful"
                    }, 2000);
                }
                if (error.response) {
                    const responses = error.response.data.detail
                    if (error.response.status === 400) {
                        errorDisplay(responses)
                    } else if (error.response.status === 500) {
                        errorDisplay(responses)
                    } else if (error.response.status === 404) {
                        errorDisplay(responses)
                    } else if (error.response.status === 403) {
                        errorDisplay(responses)
                    }
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    // console.log(error.response.data);
                    // console.log(error.response.status);
                    // console.log(error.response.headers);
                    errorSignUp();
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                    errorDisplay(error);
                    errorSignUp();
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                    errorSignUp();
                    errorDisplay(error);
                }
            })
            .then((response) => {
                const errorDisplay = (response) => {
                    document.getElementById("errorMessage").innerText = response.data.message
                    document.getElementById("errorMessage").style.display = 'block'
                    document.getElementById("errorMessage").style.color = "red"
                    document.getElementById("errorMessage").style.borderColor = "red"
                    setTimeout(() => {
                        document.getElementById("errorMessage").style.display = 'none'
                    }, 6000);
                }
                const errorSignUp = () => {
                    document.getElementById("successMessage").innerHTML = "Something went wrong"
                    document.getElementById("successMessage").style.backgroundColor = "red"
                    document.getElementById("successMessage").style.color = "white"
                    document.getElementById("successMessage").style.borderColor = "red"
                    setTimeout(() => {
                        document.getElementById("successMessage").innerHTML = "Login Unsuccessful"
                    }, 2000);
                }
                if (response.data.success === false && response.status === 200) {
                    errorDisplay(response);
                    errorSignUp()
                }
                /**
                 * The 'then' method is executed only when the request is successfull.
                 */
                document.getElementById("guest").innerHTML = response.data.user.first_name
                    // history.pushState(response.data.user, 'success', 'https://localhost/8000/api/')
                window.location.href = 'https://localhost/8000/api/';
            });
        this.success();
    }
    render() {
        return ( <
            div > <
            div className = 'row p-lg-5 justify-content-center bg-light' >
            <
            Form className = ' mt-lg-5 shadow-sm bg-white p-lg-5 col-lg-5'
            onSubmit = { this.handleSubmit } >
            <
            div className = 'row justify-center p-3' > <
            h2 className = 'text-center' > VERIFY YOUR ACCOUNT < /h2> <
            h6 className = 'active mt-3' > < b > Enter Verification Code < /b>  < /
            h6 > <
            /
            div > <
            Form.Group className = "mb-3 bg-light rounded-lg p-3 px-5" >
            <
            Form.Label > Code < /Form.Label> <
            Form.Control type = "number"
            id = 'verificationcode'
            required = "required"
            value = { this.state.verificationcode }
            onChange = { this.handleChange }
            placeholder = "_ _ _ _ _" / > <
            /Form.Group> <
            div className = 'row justify-content-center' > <
            Button variant = "warning"
            className = 'shadow text-center'
            id = 'successMessage'
            type = "submit" >
            Submit <
            /Button> < /
            div >
            <
            p className = 'mt-5' > IF you dont have an account, please < span className = 'active bolder' > { this.props.button } < /span></p >
            <
            p id = "errorMessage"
            className = 'py-3 mt-3 rounded border text-center fade-in'
            style = {
                { display: 'none' }
            } > hey < /p>  < /
            Form >
            <
            div className = "mt-5 bg-light d-none rounded row justify-content-center" >
            <
            img className = 'rounded-circle text-center avatar border border-warning'
            src = "https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg"
            alt = "investors" / > <
            h4 className = 'avatar-name text-center mt-2 p-3 bg-text'
            id = 'guest' > Guest < /h4> < /
            div > < /div> < /
            div >
        );
    }
}
export default VerifyEmail;