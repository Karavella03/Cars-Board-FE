import React, { useState } from 'react';
import { Container, Button } from '@material-ui/core';

import './App.css';
import Router from './core/router/Router/Router';
import { ROUTES } from './core/router/ROUTES';

function App() {
  const [isAuth, setAuth] = useState(true);

  const toggleAuth = () => setAuth(!isAuth);

  return (
    <Container maxWidth={false} disableGutters>
      <Router auth={isAuth} routes={ROUTES} />
      {/* <Button variant="contained" color="secondary" onClick={toggleAuth}>
        Auth
      </Button> */}
    </Container>
  );
}

export default App;
