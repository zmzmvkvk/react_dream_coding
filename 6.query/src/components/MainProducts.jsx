import React, { useState } from "react";
import Products from "./Products";
import { v4 as uuidv4 } from "uuid";
import { useQueryClient } from "@tanstack/react-query";

export default function MainProducts() {
  const id1 = uuidv4();
  const id2 = uuidv4();
  const [showLeftProducts, setShowLeftProducts] = useState(true);
  const [showRightProducts, setShowRightProducts] = useState(true);
  const client = useQueryClient();
  return (
    <main className="container">
      <div>
        {showLeftProducts && <Products id={id1} />}
        <button onClick={() => setShowLeftProducts((show) => !show)}>Toggle</button>
      </div>
      <div>
        {showRightProducts && <Products id={id2} />}
        <button onClick={() => setShowRightProducts((show) => !show)}>Toggle</button>
      </div>
      <button
        onClick={() => {
          client.invalidateQueries(["products"]);
        }}
      >
        정보가 업데이트 되었음!
      </button>
    </main>
  );
}
