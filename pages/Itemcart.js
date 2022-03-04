import Image from 'next/image'
import React from 'react'
import { useCart } from 'react-use-cart';


const ItemCart = (props) => {
  const { addItem } = useCart();
  return (
    <>
    <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
        <div className="card p-0 overflow-hidden h-100 shadow">
    <Image src={props.img}/>
  <div className="card-body text-center">
    <h5 className="card-title">{props.title}</h5>
    <p className="cart-text">{props.price}</p>
    <p className="card-text">{props.desc}</p>
    <button className="btn btn-success" onClick={() => addItem(props.item)}> add to cart</button>
      
  </div>
  </div>
</div>
    </>
  )
}

export default ItemCart