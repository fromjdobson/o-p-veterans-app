import React, { useContext } from "react"
import { FormContext } from "../context/FormContext"
import Allusers from "./Allusers"

function Adminpage(){ 
    const { userBoothState } = useContext(FormContext)
    console.log(userBoothState, 'this is the userboothstate')
    return ( 
        <div> 
            {/* maps all of the users info into props in the component */}
            {userBoothState?.map((user) => 
                <Allusers users = {user} key = {user.uid}/>
            )}
        </div>
    )
}

export default Adminpage