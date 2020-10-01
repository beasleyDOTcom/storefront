'use strict';

let initialState = [
    {id:792384023, name: 'Be Your Shape', category: 'discography', price: 999.99, inStock: 99},
]

export default (state = initialState, action) =>{
    let {type, payload } = action;

    switch (type){
        case 'ADD':
            return [...state, payload]
        case 'DELETE':
            //delete item from cart
            // run through array and filter to return everythign that isnt the object you are deleting
            return state.filter(item => item ===payload? console.log('deleted', item): item);
        default:
            return state;
    
        }

}

export const addToCart = item =>{
    return {
        type: 'ADD',
        payload: item
    }
}

export const deleteFromCart = item =>{
    return {
        type: 'DELETE',
        payload: item
    }
}