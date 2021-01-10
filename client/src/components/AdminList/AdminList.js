import React, { useState } from 'react'
import styled from 'styled-components'
import { dummyInfoArr } from './utils'
import ListItem from './ListItem'
import ListItemInfo from './ListItemInfo'
import atpLogo from '../../assets/images/atp-logo.png'

const ListContainer = styled.div`
    width: 328px;
    max-height: 312px;
    border: 2px dashed orange;
`

export default function AdminList() {
    const [isExpandOpen, setIsExpandOpen] = useState(false)
    const [toggleState, setToggleState] = useState('vendor')
    
    function openCloseExpand(status, setter) {
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
                toggleState={toggleState}
                setToggleState={setToggleState}
            />

        </ListContainer>
    )
}
