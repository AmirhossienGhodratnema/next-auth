import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const loginHandler = async () => {
        const res = await signIn('credentials', { email, password, redirect: false });
        if(!res.error) router.replace('/dashbord')
    };


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
