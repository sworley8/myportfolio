import React, { Component } from 'react';
import './App.css';
import ConnectingComponents from './components/ConnectComponents';
import { Layout, Header, HeaderRow, Navigation, Drawer,Content, Textfield } from 'react-mdl';
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Layout style={{background: 'url(https://images.freeimages.com/images/large-previews/047/headed-down-1400175.jpg) center / cover'}}>
          <Header waterfall hideTop className= "header-color" style={{color: 'white'}}>
              <HeaderRow title={<Link style={{textDeoration: 'none', color: 'white'}} to="/">Sophia Worleys Portfolio</Link>} scroll>
                  <Textfield
                      value=""
                      onChange={() => {}}
                      label="Search3"
                      expandable
                      expandableIcon="search"
                    />
                </HeaderRow>
              <HeaderRow>
                  <Navigation>
                      <Link to="/AboutMePage">About Me</Link>
                      <Link to="/ResumePage">Resume</Link>
                      <Link to="/ProjectsPage">Projects</Link>
                      <Link to="/GraphicsPage">Graphics</Link>
                      <Link to="/ContactPage">Contact Me</Link>
                    </Navigation>
                </HeaderRow>
            </Header>
          <Drawer title={<Link style={{textDeoration: 'none', color: 'grey'}} to="/">Sophia Worleys Portfolio</Link>} scroll>
              <Navigation>
                  <Link to="/AboutMePage">About Me</Link>
                  <Link to="/ResumePage">Resume</Link>
                  <Link to="/ProjectsPage">Projects</Link>
                  <Link to="/GraphicsPage">Graphics</Link>
                  <Link to="/ContactPage">Contact Me</Link>
                </Navigation>
            </Drawer>
          <Content>
              <div className="page-content" />
              <ConnectingComponents />
            </Content>
        </Layout>
    </div>
    );
  }
}

export default App;
