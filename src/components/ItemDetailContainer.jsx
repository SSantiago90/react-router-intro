import React from "react";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const idParam = useParams().id;
  console.log("Este es el id", idParam);

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

  let itemBuscado = itemsData.find((item) => item.id == idParam);
  console.log(itemBuscado);

  return (
    <div>
      <h1>Detalles del producto</h1>
      <div>
        <h3>Producto 1</h3>
        <img src="https://picsum.photos/200" alt="producto 1" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <h4>Precio: $1000</h4>
      </div>
    </div>
  );
}

export default ItemDetailContainer;
