import React from 'react'
import { Link } from 'react-router-dom'

import '../css/temp-nav-bar.css'

const TempNavBar = () => {
    return (
        <div className='temp-nav-bar-container'>
            <Link to='/form1'>Form 1</Link>
            <Link to='/form2'>Form 2</Link>
            <Link to='/form3'>Form 3</Link>
            <Link to='/form4'>Form 4</Link>
        </div>
    )
}

export default TempNavBar