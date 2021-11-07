import {
  Typography,
  Box,
  Modal,
  Theme,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from '@material-ui/core';
import { SxProps } from '@material-ui/system';
import React from 'react';
import { ICarAd } from '../../core/interfaces/ICarAd';

export type AdModalProps = {
  carAd: ICarAd;
  open: boolean;
  handleClose: () => void;
};

const style: SxProps<Theme> = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 1000,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

export const AdModal: React.FC<AdModalProps> = ({
  carAd,
  open,
  handleClose,
}) => {
  const {
    // id,
    brand,
    model,
    color,
    numberOfOwners,
    price,
    productionDate,
    description,
    imageSrc,
    user,
  } = carAd;

  return (
    <Modal open={open} onClose={handleClose}>
      <Card sx={style}>
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
                <Typography variant="body2">{`Описание: ${description}`}</Typography>
              </Grid>
              <Grid item xs={7}>
                <CardMedia
                  sx={{ boxShadow: 1, marginBottom: 1 }}
                  component="img"
                  height="380"
                  image={imageSrc}
                  alt={`${brand} ${model} ${productionDate} ${price} руб.`}
                />
                <Box sx={{ display: 'inline-block' }} component="span">
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    component="span"
                  >{`${user.name}, `}</Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    component="span"
                  >{`${user.email}`}</Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    component="div"
                  >{`${user.phone}`}</Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Modal>
  );
};
