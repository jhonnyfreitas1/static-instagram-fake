import React from "react";
import "./cardlist.component.css";
import CardItem from "../card-item/carditem.component";
const CardList = () => (
  <ul className="cardlist">
    <CardItem
      name="jhonnyy_wolf"
      src="http://pm1.narvii.com/6043/4929af8656a91aa816405890153512cbe31bd153_00.jpg"
      srcFinal="https://vignette.wikia.nocookie.net/clarence-la/images/3/32/Nuevo_auto_de_carreras.png/revision/latest?cb=20180415154032&path-prefix=es"
      description="Saudades da carla"
    />
    <CardItem
      name="Sumo"
      description="Dia de corte de cabelo com o clarencio"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKwtjjHCSCy5a-R9r2Ji6fJ7hxktkriJK2yl74ikfXaZDeV4ck"
      srcFinal="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTacdqpDwp7Yz9ClisKhhwAbBGzPyWOvK87KOXu4nZUBNmks6yu"
    />
    <CardItem
      name="Jeff"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvsNaOA1g8L9W_HkcsE4koicz3JOFHyFycRtaYigNiI2HAPsGr"
      srcFinal="https://cn.i.cdn.ti-platform.com/cnlatam/content/764/showpage/clarence/ar/showsquare.png"
      description="Foto feia também se posta"
    />
    <CardItem
      name="Equilibrado"
      src="https://vignette.wikia.nocookie.net/clarencio/images/b/b1/Equilibrado.png/revision/latest?cb=20190315162049&path-prefix=pt-br"
      srcFinal="https://animesonline.games/wp-content/uploads/2019/10/assistir-clarencio-o-otimista-dublado-desenhos-online-super-gratis-episodio50.jpg"
    />
  </ul>
);

export default CardList;
