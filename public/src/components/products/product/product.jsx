import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconBotton} from '@material-ui/core';
import { AddShoppingCArt } from '@material-ui/icons';
import { classes } from 'istanbul-lib-coverage';
import { typography } from '@material-ui/system';
import useStyles from ' ./styles';

const product = (product) => {

  const classes = useStyles();
  return (
      <card className={classes.root}>
      <CardMedia className={classes.media} image='' title={product.name}/>
        <CardContent>
            <div className={classes.CardContent}>
            <Typography variant ="h5" gutterBottom>
            {product.name}


            </Typography>
            <Typography variant='h5'>
            {product.price}

            </Typography>


            </div>
            <Typography variant="h2" color = "textSecondary">{product.description} 

            </Typography>
      </CardContent>

      <CardActions disableSpacing className={classes.CardActions}>
      <IconBotton aria-label=" Add to cart">
      <AddShoppingCArt/>

      </IconBotton>

      </CardActions>
    </card>
  )
}

export default product;
