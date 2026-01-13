import { useAuth} from "./AuthProvider";
export default function Dashboard()
{
    const auth = useAuth();
    return (
        <div>
            <h1>Welcome to the Dashboard</h1>
            {auth.user && <p>Hello, {auth.user}!</p>}
            <button onClick={auth.logOut}>Log Out</button>
        </div>
    );
};