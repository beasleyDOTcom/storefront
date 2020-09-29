// WHEN CATEGORIES.JS CALLS setActiveCategory(shoes) activeCategory gets called with arguments of activeCategory({type: setActive, payload: shoes})
//BECAUSE setActiveCategory IS LISTED INSIDE OF mapDispatchToProps

//define initial state
const initialState = {
    activeCategory: 'hell',
    category:[],
    products: [],
}



//define reducer

export default function activeCategory(state = initialState, action){
// type/payload is how you know what you are going to do (what action and with what etc)
    const { type, payload } = action;
console.log('made it to products.js')
    switch(type){
        case 'setActive':
            console.log('made it inside of "setActive"', payload)
            console.log('active category', state.activeCategory)
        return { activeCategory :payload}
        

        default:
            return state;
    }



    // console.log('you have used reducer' state)
    return state;
}


export const setActiveCategory = (category)=>{
   return   { type:'setActive', payload: category }
}
// returns whatever the hello  for active
//define actions sometimes called creators (functions to call from components etc.)


