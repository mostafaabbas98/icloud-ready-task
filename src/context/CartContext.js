import { createContext, useContext, useEffect, useReducer } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

const cartReducer = (state, action) => {
  // set initial cart from local storage
  if (action.type === 'INITIAL') {
    return action.initialCart;
  }

  if (action.type === 'ADD') {
    // set new price & quantity on add
    const newTotalQuantities = state.totalQuantities + action.item.quantity;
    const newTatalPrice =
      state.totalPrice + +action.item.price * action.item.quantity;

    // check if added item is already exist
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.items[existingItemIndex];

    let updatingItems;
    // if item which added is already exisit only increase quantity
    if (existingItem) {
      const updatingItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };

      updatingItems = [...state.items];
      updatingItems[existingItemIndex] = updatingItem;
    } else {
      // if item which added not exisit so added to items list
      updatingItems = state.items.concat(action.item);
    }

    // save updating cart to local storage
    localStorage.setItem(
      'cartInital',
      JSON.stringify({
        items: updatingItems,
        totalQuantities: newTotalQuantities,
        totalPrice: newTatalPrice,
      })
    );

    return {
      items: updatingItems,
      totalQuantities: newTotalQuantities,
      totalPrice: newTatalPrice,
    };
  }

  if (action.type === 'CLEARITEM') {
    // check the item we need to remove already exisit
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingItemIndex];
    // modify new price & quantity of cart when we remove
    const newTotalQuantities = state.totalQuantities - existingItem.quantity;
    const newTatalPrice =
      state.totalPrice - +existingItem.price * existingItem.quantity;
    let updatingItems;
    updatingItems = state.items.filter((item) => item.id !== action.id);

    // save updating cart to local storage
    localStorage.setItem(
      'cartInital',
      JSON.stringify({
        items: updatingItems,
        totalQuantities: newTotalQuantities,
        totalPrice: newTatalPrice,
      })
    );

    return {
      items: updatingItems,
      totalQuantities: newTotalQuantities,
      totalPrice: newTatalPrice,
    };
  }

  if (action.type === 'REMOVE') {
    // check the item we need to remove already exisit
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingItemIndex];

    // modify new price & quantity of cart when we remove
    const newTotalQuantities = state.totalQuantities - 1;
    const newTatalPrice = state.totalPrice - +existingItem.price;

    let updatingItems;
    if (existingItem.quantity === 1) {
      // if the item which remove have one quantity so we removed from cart
      updatingItems = state.items.filter((item) => item.id !== action.id);
    } else {
      // if the item which remove have more than one quantity so we decrease amount
      const updatingItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      updatingItems = [...state.items];
      updatingItems[existingItemIndex] = updatingItem;
    }

    // save updating cart to local storage
    localStorage.setItem(
      'cartInital',
      JSON.stringify({
        items: updatingItems,
        totalQuantities: newTotalQuantities,
        totalPrice: newTatalPrice,
      })
    );

    return {
      items: updatingItems,
      totalQuantities: newTotalQuantities,
      totalPrice: newTatalPrice,
    };
  }
  if (action.type === 'CLEAR') {
    // clear cart from local storage
    localStorage.setItem(
      'cartInital',
      JSON.stringify({
        items: [],
        totalQuantities: 0,
        totalPrice: 0,
      })
    );
    return {
      items: [],
      totalQuantities: 0,
      totalPrice: 0,
    };
  }
  return {
    items: [],
    totalQuantities: 0,
    totalPrice: 0,
  };
};

export function CartProvider({ children }) {
  const [cartState, dispatchCart] = useReducer(cartReducer, {
    items: [],
    totalQuantities: 0,
    totalPrice: 0,
  });

  useEffect(() => {
    // check if there is cart data in local storage and set it to initial cart value
    dispatchCart({
      type: 'INITIAL',
      initialCart: JSON.parse(localStorage.getItem('cartInital')) || {
        items: [],
        totalQuantities: 0,
        totalPrice: 0,
      },
    });
  }, []);

  const AddItemToCart = (item) => {
    dispatchCart({ type: 'ADD', item: item });
  };

  const DeleteItemFromCart = (id) => {
    dispatchCart({ type: 'REMOVE', id: id });
  };

  const ClearItemFromCart = (id) => {
    dispatchCart({ type: 'CLEARITEM', id: id });
  };

  const ClearCart = () => {
    dispatchCart({ type: 'CLEARCART' });
  };

  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        totalQuantities: cartState.totalQuantities,
        totalPrice: cartState.totalPrice,
        addItem: AddItemToCart,
        removeItem: DeleteItemFromCart,
        ClearItem: ClearItemFromCart,
        clearCart: ClearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
