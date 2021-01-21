import React from 'react'
import { useHistory } from 'react-router'


function Thankyou(){
    const history = useHistory()
    setTimeout(() => { 
        history.push("/opvet")
    }, 3000) 
    return( 
        <div style ={{color: "white", alignItems: "center", justifyContent: "center", display: "flex"}}> 
            Thank you for Registering with OP Veteran, you are now being redirected to the O.P Veteran Homepage....
        </div>
    )
}

export default Thankyou