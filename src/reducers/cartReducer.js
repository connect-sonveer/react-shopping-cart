import item1 from '../assets/images/item1.jpeg';
import item2 from '../assets/images/item2.jpeg';
import item3 from '../assets/images/item3.jpeg';
import item4 from '../assets/images/item4.jpeg';
import item5 from '../assets/images/item5.jpeg';
import { ADD_TO_CART, REMOVE_ITEM } from '../actions/cartTypes';
import { sortByKey } from '../helpers/utilCommon';

const initState = {
  items: [
    {
      id: 1,
      title: 'Winter body',
      size: '40',
      price: 110,
      desc: 'Billion PerfectFit Checked Color for Men',
      img: item1,
    },
    {
      id: 2,
      title: 'Adidas',
      size: '40',
      price: 80,
      desc: 'Men Printed Casual Shirt, Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
      img: item2,
    },
    {
      id: 3,
      title: 'Vans',
      size: '40',
      price: 120,
      desc: 'Men Solid Casual Spread Shirt, Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
      img: item3,
    },
    {
      id: 4,
      title: 'White',
      size: '40',
      price: 260,
      desc: 'Mens Solid Casual Button Down Shirt,Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',

      img: item4,
    },
    {
      id: 5,
      title: 'Cropped-sho',
      size: '40',
      price: 160,
      desc:
        'Solid Men Round Neck Blue, Grey Shirt, Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
      img: item5,
    },
  ],
  addedItems: [],
  total: 0,
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let addedItem = state.items.find((item) => item.id === action.id);

      //check if the action id exists in the addedItems
      let existed_item = JSON.parse(localStorage.getItem('cartItems')).find((item) => action.id === item.id);

      if (existed_item) {
        return {
          ...state,
        };
      } else {
        let existingCart = JSON.parse(localStorage.getItem('cartItems'));
        existingCart = existingCart.concat(addedItem);
        localStorage.setItem('cartItems', JSON.stringify(existingCart));
        state.addedItems = [...state.addedItems, addedItem];

        return {
          ...state,
          addedItems: state.addedItems,
        };
      }
    case REMOVE_ITEM:
      let itemList = JSON.parse(localStorage.getItem('cartItems'));
      let new_items = itemList.filter((item) => action.id !== item.id);
      localStorage.setItem('cartItems', JSON.stringify(new_items));

      return {
        ...state,
        addedItems: new_items,
      };
    default:
      sortByKey(state.items, 'price', 'asc');
      return state;
  }
};

export default cartReducer;
