import React from "react";
import { Link } from "react-router-dom";
import AuthButton from './AuthButton'

export default function Navbar() {
    return <>
          <AuthButton/>
        <ul>
            <li>
                <Link to="/public">Public Page</Link>
            </li>
            <li>
                <Link to="/user">User Page</Link>
            </li>
        </ul>
    </>
}