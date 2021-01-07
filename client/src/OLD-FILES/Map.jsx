import React, {useState} from 'react'
import { useContext } from 'react'
import { FormContext } from '../context/FormContext'
import "../css/styles.css"

function Map(props){

    const [hover, setHover] = useState(false)
    const { needPower } = useContext(FormContext)
    const {divStyle} = props

     function handleHover(){ 
        setHover(prev => !prev)

    }

    function handleClick(){ 
        let index = props.index + 1
        props.updateIndex(index, props.booth)
    }

    
    return(
        <> 
            <text 
            display = {!hover & divStyle !== props.index + 1  ? "none" : "block"} 
            x = {props.x} 
            y={props.y} 
            transform = {props.transform} 
            height = {props.height} 
            width = {props.width} 
            font-family="Verdana" 
            fontSize="10" 
            fill="white">
                {props.booth}
            </text>
            {needPower ? 
            <rect 
                onClick = {!props.choosen ? () => handleClick() : null} 
                onMouseEnter = {() => handleHover()} 
                onMouseLeave = {() => handleHover()} 
                fill = {!props.power ? "grey" : props.choosen ? "grey" : !hover & divStyle !== props.index + 1  ? props.style.fill : "blue"} 
                x={props.x} 
                y={props.y} 
                transform={props.transform} 
                height={props.height} 
                class={props.class} 
                width={props.width}
            /> :   
            
            <rect 
                onClick = {!props.choosen ? () => handleClick() : null} 
                onMouseEnter = {() => handleHover()} 
                onMouseLeave = {() => handleHover()} 
                fill = {props.choosen ? "grey" : !hover & divStyle !== props.index + 1  ? props.style.fill : "blue"} 
                x={props.x} 
                y={props.y} 
                transform={props.transform} 
                height={props.height} 
                class={props.class} 
                width={props.width}
             />}
          
            
        </>
    )
}

export default Map