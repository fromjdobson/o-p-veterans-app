import React, { useState, useEffect } from 'react'
import { Container, StyledBooth } from './styledComponents'
import firebase from '../firebase'
var boothsRef = firebase.firestore().collection("booths");
const snapToGridThresh = 5

function Booth({ doc }) {
    const id = doc.id
    const { label, left, top } = doc.data
    const [position, setPosition] = useState({ left, top })

    const handleDrag = e => {
        let offsetX = position.left - e.clientX;
        let offsetY = position.top - e.clientY
        const move = e => {
            let s = snapToGridThresh
            setPosition({
                top: Math.round((e.y + offsetY) / s) * s,
                left: Math.round((e.x + offsetX) / s) * s
            })
        }
        const stopmove = () => {
            document.removeEventListener('mousemove', move)
            document.removeEventListener('mouseup', stopmove)
        }
        document.addEventListener('mousemove', move)
        document.addEventListener('mouseup', stopmove)
    }
    const handleMouseUp = () => {
        updateBooth({
            id: id,
            boothinfo: {
                left: position.left,
                top: position.top
            }
        })
    }

    return <StyledBooth {...position}
        onMouseDown={handleDrag}
        onMouseUp={handleMouseUp}
    >{label}</StyledBooth>
}

const getBooths = cb => boothsRef.get()
    .then(res => {
        let array = []
        res.forEach(d => {
            array.push({
                id: d.id,
                data: d.data()
            })
        })
        cb(array)
    })
    .catch(error => {
        console.error("Error getting documents: ", error);
    });

const updateBooth = props => {
    let id = props.id
    let top = props.boothinfo.top
    let left = props.boothinfo.left
    boothsRef.doc(id).update({ top: top, left: left })
        // .then((d)=>console.log('updated',d))
        .catch(error => {
            console.error("Error getting documents: ", error);
        })
}


export default function () {
    const [boothsData, setBoothsData] = useState([])

    useEffect(() => {
        getBooths(setBoothsData)
    }, [])

    const Booths = []
    boothsData.map(doc => {
        Booths.push(<Booth key={doc.id} doc={doc} />)
    })

    console.log('boothsdata', boothsData)

    const handleSubmit = e => {
        e.preventDefault()
        let value = e.target.label.value
        let newData = { label: value, left: 210, top: 1 }
        boothsRef.doc(value).set(newData).then(() => {
            boothsRef.doc(value).get().then(d => console.log(d.data)).catch(error => {
                console.log("Error getting documents: ", error);
            })

            setBoothsData(prev => ([...prev, {
                id: value,
                data: newData
            }]))

        }).catch(error => {
            console.log("Error getting documents: ", error);
        })
    }

    return <Container>
        {Booths}
        <form onSubmit={handleSubmit}>
            <input type='text' name='label' placeholder='add a new booth' />
            <button>+</button>
        </form>
    </Container>
}

