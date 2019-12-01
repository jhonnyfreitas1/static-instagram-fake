import React from "react";
import "./carditem.component.css";
const CardItem = props => (
  <li>
    <div className="carditem">
      <div class="profile">
        <img alt="perfil-img" className="img-card" src={props.src} />
        <div className="names">
          <p className="name-user-card">{props.name}</p>
        </div>
      </div>
      <img alt="post image" className="img-post" src={props.srcFinal} />
      <i class="far fa-heart fa-lg icons1" />
      <strong>
        {props.description ? props.description : "Description of post"}
      </strong>
    </div>
  </li>
);

export default CardItem;
