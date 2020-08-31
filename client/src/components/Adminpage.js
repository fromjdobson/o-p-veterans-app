import React, { useContext } from "react"
import { FormContext } from "../context/FormContext"
import Allusers from "./Allusers"

function Adminpage(){ 
    const { userBoothState } = useContext(FormContext)

    // useEffect(() => {
    //     getUsersBoothSelection()
    //     // userBoothState.filter()
    // },[])

    return ( 
        <div> 
            {userBoothState?.map((user) => 
                <Allusers users = {user} key = {user.uid}/>
            )}
        </div>
    )
}

export default Adminpage