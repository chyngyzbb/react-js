import React from "react";


function Example({getValue}){
    let str="Kandai"
    return(
        <div>
            <h4 className="text">Hi i' m For Example</h4>
            <button onClick={()=>getValue('Exemple')}
             style={{
                color:'white',
                background:'green',
                padding:'10px',
                borderRadius:'10px',
                width:'150px'
            }}>BUTTON</button>
            <h3>{str}</h3>
        </div>
    )
}
export default Example