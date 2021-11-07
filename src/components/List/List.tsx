import { Grid, Box, Paper } from '@material-ui/core';
import React from 'react';
import { MOCK_CAR_ADS } from '../../core/constants/MOCK_CAR_ADS';
import useCarAds from '../../core/hooks/useCarAds';
import { ICarAd } from '../../core/interfaces/ICarAd';
import { AdCard } from '../AdCard';
import { AdModal } from '../AdModal';

export const List: React.FC = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [targetCarAd, setTargetCarAd] = React.useState<ICarAd>();
  const handleOpenModal = (carAd: ICarAd) => {
    setTargetCarAd(carAd);
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setTargetCarAd(undefined);
    setOpenModal(false);
  };

  const { carAds, loading, hasError } = useCarAds(true);

  return (
    <Box
      display="flex"
      justifyContent="center"
      sx={{ padding: 3, height: 'calc(100vh - 64px)' }}
    >
      {/* {!loading && carAds?.map((item) => <AdCard key={item.id} carAd={item} />)} */}
      <Paper sx={{ maxWidth: 1264, padding: 3, bgcolor: 'background.paper' }}>
        <Grid container spacing={2} sx={{ marginBottom: 'auto' }}>
          {MOCK_CAR_ADS.map((item) => (
            <Grid key={item.id} item>
              <AdCard carAd={item} onClick={() => handleOpenModal(item)} />
            </Grid>
          ))}
        </Grid>
      </Paper>
      {targetCarAd && (
        <AdModal
          open={openModal}
          handleClose={handleCloseModal}
          carAd={targetCarAd}
        />
      )}
    </Box>
  );
};
