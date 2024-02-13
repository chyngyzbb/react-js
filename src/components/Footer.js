import React from "react";
import { useState } from "react"

function Footer({counter}){
    const [color,setColor]=useState(false)
    const [valu,setValue]=useState('')
    const [modal,setModal]=useState(true)
    const chenge=(e)=>(
        setValue(e.target.value)
    )
    const click=()=>{
        if(valu==='12345'){
            return alert('ok')
        }
    }


    return(
        <div>
            <h2>{counter}</h2>
            <button
                onClick={()=>setModal(!modal)}
            >{modal?'open modal':'close modal'}</button>
            <div className="modal" style={{
                transform: modal?'scale(0)':'scale(1)'
            }}>
                 <input
                 style={{
                    width:'200px'
                 }}
            onChange={chenge}
            type="text"></input>
            <button
            style={{
                background:color?"red":"",
                width:'100px'
            }}
            onClick={()=>{
                click()
                setColor(!color)
            }}
            >footer</button>
            </div>
           
        </div>
    )
}
export default Footer