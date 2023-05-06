
import React from "react";
import { useState } from "react";
export const Wer =({prop})=>{ 
    const[cont, setCont]= useState(0)
    const[price, setprice]= useState(prop.som)
     const oplus=()=>{
        setCont((cont)=>cont+1)
        setprice((price)=>price+prop.som)
     }
     const ominus=()=>{
      setCont((cont)=>cont-1)
      setprice((price)=>price-prop.som)
   }
    return(
        <div className="block">
      
            <div className='for'>
            <img  src={prop.img} alt="" />
            <h2>{prop.name}</h2>
            <span>{prop.use}</span>
            <div>
  </div>
  <div className="er">
           <h3>{price}$</h3>
    <div className="cont">
        
        <button className="btn" onClick={oplus}>+</button>
        <p>{cont}</p>
        <button className="btn" onClick={ominus}>-</button>

    </div>
             
            
          
    <button onClick={()=>{
    alert('ваш заказ принят')
    }} className="fol">Заказать</button>
        
    </div>
         </div>
         
        </div>
    )
}