// WHEN CATEGORIES.JS CALLS setActiveCategory(shoes) activeCategory gets called with arguments of activeCategory({type: setActive, payload: shoes})
//BECAUSE setActiveCategory IS LISTED INSIDE OF mapDispatchToProps

//define initial state
const initialState = {
    activeCategory: 'hell',
    category:[
        {name: 'discography',  displayName: 'Discography'},
        {name: 'clothing',  displayName: 'Sick Threads'},
        {name: 'pickles',  displayName: 'Pickles'},
    ],
    products: [
        { name: 'Be Your Shape', category: 'discography', price: 999.99, inStock: 99},
        { name: 'Spicy Pickled Veggies', category: 'pickles', price: 49.99, inStock: 49},
        { name: 'Sweet and Sour Hatch Pepper Pickles', category: 'pickles', price:79.99, inStock: 79},
        { name: 'There\'s a place here for you', category: 'discography', price: 89.99, inStock: 89},
        { name: 'Mushroom Hat', category: 'clothing', price: 9999.99, inStock: 999},
    ],
}



//define reducer

export default (state = initialState, action) => {
// type/payload is how you know what you are going to do (what action and with what etc)
    const { type, payload } = action;

    switch(type){
        case 'CATEGORY':
        return { ...state, activeCategory:payload}
        

        default:
            return state;
    }

};


export const category = (category)=>{
   return   { 
       type:'CATEGORY', 
       payload: category, 
    }
}
// returns whatever the hello  for active
//define actions sometimes called creators (functions to call from components etc.)


