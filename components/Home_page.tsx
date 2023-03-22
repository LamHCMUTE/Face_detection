import { authApi } from "@/api-client/auth-api";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

export interface IHomePageProps {
    setLoading: (val: boolean) => void;
    isTransparent: boolean;
}
export default function HomePage(props:IHomePageProps){

    
    const { setLoading, isTransparent } = props;
    const router = useRouter();
    const handleLogin = () => 
    {
        setLoading(true);
        try {
            authApi
                .getProfile()
                .then((res) => {
                    router.push('/');
                })
                .catch((error) => {
                    router.push('/login');
                });
        } catch (error) {
            setLoading(false);
        }
    };
    return(
        <Button onClick={handleLogin}>Dang nhap</Button>
    )
}