import React from 'react';
import {Grid} from ' @material-ui/core';
import product from './product/product';


const products = [
{ id: 1, name: 'Shoes' , description: 'running shoes.', price:'MKW40,000'},
{ id: 1, name: 'Trousers' , description: 'jeans.', price: 'MKW20,000' },


];

const Products = ()=> {
    <main>
       < Grid container justify="center" spacing={4}>
            { products.map((product) =>(
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                 <product product={product}/>
                </Grid>

            ))}
       </ Grid>
        
    </main>

}

export default Products;