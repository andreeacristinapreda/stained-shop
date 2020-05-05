import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from "./favouritesConstants";

const initialState = {
    products:[]
}

function favouritesReducer(state = initialState, action){

    switch(action.type){
        case ADD_TO_FAVOURITES:
            let productInFavourites = false;
            const updatedProducts = state.products.map((product) => {
                if(product.id === action.payload.product.id){
                    productInFavourites = true;
                }
                    return{
                        ...product,
                        fav:true
                    }
            })

            if(productInFavourites){
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
                            fav:true
                        }
                    ]
                }
            }

            case REMOVE_FROM_FAVOURITES:
                const updatedRemoveProducts = state.products.filter((product)=> product.id !== action.payload.product.id)
                
                return {
                    ...state,
                    products:updatedRemoveProducts
                }

                
            

        default: return state;
    }
}
export default favouritesReducer;