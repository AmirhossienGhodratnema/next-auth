import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const { data, status } = useSession();

    
    useEffect(() => { if (status === 'authenticated') router.replace('/dashbord') }, [status])


    const handler = async () => {
        const res = await fetch('http://localhost:3000/api/auth/register', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' }
        });
        const data = await res.json();
        console.log(data);
        if (data.success) router.push('/login');
    };

    const gitHubHandlerLogin = () => {
        signIn('github');
    }
    return (
        <div>
            <h2>SignUp page</h2>

            <label>Email</label>
            <input type="text" onChange={e => setEmail(e.target.value)} />
            <br />
            <label>Password</label>
            <input type="password" onChange={e => setPassword(e.target.value)} />
            <br />
            <button onClick={handler}>singUp</button>
            <button onClick={gitHubHandlerLogin}>Github</button>
        </div>
    )
};
