import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { API_URL_PASSWORD_RESET } from '../apis';
import axios from 'axios';
import { success1, catch_errors, preloader, fail } from '../Api/RequestFunctions';

class PasswordReset extends Component {
    //state for form data
    state = {
        email: '',
    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleSubmit = (e) => {
        preloader()
        e.preventDefault();
        let form_data = new FormData();
        form_data.append('email', this.state.email);
        axios.post(`${API_URL_PASSWORD_RESET}`, form_data, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .catch(function(error) {
                catch_errors(error)
            })
            .then(function(response) {
                if (!response) {
                    fail("Something went wrong...")
                } else if (response.status === 200 && response.data.success === false) {
                    fail(response.data.message)
                } else {
                    success1("Almost there. Please check your email for a password reset link", "Successful");
                }
            });
    }
    render() {
        return ( <
            div > <
            div className = 'row rounded-4 justify-content-center bg-lighter p-lg-5 p-2' >
            <
            Form className = 'bg-white rounded-4 p-lg-5 py-3 col-lg-5 col-12'
            onSubmit = { this.handleSubmit } >
            <
            div className = 'row justify-center p-3' > <
            h2 className = 'text-center' > Password Reset < /h2> <
            h6 className = 'active mt-3 text-center' > < b > Enter your account email to receive a password reset link < /b>  < /
            h6 > <
            /
            div > <
            Form.Group className = "mb-3 shadow-sm rounded-3 p-3 px-5"
            controlId = "formBasicDate" >
            <
            Form.Label > Email < /Form.Label> <
            Form.Control type = "email"
            name = "email"
            onChange = { this.handleChange }
            placeholder = "your email here" / > <
            p id = "errorEmail"
            className = 'p-2 rounded-2 px-3 bg-red'
            style = {
                { display: 'none' }
            } > hey < /p> < /
            Form.Group > <
            div className = 'row justify-content-center' > <
            Button variant = "warning"
            className = 'shadow text-center'
            id = 'successMessage'
            type = "submit" >
            Submit <
            /Button> < /
            div >
            <
            h6 id = "errorMessage"
            className = 'py-2 mt-3 rounded border border-danger text-center'
            style = {
                { display: 'none' }
            } > hey < /h6> <
            h6 id = "infoMessage"
            className = 'py-2 mt-3 rounded warning text-center'
            style = {
                { display: 'none' }
            } > hey < /h6>  < /
            Form > < /div>  <
            p className = 'mt-lg-5 mt-4 text-center' > Back to < span className = 'active bolder' > { this.props.button } < /span >< /p > <
            /
            div >
        );
    }
}
export default PasswordReset;