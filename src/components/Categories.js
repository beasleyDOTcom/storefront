import React from 'react'
import {connect} from 'react-redux';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { activeCategory } from '../store/products.js';
import { deleteFromCart } from '../store/cartStore.js';

const useStyles = makeStyles((theme) =>({
    categories:{
        margin: theme.spacing(3),
    },
}));

const Categories = (props) => {
    console.log('this is props in Categories.js', props.categories)
    const classes = useStyles();

    return (
        <div className={classes.categories}>
            <Typography variant="h5">Browse bomb Categories</Typography>
            <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                {props.categories.map(cat =>
                <Button
                    key={cat._id} color="primary"
                     onClick={()=> props.activeCategory(cat.name)}>
                        {cat.displayName || cat.name}
                    </Button>
                    )}
            </ButtonGroup>
            <ButtonGroup align="right" variant="text" color="primary" aria-label="text primary button group">
                {props.cart.map(item =>
                <h4>{item.name}
                    <Button
                    key={item.id} color="primary"
                    onClick={()=> props.deleteFromCart(item)}>X</Button>
                    </h4>
                    
                    )}
            </ButtonGroup>
        </div>

        // <h1 onClick={()=>props.category('shoes')}>{props.activeCategory}</h1>
    )
}
const mapStateToProps = (state) =>({
        //return object key you want to return on props, and the values you want associated with that prop
//this value (state.products) comes directly from the reducer {products}
        categories: state.products.categories, 
        cart:state.cartStore,
        // category: state.categories     
    
})

const mapDispatchToProps = {
    activeCategory,
    deleteFromCart,
}
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
