import { useNavigate} from 'react-router'
import {useContext, useState} from "react";
import {CustomerContext} from "../components/CustomerProvider.tsx";
import {Customer} from "../module/Customer.ts";

export function  AddCustomer(){
    const navigate = useNavigate();
    const [customer, setCustomer] = useContext(CustomerContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    function handleSubmit() {
        const newCustomer = new Customer(name, email, phone);
        setCustomer((customer: Customer[]) => [...customer, newCustomer]);
        navigate('/');
    }

    return (
        <>
            <header><h2>Add Customer</h2></header>
            <br/>

            <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder='phone' onChange={(e) => setPhone(e.target.value)} />

            <br/>
            <button onClick={handleSubmit}>Add Customer</button>
        </>
    );

}