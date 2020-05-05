import {ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES} from './favouritesConstants';

export function addToFavourites(payload){
    return{
        type: ADD_TO_FAVOURITES,
        payload
    }
}

export function removeFromFavourites(payload){
    return{
        type: REMOVE_FROM_FAVOURITES,
        payload
    }
}