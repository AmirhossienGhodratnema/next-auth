import { getSession } from "next-auth/react"
import { useState } from "react";

export default function Dashbord() {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');

    const saveHandler = async () => {
        const res = await fetch('/api/updateUser', {
            method: 'POST',
            body: JSON.stringify({ name, lastName, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        const data = await res.json()
        console.log(data);
    };


    return (
        <div>
            <h2>Dashbord page</h2>
            <br /><br />
            <input type='text' placeholder='Name' value={name} onChange={e => setName(e.target.value)} /><br /><br />
            <input type='text' placeholder='LastName' value={lastName} onChange={e => setLastName(e.target.value)} /><br /><br />
            <input type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} /><br /><br />
            <button onClick={saveHandler} >Save</button>
        </div>
    )
};


export async function getServerSideProps({ req }) {
    const sesstion = await getSession({ req });
    if (!sesstion) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            }
        };
    };

    return {
        props: {
            data: 'Amirhossien'
        }
    }
}
