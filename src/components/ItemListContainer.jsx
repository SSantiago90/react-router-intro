import React from "react";
import { Link } from "react-router-dom";

function ItemListContainer({ title }) {
  let itemsData = [
    {
      id: 1,
      title: "Flavor of Green Tea Over Rice (Ochazuke no aji)",
      price: 27,
      category: "Drama",
      country: "Ukraine",
      img: "http://dummyimage.com/280x260.png/cc0000/ffffff",
      stock: 7,
    },
    {
      id: 2,
      title: "Warrior, The",
      price: 18,
      category: "Adventure|Drama",
      country: "Argentina",
      img: "http://dummyimage.com/280x260.png/ff4444/ffffff",
      stock: 6,
    },
    {
      id: 3,
      title: "Battles Without Honor & Humanity (Jingi naki tatakai)",
      price: 46,
      category: "Crime|Drama",
      country: "Indonesia",
      img: "http://dummyimage.com/280x260.png/dddddd/000000",
      stock: 6,
    },
    {
      id: 4,
      title: "Badding",
      price: 19,
      category: "Comedy|Drama|Musical",
      country: "Yemen",
      img: "http://dummyimage.com/280x260.png/ff4444/ffffff",
      stock: 9,
    },
    {
      id: 5,
      title: "New Police Story (Xin jing cha gu shi)",
      price: 34,
      category: "Action|Crime|Drama",
      country: "Russia",
      img: "http://dummyimage.com/280x260.png/dddddd/000000",
      stock: 10,
    },
    {
      id: 6,
      title: "Alone (Issiz adam)",
      price: 19,
      category: "Drama|Romance",
      country: "Philippines",
      img: "http://dummyimage.com/280x260.png/cc0000/ffffff",
      stock: 5,
    },
    {
      id: 7,
      title: "Luster",
      price: 6,
      category: "Comedy|Drama|Romance",
      country: "New Caledonia",
      img: "http://dummyimage.com/280x260.png/5fa2dd/ffffff",
      stock: 6,
    },
    {
      id: 8,
      title: "Barkleys of Broadway, The",
      price: 92,
      category: "Comedy|Musical",
      country: "China",
      img: "http://dummyimage.com/280x260.png/dddddd/000000",
      stock: 10,
    },
    {
      id: 9,
      title: "Forgotten, The",
      price: 82,
      category: "Drama|Mystery|Sci-Fi|Thriller",
      country: "Sweden",
      img: "http://dummyimage.com/280x260.png/ff4444/ffffff",
      stock: 9,
    },
    {
      id: 10,
      title: "Broadway Melody of 1936",
      price: 95,
      category: "Musical|Romance",
      country: "Russia",
      img: "http://dummyimage.com/280x260.png/ff4444/ffffff",
      stock: 6,
    },
  ];

  return (
    <>
      <h1>{title}</h1>
      <div>
        <h1>Bienvenidos a la tienda!</h1>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", alignItems: "center" }}>
          {itemsData.map((item) => (
            <div style={{ maxWidth: "420px", margin: "5px 15px 8px"}} key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.price}</p>
              <p>{item.category}</p>
              <p>{item.country}</p>
              <img src={item.img} alt={item.title} />
              <p>{item.stock}</p>

              <Link to={`/detalle/${item.id}`}>Ver más</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ItemListContainer;
