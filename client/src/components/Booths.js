import React, { useContext, useState, useEffect } from "react"
import {FormContext} from "../context/FormContext"
import image from "../images/OPVeteran2020sitemap.jpg"
import Zoom from 'react-img-zoom'
import { useHistory } from "react-router"


function Booths(){ 
    const { selectBooth, writeUserData, booths, updateDB, boothState } = useContext(FormContext)
    
    const [whiteToggle, setWhiteToggle] = useState(false)
    const history = useHistory()

    function goHome(){ 
        writeUserData()
        updateDB()
        history.push('/opvet')
    }

    return(
    <div>  
        <h1 onClick = {() => setWhiteToggle(prev => !prev)}>Available Booths</h1>
        {whiteToggle ? booths?.map((i) => <div onClick = {() => selectBooth(i)}>{i}</div>) : null}
        
        {/* <h1 onClick = {() => setYellowToggle(prev => !prev)}>Yellow Booths</h1>
        {yellowToggle ? yellowBooths && yellowBooths?.map((i) => <div onClick = {() => selectBooth(i)}>{i}</div>) : null}

        {value >= 1000 ? <>
            <h1 onClick = {() => setPinkWhiteToggle(prev => !prev)}>Pink White Booths</h1>
            {pinkWhiteToggle ? pinkWhite?.map((i) => <div onClick = {() => selectBooth(i)}>{i}</div>) : null} </>: null}

        {value >= 1000 ? <>
            <h1 onClick = {() => setPinkYellowToggle(prev => !prev)}>Pink Yellow Booths</h1>
            { pinkYellowToggle ? pinkYellow?.map((i) => <div onClick = {() => selectBooth(i)}>{i} </div>) : null} </>: null}

        {value >= 2500 ? <>
            <h1 onClick = {() => setBlueWhiteToggle(prev => !prev)}>Blue White Booths</h1>
            {blueWhiteToggle ? blueWhite?.map((i) => <div onClick = {() => selectBooth(i)}>{i}</div>) : null} </> : null}

        {value >= 2500 ? <>
            <h1 onClick = {() => setBlueYellowToggle(prev => !prev)}>Blue Yellow Booths</h1>
            {blueYellowToggle ? blueYellow?.map((i) => <div onClick = {() => selectBooth(i)}>{i}</div>) : null} </>: null} */}

            <button onClick = {() => goHome()}>Submit</button>

            <Zoom
                img={image}
                zoomScale={4}
                width={800}
                height={800}
                transitionTime={0}
                />
    </div>
    )
}

export default Booths