import React, { useState } from 'react'
import styled from 'styled-components'
import { dummyInfoArr } from './utils'
import ListItem from './ListItem'

const ListContainer = styled.div`
    width: 328px;
    max-height: 312px;
    border: 2px dashed orange;
`

export default function AdminList() {
    const [isExpandOpen, setIsExpandOpen] = useState(false)
    
    function openCloseExpand(status, setter) {
        console.log()
        if (status === false) {
            setter(true)
        } else if (status === true) {
            setter(false)
        }
    }

    return (
        <ListContainer>
            <ListItem
                vendorInfo={dummyInfoArr[0]}
                isExpandOpen={isExpandOpen} 
                openExpand={() => openCloseExpand(isExpandOpen, setIsExpandOpen)}
            />

        </ListContainer>
    )
}
