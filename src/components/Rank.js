import React from 'react'
import { userName } from '../Pages/Entry'

export default function Rank() {
    return (
        <div className="center mb3 mt3 line">
            <div className="white ins">
                <p style={{fontWeight:"bold"}}>{`Welcome , ${userName} , enjoy!!`}</p>
                <p>Can,read your photos!!</p>
                <p style={{fontWeight:"bold"}}>Instructions</p>
            </div>
        </div>
    )
}
