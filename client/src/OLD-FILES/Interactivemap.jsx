import React, {useState} from 'react'
import { useContext } from 'react'
import { FormContext } from '../context/FormContext'
import Map from "./Map.jsx"
import { useHistory } from 'react-router'
import { useEffect } from 'react'

function Interactivemap(){ 

    const {boothState, setUserState, index, getArrayBooths} = useContext(FormContext)
    const {updateBooths} = useContext(FormContext)
    const history = useHistory()
    const [divStyle, setDivStyle] = useState()


    useEffect(() => { 
        getArrayBooths()
    },[])
    

    function updateIndex(index, booth){ 
        setDivStyle((prev) => (prev === index ? null : index))
        setUserState((prev) => ({ 
            ...prev, 
            booth: booth, 
            index: index
        }))
    }
   function handleSubmit(i){ 
      updateBooths(i)
    //   writeUserData(i)
      history.push('/profile')
   } 


   return ( 
       <>
            <svg style = {{zIndex: -1, height: "100vh"}} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 797.1896 862.6702">
                {boothState && boothState.booths.map((item, index) => 
                      <Map 
                        divStyle = {divStyle}
                        updateIndex = {updateIndex}
                        style= {{fill:"black"}} 
                        x={item.attributes.x} 
                        y = {item.attributes.y} 
                        transform = {item.attributes.transform} 
                        height = {item.attributes.height} 
                        width = {item.attributes.width} 
                        class = {item.attributes.class} 
                        booth = {item.booth} 
                        choosen = {item.choosen} 
                        power = {item.power}
                        index = {index && index} />
                        )}
            </svg>
            <button onClick = {() => handleSubmit(index)}>Submit</button>
        </>
    )
}

export default Interactivemap