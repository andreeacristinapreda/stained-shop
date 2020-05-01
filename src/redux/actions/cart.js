export function addToCart(payload){
    return{
        type: 'ADD_TO_CART', //numele actiunii => se va evalua in reducer
        payload: payload
    }
}

export function removeFromCart(payload){
    return{
        type: 'REMOVE_FROM_CART', 
        payload: payload
    }
}