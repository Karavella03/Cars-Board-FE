import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia,
  Box,
  Grid,
} from '@material-ui/core';
import React, { useMemo } from 'react';
import { ICarAd } from '../../core/interfaces/ICarAd';

export type AdCardProps = {
  carAd: ICarAd;
  onClick: () => void;
};

export const AdCard: React.FC<AdCardProps> = ({ carAd, onClick }) => {
  const {
    brand,
    model,
    color,
    numberOfOwners,
    price,
    productionDate,
    description,
    imageSrc,
  } = carAd;

  const shortDescription = useMemo(() => {
    if (description.length > 210) {
      return description.substring(0, 205);
    }
    return description;
  }, [description]);

  return (
    <Card sx={{ width: 600 }} onClick={onClick}>
      <CardActionArea>
        <CardContent>
          <Grid container>
            <Grid item xs={7}>
              <Typography variant="h5">{`${brand} ${model}, ${productionDate}`}</Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography variant="h5" sx={{ textAlign: 'right' }}>{`${Number(
                price
              ).toLocaleString()} руб.`}</Typography>
            </Grid>
          </Grid>
          <Box sx={{ marginTop: 2 }}>
            <Grid container spacing={5}>
              <Grid item xs={5}>
                <Typography
                  variant="body1"
                  color="text.secondary"
                >{`Владельцев: ${numberOfOwners}`}</Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                >{`Цвет: ${color}`}</Typography>
                <Typography variant="body2">{`Описание: ${shortDescription}...`}</Typography>
              </Grid>
              <Grid item xs={7}>
                <CardMedia
                  sx={{ boxShadow: 1 }}
                  component="img"
                  height="230"
                  image={imageSrc}
                  alt={`${brand} ${model} ${productionDate} ${price} руб.`}
                />
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
