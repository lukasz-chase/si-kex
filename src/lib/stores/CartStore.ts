import type { cartItem, CartStore } from "$lib/types";
import { get, writable, type Writable } from "svelte/store";
// Initialize your cart store

export const cartStore: Writable<CartStore> = writable({
  cartItems: [],
  cartPrice: 0,
});

// Function to add an item to the cart
export const addItemToCart = (newItem: cartItem) => {
  const { cartItems, cartPrice } = get(cartStore);
  const duplicateIndex = cartItems.findIndex((item) => item.id === newItem.id);

  if (duplicateIndex !== -1) {
    // Item already exists, update its quantity and price
    cartStore.update((store) => {
      const updatedCartItems = [...store.cartItems];
      const existingItem = updatedCartItems[duplicateIndex];
      existingItem.quantity += 1;
      const updatedCartPrice = cartPrice + newItem.price;

      return {
        ...store,
        cartItems: updatedCartItems,
        cartPrice: updatedCartPrice,
      };
    });
  } else {
    // Item is not in the cart, add it
    cartStore.update((store) => {
      const updatedCartItems = [
        ...store.cartItems,
        { ...newItem, quantity: 1, totalPrice: newItem.price },
      ];
      const updatedCartPrice = cartPrice + newItem.price;

      return {
        ...store,
        cartItems: updatedCartItems,
        cartPrice: updatedCartPrice,
      };
    });
  }
};

// Function to remove an item from the cart
export const removeItemFromCart = (itemId: string) => {
  cartStore.update((store) => {
    const { cartItems, cartPrice } = store;

    // Find the index of the item to be removed
    const itemIndex = cartItems.findIndex((item) => item.id === itemId);

    if (itemIndex !== -1) {
      const existingItem = cartItems[itemIndex];

      // If the item quantity is greater than 1, decrease the quantity
      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        // If the item quantity is 1, remove the item from the cart
        cartItems.splice(itemIndex, 1);
      }

      // Update the cart price
      const updatedCartPrice = cartPrice - existingItem.price;

      // Return the updated store
      return {
        ...store,
        cartItems,
        cartPrice: updatedCartPrice,
      };
    }

    // If the item is not found, return the unchanged store
    return store;
  });
};
