import { getSession } from "next-auth/react"

export default function Dashbord() {
    return (
        <div>
            <h2>Dashbord page</h2>
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
