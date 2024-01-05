import { w as writable } from "./index2.js";
const cartStore = writable({
  cartItems: [],
  cartPrice: 0
});
export {
  cartStore as c
};
