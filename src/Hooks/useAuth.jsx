import AuthContext from "@/Contexts/AuthContext"
import { useContext } from "react"



export default function useAuth() {
 const authContext = useContext(AuthContext);
 return authContext;
}
