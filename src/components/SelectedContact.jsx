import { useState } from 'react';
import { useEffect } from 'react';


export default function SelectedContact({selectedContactId, setSelectedContactId}) {
    const [contact, setContact] = useState(selectedContactId);
    useEffect(()=>{
        async function fetchSelectedContact() {
            try {
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
                const result = await response.json();
                setContact(result);
            } catch (error) {
                console.log(error);
            }
        }
        fetchSelectedContact()
    },[]);
    console.log(selectedContactId);
    console.log(contact);
    
    return (
        <>
            <h2>{contact.name}</h2>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
            <p>{contact.website}</p>
            <button onClick={()=> setSelectedContactId(null)}>Back to List</button>
        </>
    )
}