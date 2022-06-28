import React from "react";


const ItemList = (props)=>{


    return (
        <tr>
          <td>{props.text}</td>
          <td className='text-center col-sm-2'><button className="btn btn-sm btn-warning" onClick={()=>{
            props.onSelect(props.id);
            props.onMouseDown();
          }}>Done</button></td>
          
        </tr> 

    )

}

export default ItemList