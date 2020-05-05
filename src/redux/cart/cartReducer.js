import {ADD_TO_CART, REMOVE_FROM_CART} from './cartConstants';

const initialState ={
    products: []
}

function cartReducer(state = initialState, action){

    switch(action.type){

        case ADD_TO_CART:
           let productInCart = false;
           const updatedProducts = state.products.map((product) =>{
               if(product.id === action.payload.product.id){
                    productInCart = true;
                    return{
                        ...product,
                        quantity: product.quantity +1
                    }  
               }
               else return product;
           })

           if(productInCart){
               return{
                   ...state,
                   products: updatedProducts
               }
           }
           else{
               return{
                   ...state,
                   products:[
                       ...state.products,
                       {
                           ...action.payload.product,
                           quantity: 1
                       }
                   ]
               }
           }

         case REMOVE_FROM_CART:

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
