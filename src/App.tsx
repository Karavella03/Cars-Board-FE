import React, { useState } from 'react';
import { Container, Button } from '@material-ui/core';

import './App.css';
import { MainLayout } from './components/layouts/MainLayout';
import { AuthLayout } from './components/layouts/AuthLayout';

function App() {
  const [isAuth, setAuth] = useState(true);

  const toggleAuth = () => setAuth(!isAuth);

  return (
    <Container maxWidth={false} disableGutters>
      {isAuth ? <MainLayout /> : <AuthLayout />}
      <Button variant="contained" color="secondary" onClick={toggleAuth}>
        Auth
      </Button>
    </Container>
  );
}

export default App;
