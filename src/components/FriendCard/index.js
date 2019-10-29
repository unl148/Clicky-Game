import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="button" onClick={() => props.clickFriend(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      
        {/*<div className="content">
         <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
        </ul>
        </div> 
      
      <span onClick={() => props.removeFriend(props.id)} className="remove">
        
      </span>*/}
    </div>
  );
}

export default FriendCard;
