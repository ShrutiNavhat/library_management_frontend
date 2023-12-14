import React from 'react';
const Delete =(props)=>{
    return(
        <>
            <button onClick={()=>{props.onDelete()}} type="button" class="btn btn-danger mx-2">Delete</button>
        </>
    )
}
export default Delete;

