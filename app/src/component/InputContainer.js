import React, { useState } from 'react'
import ItemList from './ItemList';
const InputContainer=()=>{

    const [itemToBuy,setItemToBuy]=useState([]);
    const [textInputValue,setTextInputValue]=useState("");
    const onClickHandler =()=>{
        setItemToBuy((prevData)=>{
            return[...prevData,textInputValue]
        })
        setTextInputValue="";
    }
    return(
        <div
        style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            
            height:'100vh'
        }}
        >
             <div
        style={{
            backgroundColor:'lightpink',
            padding:'10px',
            width:'30%',
            textAlign:'center'
        }}
        >
            <h2>Grocery Bud</h2>
            <div>
                <input type='text' value={textInputValue} onChange={(e)=>{
                    setTextInputValue(e.target.value)
                }} style={{
                    width:'60%'
                }
                    
                }/>
                <button onClick={onClickHandler}>Add Item</button>
            </div>
            <div>

                {itemToBuy.map((elem,index)=><ItemList itemToBuy={itemToBuy} setItemToBuy={setItemToBuy} itemName={elem} index={index}/>)}
            </div>
        </div>
        </div>
       
    )
}
export default InputContainer;