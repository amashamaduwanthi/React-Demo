import {Customer} from "../module/Customer.ts";
import { useState, useContext } from 'react';
import {CustomerContext} from "../components/CustomerProvider.tsx";

// Define the Customer type if not defined elsewhere
interface Customer {
    id: number;
    name: string;
    email: string;
    phone: string;
}

export function UpdateCustomer() {
    const [customers, setCustomers] = useContext(CustomerContext); // Renamed to "customers"
    const [searchEmail, setSearchEmail] = useState('');
    const [foundCustomer, setFoundCustomer] = useState<Customer | null>(null);
    const [newName, setNewName] = useState('');
    const [newPhone, setNewPhone] = useState('');

    // Search customer by email
    function searchCustomer() {
        const customer = customers.find((c: Customer) => c.email === searchEmail);
        if (customer) {
            setFoundCustomer(customer);
            setNewName(customer.name);
            setNewPhone(customer.phone);
        } else {
            alert('Customer not found.');
            setFoundCustomer(null);
        }
    }

    // Update customer details
    function updateCustomer() {
        if (!foundCustomer) return;

        const updatedCustomers = customers.map((c: Customer) =>
            c.id === foundCustomer.id ? { ...c, name: newName, phone: newPhone } : c
        );

        setCustomers(updatedCustomers);
        alert('Customer updated successfully!');
        setFoundCustomer(null);
        setSearchEmail('');
    }

    return (
        <>
            <header>
                <h2>Update Customer</h2>
            </header>

            <input
                type="text"
                placeholder="Email to search"
                value={searchEmail}
                onChange={(e) => setSearchEmail(e.target.value)}
            />
            <button onClick={searchCustomer}>Search Customer</button>

            {foundCustomer && (
                <div>
                    <h3>Update Details for {foundCustomer.email}</h3>
                    <input
                        type="text"
                        placeholder="New Name"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="New Phone"
                        value={newPhone}
                        onChange={(e) => setNewPhone(e.target.value)}
                    />
                    <button onClick={updateCustomer}>Update Customer</button>
                </div>
            )}
        </>
    );
}
