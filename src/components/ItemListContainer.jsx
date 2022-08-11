import React from "react";

function ItemListContainer({ title }) {
  return (
    <>
      <h1>{title}</h1>
      <div>
        <li>
          <div>Producto 1</div>
          <div>$100</div>
        </li>
        <li>
          <div>Producto 2</div>
          <div>$200</div>
        </li>
      </div>
    </>
  );
}

export default ItemListContainer;
