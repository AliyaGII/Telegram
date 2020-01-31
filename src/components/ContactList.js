import React from 'react'

export default function Contact(props) {
    return (
        <div class="cont">
             <div class='h3'>
                <h3>
                  {props.name}
                </h3>
                <img src={props.imgUrl} alt="" srcSet="" />
                <span>{props.lastMessage}</span>
            </div>
         </div>
    )
}




