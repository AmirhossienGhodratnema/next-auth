import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const { data, status } = useSession();

    const loginHandler = async () => {
        const res = await signIn('credentials', { email, password, redirect: false });
        if (!res.error) window.location.href = '/dashbord';
    };


    useEffect(() => { if (status === 'authenticated') router.replace('/dashbord') }, [status])




    return (
        <div>
            <h2>Login page</h2>

            <label>Email</label>
            <input type="text" onChange={e => setEmail(e.target.value)} />
            <br />
            <label>Password</label>
            <input type="password" onChange={e => setPassword(e.target.value)} />
            <br />
            <button onClick={loginHandler}>singIn</button>
        </div>
    )
};


