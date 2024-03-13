import React, { useState } from "react";
const ItemList=({itemName , index ,itemToBuy,setItemToBuy})=>{
    const [isChecked,setIsChecked]=useState(false);
    const deleteHandler=()=>{
        setItemToBuy((prevState)=>{
            const data=[...prevState];
            data.splice(index,1)
            return data
        })

    }
    return(
        <div
        style={{
            display:"flex",
            alignItems:'center',
            justifyContent:'space-between',
            padding:'0px 30px'

        }}
        
         key={index}>
            <div>
               <input type='checkbox' onChange={(e)=>{
                setIsChecked((prevValue)=>!prevValue)
               }}/> 
            </div>
            <div><p
            style={{
                textDecoration:isChecked ? 'line-through':'none'
            }}
            
            >{itemName}</p></div>
            <div>
                <button
                onClick={deleteHandler} 
                >DELETE</button>
            </div>

        </div>
    )
}
export default ItemList;