import './App.css';
import '@fontsource/tinos';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Galleries from './pages/galleries';
import Services from './pages/services';
import MetalWork from './pages/services/MetalWork';
import TileWork from './pages/services/TileWork';
import Daniels from './pages/galleries/Daniels';
import ThirtySecondPl from './pages/galleries/ThirtySecondPl';
import { ThemeProvider } from '@mui/material';
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/services' element={<Services />} />
      <Route path='/services/metalwork' element={<MetalWork />} />
      <Route path='/services/tilework' element={<TileWork />} />
      <Route path='/galleries' element={<Galleries />} />
      <Route path='/galleries/daniels-job' element={<Daniels />} />
      <Route path='/galleries/32nd-place' element={<ThirtySecondPl />} />
    </Routes>
    </ThemeProvider>
  );
};

export default App;
