import React from "react";
import { useState } from "react"

function Footer(){
    const [color,setColor]=useState(true)
    return(
        <div>
            <button
            
            onClick={()=>setColor(!color)}
            >footer</button>
        </div>
    )
}
export default Footer