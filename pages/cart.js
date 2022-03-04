
import { defaultHead } from "next/head";
import React from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { useCart } from "react-use-cart";
import product1 from '../Image/product_2.jpg'
import Image from 'next/image'

export const Cart = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const {
    isEmpty,
    totalUniqueItems,
    items,
    cartTotal,
    totalItems,
    updateItemQuantity,
    removeItem,
  } = useCart();
  if (isEmpty) return <p>Your cart is empty</p>;
  return (
    <>
    <div className="container">
      <Modal  size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={modalShow}
        onHide={() => setModalShow(false)}>
           <Modal.Header closeButton>
           <Modal.Title id="contained-modal-title-vcenter">
          add to cart 
        </Modal.Title>
        <Modal.Body>
       
        <Table striped bordered hover>
        <tbody>
          {items.map((item) => (
            <div key={item.id}>
              <tr>
                <td>
                  {" "}
                  {item.quantity} x {item.name}{" "}
                </td>
                <td><Image src={item.image} alt="G1s" width="150" height="150" /></td>
                <td>{item.price}</td>
                <td> Quantity{item.quantity}</td>
                <td>
                  <Button
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </Button>
                  <Button
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </Button>
                  <Button className="btn-danger"onClick={() => removeItem(item.id)}>Remove</Button>
                </td>
              </tr>
            </div>
          ))}
        </tbody>
      </Table>
      <div className="col-auto mx-auto">
          <h2>Total Price:{cartTotal}</h2>
      </div>
      </Modal.Body>
           </Modal.Header>
      </Modal>
      <Button variant="primary" onClick={() => setModalShow(true)}>add to cart ({totalItems})</Button>
      {/* <h5>
        CArt ({totalUniqueItems}) total items:({totalItems})
      </h5> */}
     
     
      </div>
    </>
  );
};

export default Cart;
