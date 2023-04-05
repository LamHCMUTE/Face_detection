
import Login_component from "@/components/Login_component";
import Login_page from "@/components/Login_component";
import {useSignInWithGoogle} from "react-firebase-hooks/auth"

export default function Login() {
    const [signInWithGoogle, _user, _loading, _error] = useSignInWithGoogle(auth);
    return (
        <Login_component />
    )
}
