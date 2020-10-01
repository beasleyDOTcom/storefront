import React from 'react';
import { connect } from 'react-redux';
// import SimpleCart from './SimpleCart.js';
const Header = (props) => {
    return (
        <section>
            <h1>Merch Table</h1> <h2>Cart ({props.cart.length})</h2>
        </section>
    )
}

const mapStateToProps = state => ({
    cart: state.cartStore,
})
// const mapDispatchToProps = {
//     // displayCart
// }

export default connect(mapStateToProps)(Header);