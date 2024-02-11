import React from "react";
import Example from "./Example";

function Header({arrou, text, getValue}){
    return(
        <div>
            <h1>{text}</h1>
            <ul>
                {
                    arrou.map((el)=>(
                        <li
                        onClick={()=>getValue(el)}
                        key={el}
                         style={{
                            margin:'4px 0',
                            background:'yellow'
                        }}>
                            {el}</li>
                    ))
                }
            </ul>
            <Example
            getValue={getValue}
            />
        </div>
    )
}

export default Header