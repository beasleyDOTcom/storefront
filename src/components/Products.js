import React from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import { addToCart } from '../store/cartStore.js';


// cart items and price 
// when yous elect add to cart the state changes and the cart is updated 
// 
const useStyles = makeStyles((theme) =>({
    cardGrid:{
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card:{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia:{
        paddingTop: '56.25%',
    },
    cardContent:{
        flexGrow:1,
    },
}));

function Products(props) {
    const classes = useStyles();
    const products = props.products.filter(product =>  product.category === props.ActiveCategory)
    return (
        <>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                  {products.map((product) =>
                    <Grid item key={product.name} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia className={classes.cardMedia}
                            image={`https://source.unsplash.com/random?${product.name}`}
                            title={product.name}/>
                            <CardContent className={classes.cardContent}>
                                <Typography gutterButtom variant="h5" component="h2">
                                    {product.name}
                                </Typography>
                                <Typography>
                                    {product.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button onClick={()=>props.addToCart(product)} size="small" color="primary">
                                    Add 2 Cart
                                </Button>
                                <Button size="small" color="primary">
                                    View Details
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid> 
                        )}
                </Grid>
            </Container>
        </>
        
    )
}
const mapStateToProps = (state) =>({
    products: state.products.products,
    ActiveCategory:state.products.activeCategory
})
const mapDispatchToProps = {
    addToCart,
}


export default connect(mapStateToProps, mapDispatchToProps)(Products);