import React, { useContext, useState, useEffect } from "react"
import {FormContext} from "../context/FormContext"
import image from "../images/2020 site map png labeled.png"
import Zoom from 'react-img-zoom'
import { useHistory } from "react-router"


function Booths(){ 
    const { selectBooth, writeUserData, booths, updateDB, getBooths, userBoothState } = useContext(FormContext)
    
    const [whiteToggle, setWhiteToggle] = useState(false)
    const [companyToggle, setCompanyToggle ] = useState(false)
    const history = useHistory()

    function goHome(){ 
        writeUserData()
        updateDB()
        history.push('/opvet')
    }
    useEffect(() => { 
        getBooths()
    }, [])
    return(
    <div>  
         <Zoom
                img={image}
                zoomScale={3}
                width={800}
                height={800}
                transitionTime={.2}
            />
        <h1 onClick = {() => setWhiteToggle(prev => !prev)}>Available Booths</h1>
        {whiteToggle ? booths?.map((i) => <div onClick = {() => selectBooth(i)}>{i}</div>) : null}

        <h1 onClick = {() => setCompanyToggle(prev => !prev)}> See Companies that have already registered</h1>
        {companyToggle ? userBoothState?.map((i) => <div>{i.boothSelected ? i?.companyName : ""} {i?.boothSelected}</div>) : null}
            <div></div>
            <button onClick = {() => goHome()}>Submit</button>

           
    </div>
    )
}

export default Booths