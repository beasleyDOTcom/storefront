import React from 'react'
import {connect} from 'react-redux';
import { setActiveCategory } from '../store/products.js';

const Categories = (props) => {
    return (

        <h1 onClick={()=>props.setActiveCategory('shoes')}>{props.activeCategory}</h1>
    )
}
const mapStateToProps = (state) =>{
        //return object key you want to return on props, and the values you want associated with that prop
//this value (state.products) comes directly from the reducer {products}
    return {
        activeCategory: state.products.activeCategory,       
    }
}

const mapDispatchToProps = {
    setActiveCategory,
}
export default connect(mapStateToProps, mapDispatchToProps)( Categories)
