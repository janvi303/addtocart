
import React from "react";
import ItemCart from "./Itemcart";

import products, { data } from "./data/product";
const Homepage = () => {
  return (
    <>
      <h1 className="text-center mt-3"> All items</h1>
      <section className=" py-4 container">
        <div className=" row justify-content-center">
          {data.producatData.map((item, index) => {
            return (
              <ItemCart
                img={item.image}
                title={item.title}
                desc={item.desc}
                price={item.price}
                item={item}
                key={index}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Homepage;