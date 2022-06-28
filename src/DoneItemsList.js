import React from "react";


const DoneItemsList = (props)=>{


    return (
        <tr>
          <td>{props.text}</td>
          <td className='text-center col-sm-2'><button className="btn btn-sm btn-danger" onClick={()=>{
            props.onSelect(props.id);
          }}>Delete</button></td>
          
        </tr> 

    )

}

export default DoneItemsList