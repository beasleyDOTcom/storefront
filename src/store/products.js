//define initial state
const initialState = {
    activeCategory: 'furniture'
}



//define reducer

export default (state = initialState, action) =>{
// type/payload is how you know what you are going to do (what action and with what etc)
    const { type, payload } = action;

    switch(type){


        default:
            return state;
    }



    // console.log('you have used reducer' state)
    return state;
}

//define actions sometimes called creators (functions to call from components etc.)