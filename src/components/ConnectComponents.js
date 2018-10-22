import React from 'react';
import AboutMePage from './AboutMePage';
import ContactPage from './ContactPage';
import GraphicsPage from './GraphicsPage';
import ProjectsPage from './ProjectsPage';
import ResumePage from './ResumePage';
import LandingPage from './LandingPage';
import { Switch, Route } from 'react-router-dom'

const ConnectingComponents = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/AboutMePage" component={AboutMePage} />
    <Route path="/ContactPage" component={ContactPage} />
    <Route path="/GraphicsPage" component={GraphicsPage} />
    <Route path="/ProjectsPage" component={ProjectsPage} />
    <Route path="/ResumePage" component={ResumePage} />
  </Switch>
)

export default ConnectingComponents;
