import React from "react";


function Example(){
    let str="Salam"
    return(
        <div>
            <h4 className="text">Hi i' m For Example</h4>
            <button onClick={()=>alert(str)}
             style={{
                color:'white',
                background:'green',
                padding:'10px',
                borderRadius:'10px',
                width:'150px'
            }}>click</button>
            <h3>{str}</h3>
        </div>
    )
}
export default Example