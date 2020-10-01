'use strict';

import React from 'react';
import { connect } from "react-redux";
import {deleteFromCart} from '../store/cartStore.js';

const SimpleCart = props =>{


    return (
        <section>
            <h1>Cart ({props.cart.length})</h1><button onClick={()=>deleteFromCart()}> X </button>
        </section>
    )

}
const mapDispatchToProps = {
    deleteFromCart,
}

const mapStateToProps = state =>({
    cart: state.cartStore,
})

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);