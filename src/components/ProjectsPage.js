import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if(this.state.activeTab === 0) {
      return (
        <div className= "projects-grid">
          <Card shadow={0} style={{width: '525px', margin: 'auto'}}>
            <CardTitle className="bgweb" style={{color: '#4B0082', height: '175px'}}>My Portfolio</CardTitle>
            <CardText style={{color: '#3F2945'}}>D8BFD8
              This is my react website. Here, I will explain the process I went through to create it and the different APIs that I used while creating it.
            </CardText>
            <CardActions border>
              <Button style={{color: '#D8BFD8'}} colored ripple>My process to create the Website</Button>
              <Button style={{color: '#D8BFD8'}} colored ripple>Github</Button>
              <Button style={{color: '#D8BFD8'}} colored ripple>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div className= "projects-grid">
          {/*Project1*/}
          <Card shadow={5} style={{width: '525px', margin: 'auto'}}>
            <CardTitle className="bgnemo" style={{color: '#4B0082', height: '176px', background: 'url(https://connpass-tokyo.s3.amazonaws.com/event/78004/95b1f54ba33e456098675e0b14baf06e.jpg) center / cover'}}>Nemo, Taken</CardTitle>
            <CardText style={{color: '#3F2945'}}>
              This is me and my friends third person shooter game. Here, I will explain the process I went through with my friend to create it.
            </CardText>
            <CardActions border>
              <Button style={{color: '#D8BFD8'}} colored ripple>My process to create the game</Button>
              <Button style={{color: '#D8BFD8'}} colored ripple>Github</Button>
              <Button style={{color: '#D8BFD8'}} colored ripple>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/*Project2*/}
          <Card shadow={5} style={{width: '525px', margin: 'auto'}}>
            <CardTitle className="bgwodric" style={{color: '#4B0082', height: '176px'}}>Wodric</CardTitle>
            <CardText style={{color: '#3F2945'}}>
              This is my platformer game. Here, I will explain the process I went through with my friend to create it.
            </CardText>
            <CardActions border>
              <Button style={{color: '#D8BFD8'}} colored ripple>My process to create the game</Button>
              <Button style={{color: '#D8BFD8'}} colored ripple>Github</Button>
              <Button style={{color: '#D8BFD8'}} colored ripple>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <div className= "projects-grid">
          <Card shadow={0} style={{width: '525px', margin: 'auto'}}>
            <CardTitle className="bgapp" style={{color: '#4B0082', height: '176px'}}>Donation Tracker</CardTitle>
            <CardText style={{color: '#3F2945'}}>
              This is my teams android app, which was a Donation Tracker for charity. Here, I will explain the process I went through to create it and the different APIs that I used while creating it.
            </CardText>
            <CardActions border>
            <Button style={{color: '#D8BFD8'}} colored ripple>My process to create the app</Button>
            <Button style={{color: '#D8BFD8'}} colored ripple>Github</Button>
            <Button style={{color: '#D8BFD8'}} colored ripple>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={0} style={{width: '525px', margin: 'auto'}}>
            <CardTitle className="bgstuda" style={{color: '#4B0082', height: '176px'}}>Studyaholic</CardTitle>
            <CardText style={{color: '#3F2945'}}>
              This is my teams UX protype, which was an app to match people into study groups. Here, I will explain the process I went through to create it and the different APIs that I used while creating it.
            </CardText>
            <CardActions border>
            <Button style={{color: '#D8BFD8'}} colored ripple>My process to create the protype</Button>
            <Button style={{color: '#D8BFD8'}} colored ripple>Github</Button>
            <Button style={{color: '#D8BFD8'}} colored ripple>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    }
  }
  render() {
    return (
      <div className= "category-tabs">
        <Tabs activeTab= {this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
          <Tab>React Website</Tab>
          <Tab>Unity Game</Tab>
          <Tab>Apps and Protypes</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
