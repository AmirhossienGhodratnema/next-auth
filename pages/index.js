import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function Home() {
  const [auth, setAuth] = useState(false);
  const logOutHandler = () => signOut();
  const { data, status } = useSession();

  useEffect(() => { if (status === 'authenticated') setAuth(true) }, [status])



  return (
    <>
      {status == 'authenticated'?
        <>
          <button><Link href='/dashbord'>Dashbord</Link></button>
          <button onClick={logOutHandler}>LogOut</button>
        </> :
        <>
          <button><Link href='/register'>Register</Link></button>
          <button><Link href='/login'>Login</Link></button>
        </>
      }
    </>

  )
}
