import { createContext, useState } from "react";

export let UserContext= createContext()

 export default function UserContextProvider(props) {



    const [userToken,setUserToken]=useState(localStorage.getItem('userToken'));

    const [userData,setUserData]=useState(localStorage.getItem('userToken'));



    return <UserContext.Provider value={{userToken,setUserToken,setUserData,userData}}>
        {props.children}
    </UserContext.Provider>
}