const initialState ={
    products: []
}

function cartReducer(state = initialState, action){

    switch(action.type){

        case 'ADD_TO_CART':
            
            const newState = {
                ...state, 
                products: [
                    ...state.products,
                    action.payload.product 
                ]
            }
            return newState;

         case 'REMOVE_FROM_CART':

             const newStateAfterDelete = state.products.filter((product)=> product.id !== action.payload.product.id)
            
             return {
                 ...state,
                 products:newStateAfterDelete
             }

        default:
            return state;
        
      }
}

export default cartReducer;
