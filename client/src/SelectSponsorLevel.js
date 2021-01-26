import React from 'react'
import{ SponsorshipCard }from './components/SponsorshipCard'
import {Link} from 'react-router-dom'


export default function SelectSponsorLevel(){

    return <div>
        <Link to='/checkout/level1'>
        <SponsorshipCard/>
        </Link>
        <Link to='/checkout/level/2'>
        <SponsorshipCard/>
        </Link>
        <Link to='/checkout/level/3'>
        <SponsorshipCard/>
        </Link>
    </div>
}