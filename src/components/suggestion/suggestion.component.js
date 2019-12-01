import React from "react";
import "./suggestion.component.css";

const Suggestion = () => (
  <div className="suggestions">
    <div className="title">
      <span className="suggestion">Sugestoes para voce</span>{" "}
      <strong className="ver_tudo">Ver tudo</strong>
    </div>
    <ul>
      <li className="list-suggestion">
        {" "}
        <div>
          <img
            alt="img-stories"
            className="img-suggestions"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKwtjjHCSCy5a-R9r2Ji6fJ7hxktkriJK2yl74ikfXaZDeV4ck"
          />{" "}
          <strong className="name-suggestion">Sumo</strong>{" "}
          <a className="seguindo">Seguindo</a>
        </div>
      </li>
      <li className="list-suggestion">
        {" "}
        <div>
          <img
            alt="img-stories"
            className="img-suggestions"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKwtjjHCSCy5a-R9r2Ji6fJ7hxktkriJK2yl74ikfXaZDeV4ck"
          />{" "}
          <strong className="name-suggestion">Sumo</strong>{" "}
          <a className="seguindo">Seguindo</a>
        </div>
      </li>
      <li className="list-suggestion">
        {" "}
        <div>
          <img
            alt="img-stories"
            className="img-suggestions"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKwtjjHCSCy5a-R9r2Ji6fJ7hxktkriJK2yl74ikfXaZDeV4ck"
          />{" "}
          <strong className="name-suggestion">Sumo</strong>{" "}
          <a className="seguindo">Seguindo</a>
        </div>
      </li>
    </ul>
  </div>
);

export default Suggestion;
