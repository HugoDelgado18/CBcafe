import React from 'react';



function Reviews(props){
  return(
    <div>
      <h3>  {props.name} </h3>
      <p> {props.rating}   </p>
      <p> {props.content}   </p>

    </div>
  )
}


export default Reviews;
