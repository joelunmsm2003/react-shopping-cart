export default function reducer(state = {
  items: []
}, action) {
  switch (action.type) {
    case "FETCH_ITEMS": {
      return {
        ...state
      }
    }
    case "FETCH_ITEMS_FULFILLED": {
      if(state.items.length === 0 ) {
        return {
          ...state,
          items: action.payload
        }
      }
      break;
    }
    case "SYNC_QUANTITY": {

      const { quantity, item } = action.payload;
      
      // function modifyQuantity(item, quantity){
        state.items.map((thisItem) => thisItem.productName == item ? thisItem.quantity = quantity : null)
      // }

      // modifyQuantity(item, quantity)

      return {
        ...state
      }
    }
  }

  return state;
}