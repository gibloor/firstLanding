import React from 'react';
import './App.scss';
import Header from './components/Header';
import BestSeller from './components/BestSeller';
import OrientalTaste from './components/OrientalTaste';
import Statistics from './components/Statistics';
import ChickenGrill from './components/ChickenGrill';
import SenoraFields from './components/SenoraFields';
import Subscribe from './components/Subscribe';
import Basement from './components/Basement';

function App() {
  return (
    <>
      <Header />
      <BestSeller />
      <OrientalTaste />
      <Statistics />
      <ChickenGrill />
      <SenoraFields />
      <Subscribe />
      <Basement />
    </>
  );
}

export default App;
