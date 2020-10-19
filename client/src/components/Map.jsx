import React, {useState} from 'react'
import "../css/styles.css"

function Map(props){

    const [hover, setHover] = useState(false)
   
    const {divStyle} = props

     function handleHover(){ 
         console.log(hover)
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
            width={props.width} ></rect>
            
        </>
    )
}

export default Map