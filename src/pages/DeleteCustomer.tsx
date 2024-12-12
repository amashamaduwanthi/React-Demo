import {useContext, useState} from "react";
import {CustomerContext} from "../components/CustomerProvider.tsx";


export  function  DeleteCustomer(){
    const [customer, setCustomer] = useContext(CustomerContext);
    const [deleteEmail, setDeleteEmail] = useState('');
    function deleteCustomerByEmail(){
        if (deleteEmail) {
            setCustomer((prevCustomers) =>
                prevCustomers.filter((customer) => customer.email !== deleteEmail)
            );
            setDeleteEmail(''); // Clear the delete email input
        } else {
            alert('Please enter an email to delete.');
        }
    }
    return(
        <>
            <header><h2>Delete Customer</h2></header>
            <br/>
            <input type="text" placeholder="Email to delete" value={deleteEmail} onChange={(e) => setDeleteEmail(e.target.value)}/>
            <br/><br/>
            <button onClick={deleteCustomerByEmail}>Delete Customer by Email</button>

        </>
    )
}