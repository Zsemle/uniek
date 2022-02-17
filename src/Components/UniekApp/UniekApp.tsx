import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import './UniekApp.css';
import PlanPage from '../PlanPage/PlanPage';
import AppHeader from '../AppHeader/AppHeader';

const UniekApp:React.FC = ():JSX.Element => (
  <>
    <CssBaseline />
    <div className="uniek-app">
      <AppHeader />
      <PlanPage />
    </div>
  </>
);

export default UniekApp;
