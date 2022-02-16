import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconBotton} from '@material-ui/core';
import { AddShoppingCArt } from '@material-ui/icons';
import { classes } from 'istanbul-lib-coverage';

const product = () => {
  return (
    <div>
      <card className={classes.root}>
      <CardMedia className={classes.media} image='' title={product.name}/>

      </card>
    </div>
  );
}

export default product;
