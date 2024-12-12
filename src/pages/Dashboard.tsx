// import {Link} from 'react-router'

import {Customer} from "../module/Customer.ts";
import {useContext} from "react";
import {CustomerContext} from "../components/CustomerProvider.tsx";
export  function Dashboard(){
    const [customer, setCustomer] = useContext(CustomerContext);
return(
    <>
        Dashboard
        {customer.map((customer: Customer) => (<div key={customer.email}>{customer.name + ' '+ customer.email + ' '+ customer.phone }</div>))}
        <br/>

    </>
)

}