import React, { useContext } from 'react'
import styled from 'styled-components'
import { Stage, Layer, Rect, Group } from 'react-konva'
import { julietBooths, alphaBooths, bravoBooths, charlieBooths, deltaBooths, echoBooths, foxBooths, golfBooths, hotelBooths, indiaBooths, kiloBooths, limaBooths } from './boothsDb'
import { BoothStateContext } from '../../providers/BoothContext'



const DiagramContainer = styled.div`
    width: 800px;
    height: 800px;
    position: relative;
    /* border: 2px solid lightcoral; */
`

const StyledStage = styled(Stage)`
    background: #E4EBE8;
    overflow: hidden;
    `

    export default function Diagram() {

        const [, setBoothState] = useContext(BoothStateContext)
        // console.log(selectorState)
        const width = 20
        const height = 20

        function handleClick(e) {
            const { boothNumber, reservedBy } = e.target.attrs
            setBoothState({boothNumber: boothNumber, reservedBy: reservedBy})
        }

        let juliet = julietBooths.map((booth, idx) => {
            const { x, y, fill, boothNumber, isReserved, reservedBy, powered } = booth
            return  <Rect
                        key={idx}
                        boothNumber={boothNumber}
                        isReserved={isReserved}
                        reservedBy={reservedBy}
                        powered={powered}
                        x={x}
                        y={y}
                        width={width}
                        height={height}
                        fill={fill}
                        onTap={handleClick}
                        onClick={handleClick}
                    />
        })
    
        let alpha = alphaBooths.map((booth, idx) => {
            const { x, y, fill, boothNumber, isReserved, reservedBy, powered } = booth
            return  <Rect
                        key={idx}
                        boothNumber={boothNumber}
                        isReserved={isReserved}
                        reservedBy={reservedBy}
                        powered={powered}
                        x={x}
                        y={y}
                        width={width}
                        height={height}
                        fill={fill}
                        onTap={handleClick}
                        onClick={handleClick}
                    />
        })
    
        let bravo = bravoBooths.map((booth, idx) => {
            const { x, y, fill, boothNumber, isReserved, reservedBy, powered } = booth
            return  <Rect
                        key={idx}
                        boothNumber={boothNumber}
                        isReserved={isReserved}
                        reservedBy={reservedBy}
                        powered={powered}
                        x={x}
                        y={y}
                        width={width}
                        height={height}
                        fill={fill}
                        onTap={handleClick}
                        onClick={handleClick}
                    />
        })
    
        let charlie = charlieBooths.map((booth, idx) => {
            const { x, y, fill, boothNumber, isReserved, reservedBy, powered } = booth
            return  <Rect
                        key={idx}
                        boothNumber={boothNumber}
                        isReserved={isReserved}
                        reservedBy={reservedBy}
                        powered={powered}
                        x={x}
                        y={y}
                        width={width}
                        height={height}
                        fill={fill}
                    />
        })
    
        let delta = deltaBooths.map((booth, idx) => {
            const { x, y, fill, boothNumber, isReserved, reservedBy, powered } = booth
            return  <Rect
                        key={idx}
                        boothNumber={boothNumber}
                        isReserved={isReserved}
                        reservedBy={reservedBy}
                        powered={powered}
                        x={x}
                        y={y}
                        width={width}
                        height={height}
                        fill={fill}
                    />
        })
    
        let echo = echoBooths.map((booth, idx) => {
            const { x, y, fill, boothNumber, isReserved, reservedBy, powered } = booth
            return  <Rect
                        key={idx}
                        boothNumber={boothNumber}
                        isReserved={isReserved}
                        reservedBy={reservedBy}
                        powered={powered}
                        x={x}
                        y={y}
                        width={width}
                        height={height}
                        fill={fill}
                    />
        })
    
        let fox = foxBooths.map((booth, idx) => {
            const { x, y, fill, boothNumber, isReserved, reservedBy, powered } = booth
            return  <Rect
                        key={idx}
                        boothNumber={boothNumber}
                        isReserved={isReserved}
                        reservedBy={reservedBy}
                        powered={powered}
                        x={x}
                        y={y}
                        width={width}
                        height={height}
                        fill={fill}
                    />
        })
    
        let golf = golfBooths.map((booth, idx) => {
            const { x, y, fill, boothNumber, isReserved, reservedBy, powered } = booth
            return  <Rect
                        key={idx}
                        boothNumber={boothNumber}
                        isReserved={isReserved}
                        reservedBy={reservedBy}
                        powered={powered}
                        x={x}
                        y={y}
                        width={width}
                        height={height}
                        fill={fill}
                    />
        })
    
        let hotel = hotelBooths.map((booth, idx) => {
            const { x, y, fill, boothNumber, isReserved, reservedBy, powered } = booth
            return  <Rect
                        key={idx}
                        boothNumber={boothNumber}
                        isReserved={isReserved}
                        reservedBy={reservedBy}
                        powered={powered}
                        x={x}
                        y={y}
                        width={width}
                        height={height}
                        fill={fill}
                    />
        })
    
        let india = indiaBooths.map((booth, idx) => {
            const { x, y, fill, boothNumber, isReserved, reservedBy, powered } = booth
            return  <Rect
                        key={idx}
                        boothNumber={boothNumber}
                        isReserved={isReserved}
                        reservedBy={reservedBy}
                        powered={powered}
                        x={x}
                        y={y}
                        width={width}
                        height={height}
                        fill={fill}
                    />
        })
    
        let kilo = kiloBooths.map((booth, idx) => {
            const { x, y, fill, boothNumber, isReserved, reservedBy, powered } = booth
            return  <Rect
                        key={idx}
                        boothNumber={boothNumber}
                        isReserved={isReserved}
                        reservedBy={reservedBy}
                        powered={powered}
                        x={x}
                        y={y}
                        width={width}
                        height={height}
                        fill={fill}
                    />
        })
    
        let lima = limaBooths.map((booth, idx) => {
            const { x, y, fill, boothNumber, isReserved, reservedBy, powered } = booth
            return  <Rect
                        key={idx}
                        boothNumber={boothNumber}
                        isReserved={isReserved}
                        reservedBy={reservedBy}
                        powered={powered}
                        x={x}
                        y={y}
                        width={width}
                        height={height}
                        fill={fill}
                    />
        })

        return (
            <DiagramContainer>
                <StyledStage width={800} height={800} draggable={true}>
                <Layer>
                    <Group x={0} y={300} rotation={0}>
                        {alpha}
                    </Group>

                    <Group x={100} y={300} rotation={0}>
                        {bravo}
                    </Group>

                    <Group x={200} y={300} rotation={0}>
                        {charlie}
                    </Group>

                    <Group x={225} y={300} rotation={0}>
                        {delta}
                    </Group>

                    <Group x={300} y={300} rotation={0}>
                        {echo}
                    </Group>

                    <Group x={350} y={300} rotation={0}>
                        {fox}
                    </Group>

                    <Group x={400} y={300} rotation={0}>
                        {golf}
                    </Group>

                    <Group x={450} y={300} rotation={0}>
                        {hotel}
                    </Group>

                    <Group x={500} y={325} rotation={0}>
                        {india}
                    </Group>

                    <Group x={0} y={850} rotation={0}>
                        {juliet}
                    </Group>

                    <Group x={200} y={175} rotation={0}>
                        {kilo}
                    </Group>

                    <Group x={350} y={25} rotation={0}>
                        {lima}
                    </Group>
                </Layer>
                </StyledStage>
            </DiagramContainer>
        )
    }