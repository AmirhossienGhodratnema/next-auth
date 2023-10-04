import Link from "next/link";


export default function Home() {
  return (
    <>
      <button><Link href='/dashbord'>Dashbord</Link></button>
      <button><Link href='/register'>Register</Link></button>
      <button><Link href='/login'>Login</Link></button>
    </>

  )
}
