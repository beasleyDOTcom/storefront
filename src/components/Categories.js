import React from 'react'
import {connect} from 'react-redux';

function Categories(props) {
    return (

        <h1>You're in Categories{props.activeCategory}</h1>
    )
}
const mapStateToProps = (state) =>{
        //return object key you want to return on props, and the values you want associated with that prop
//this value (state.products) comes directly from the reducer {products}
    return {
        activeCategory: state.products.activeCategory,       
    }
}

// const mapDispatchToProps = 
export default connect(mapStateToProps)( Categories)
