import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import axios from 'axios';
import { catch_errors, success, fail, preloader, preloaderCheckouts } from '../Api/RequestFunctions';
import { API_URL_SUBSCRIBE, TOKEN } from '../apis';

export default function Subscription({ name, phone, amount, currency, email, data, submit }) {
    const config = {
        public_key: 'FLWPUBK_TEST-99f83b787d32f5195dcf295dce44c3ab-X',
        tx_ref: Date.now(),
        amount: amount,
        currency: "UGX",
        payment_options: 'card,mobilemoney,ussd',
        customer: {
            email: email,
            phone_number: phone,
            name: name,
        },
        customizations: {
            title: 'deposit',
            description: 'Make a deposit',
            logo: '../images/CI.png',
        },
    };
    const handleFlutterPayment = useFlutterwave(config);
    return ( < div className = "App" >
        <
        h6 onClick = {
            () => {
                preloaderCheckouts()
                handleFlutterPayment({
                    callback: (response) => {
                        if (response.status === "successful") {
                            data.reference = response.flw_ref
                            data.reference_id = response.transaction_id
                            data.tx_ref = response.tx_ref
                            submit()
                            preloader()
                            axios.post(`${API_URL_SUBSCRIBE}`, data, {
                                    headers: {
                                        "Content-Type": "multipart/form-data",
                                        'Accept': 'application/json',
                                        "Authorization": `Token ${ TOKEN }`
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
                                        success("You have subscribed successfully", "/home", "successful");
                                    }
                                });
                            console.log(data)
                        }
                        console.log(response);
                        closePaymentModal() // this will close the modal programmatically
                    },
                    onClose: () => {},
                });
            }
        }
        className = 'bk-warning active p-3 mx-5 rounded-3 mt-3'
        id = "checkouts" >
        Checkout <
        /h6> < /
        div >
    );
}