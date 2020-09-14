import React, {useState} from 'react'
import { useContext } from 'react'
import { FormContext } from '../context/FormContext'
import Map from "./Map.jsx"
import { useHistory } from 'react-router'
import { useEffect } from 'react'

function Interactivemap(){ 

    const {boothState, setUserState, writeUserData, index, getArrayBooths} = useContext(FormContext)
    const{ updateBooths} = useContext(FormContext)
    const history = useHistory()
    const [divStyle, setDivStyle] = useState()

    useEffect(() => { 
        getArrayBooths()
    },[])
    

    function updateIndex(index, booth){ 
        setDivStyle((prev) => (prev === index ? undefined : index))
        setUserState((prev) => ({ 
            ...prev, 
            booth: booth, 
            index: index
        }))
    }
   function handleSubmit(i){ 
      updateBooths(i)
      writeUserData(i)
      history.push('/profile')
   }
 
   return ( 
       <>
            <svg style = {{zIndex: -1}} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 797.1896 862.6702">
                {boothState && boothState.booths.map((item, index) => 
                      <Map 
                        divStyle = {divStyle}
                        updateIndex = {updateIndex}
                        style= {{fill:"black"}} 
                        x={item && item.attributes.x} 
                        y = {item && item.attributes.y} 
                        transform = {item && item.attributes.transform} 
                        height = {item && item.attributes.height} 
                        width = {item && item.attributes.width} 
                        class = {item && item.attributes.class} 
                        booth = {item && item.booth} 
                        choosen = {item && item.choosen} 
                        index = {index && index} />
                        )}
            </svg>
            <button onClick = {() => handleSubmit(index)}>Submit</button>
        </>
    )
}

export default Interactivemap