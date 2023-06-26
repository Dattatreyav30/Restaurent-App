import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemHandler = (item) => {
    const existingItem = items.find((obj) => {
      return obj.id === item.id;
    });
  
    if (existingItem) {
      setItems((prevItems) => {
        const updatedItems = prevItems.map((prevItem) => {
          if (prevItem.id === item.id) {
            return { ...prevItem, qty: Number(prevItem.qty) + 1 };
          }
          return prevItem;
        });
        return updatedItems;
      });
    } else {
      setItems((prevItems) => {
        return [item, ...prevItems];
      });
    }
  };

  const removeItemHandler = (id) => {};

  const updateQtyHandler = (item, qty) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.map((prevItem) => {
        if (prevItem.id === item.id) {
          return { ...prevItem, qty: prevItem.qty + qty };
        }
        return prevItem;
      });
      return updatedItems;
    });
  };

  const cartContext = {
    items: items,
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    updateQuantity: updateQtyHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
