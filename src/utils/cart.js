import { calcSubPrice, calcTotalPrice, getItemsFromLocalStorage, setItemsToLocalStorage } from './helpers';

export const addItemToCart = (product, count = 1) => {
  let cart = getItemsFromLocalStorage('cart');

  if (!cart) {
    cart = {
      products: [],
      totalPrice: 0,
    };
  }

  let newProduct = {
    item: product,
    count,
    subPrice: calcSubPrice(count, product.price),
  };

  return new Promise((resolve, reject) => {
    let productToFind = cart.products.filter((elem) => elem.item.id === product.id);

    if (productToFind.length == 0) {
      cart.products.push(newProduct);
      resolve({ cart, type: 'add' });
    } else {
      cart.products = cart.products.filter((elem) => elem.item.id !== product.id);
      console.log(cart.products);
      resolve({ cart, type: 'delete' });
    }
    cart.totalPrice = calcTotalPrice(cart.products);
    setItemsToLocalStorage('cart', cart);
  });
};

export const changeProductCount = (count, id) => {
  let cart = getItemsFromLocalStorage('cart');
  cart.products = cart.products.map((product) => {
    if (product.item.id === id) {
      product.count = count;
      product.subPrice = calcSubPrice(count, product.item.price);
    }
    return product;
  });
  cart.totalPrice = calcTotalPrice(cart.products);
  setItemsToLocalStorage('cart', cart);
};

export const getCartCount = () => {
  return getItemsFromLocalStorage('cart').products.length;
};
