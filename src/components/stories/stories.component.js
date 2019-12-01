import React from "react";
import "./stories.component.css";

const Stores = () => (
  <div className="stories">
    <div>
      <span className="history">Histórias</span>{" "}
      <strong className="vertudo">Ver tudo</strong>
    </div>
    <ul className="ul-list">
      <li className="list-stores">
        {" "}
        <div class="gradient">
          <img
            alt="img-stories"
            className="img-stories"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKwtjjHCSCy5a-R9r2Ji6fJ7hxktkriJK2yl74ikfXaZDeV4ck"
          />{" "}
        </div>
        <strong className="name-store">Sumo</strong>
      </li>
      <li className="list-stores">
        {" "}
        <div class="gradient">
          <img
            alt="img-stories"
            className="img-stories"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvsNaOA1g8L9W_HkcsE4koicz3JOFHyFycRtaYigNiI2HAPsGr"
          />{" "}
        </div>
        <strong className="name-store">Jeff</strong>
      </li>
      <li className="list-stores">
        {" "}
        <div class="gradient">
          <img
            alt="img-stories"
            className="img-stories"
            src="https://vignette.wikia.nocookie.net/clarencio/images/b/b1/Equilibrado.png/revision/latest?cb=20190315162049&path-prefix=pt-br"
          />{" "}
        </div>
        <strong className="name-store">Equilibrado</strong>
      </li>
      <li className="list-stores">
        {" "}
        <div class="gradient">
          <img
            alt="img-stories"
            className="img-stories"
            src="https://img.sharetv.com/shows/characters/large/clarence.chad.jpg"
          />{" "}
        </div>
        <strong className="name-store">Chadão</strong>
      </li>
    </ul>
  </div>
);

export default Stores;
