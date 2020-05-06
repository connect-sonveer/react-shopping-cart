import { ADD_TO_CART } from './cartTypes';
import { REMOVE_ITEM } from './cartTypes';
import { SORT_ITEMS } from './cartTypes';

export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id: id,
  };
};

export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id: id,
  };
};

export const sortItems = (id) => {
  return {
    type: SORT_ITEMS,
    id: id,
  };
};
