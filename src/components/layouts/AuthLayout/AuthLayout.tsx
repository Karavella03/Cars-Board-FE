import { Container } from '@material-ui/core';
import React from 'react';

export const AuthLayout: React.FC = ({ children }) => (
  <Container maxWidth={false} disableGutters>
    AUTH
    {children}
  </Container>
);
