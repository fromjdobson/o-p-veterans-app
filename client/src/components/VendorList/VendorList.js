import React from 'react'
import styled from 'styled-components'
import { VendorListItem } from '../VendorListItem'

const VendorListContainer = styled.div`
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 4px 5px rgba(0, 0, 0, 0.12), 0px 1px 10px rgba(0, 0, 0, 0.2);
`

export default function VendorList() {
    

    return (
        <VendorListContainer> 
           {/* {'listy'} */}
           <VendorListItem />
        </VendorListContainer>
    )
}