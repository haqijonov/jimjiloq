import { Navigate } from "react-router-dom"
function ProtectRouter({user, children}) {
 if(user){
    return children
 }else{
    return <Navigate to={'/register'}/>
 }

}

export default ProtectRouter