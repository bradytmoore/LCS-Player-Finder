import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import './App.css';

function User(props){
    const auth = getAuth();
    const [user, loading, error] = useAuthState(auth);

    if(loading){
        return <p>Loading User Profile</p>
    }

    if(error){
        return <p>Error: {error}</p>
    }

    if(user){
        return <p id ="userN">Welcome: {user.email}</p>
    
    } else {
        return <p>Please sign in</p>
    }
}
export default User;