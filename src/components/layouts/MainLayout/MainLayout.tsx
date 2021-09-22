import {
  Container,
  AppBar,
  Typography,
  Toolbar,
  Button,
} from '@material-ui/core';
import React from 'react';

export const MainLayout: React.FC = ({ children }) => (
  <Container maxWidth={false} disableGutters>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Cars Board
        </Typography>
        <Button color="inherit">Log out</Button>
      </Toolbar>
    </AppBar>
    {children}
  </Container>
);
