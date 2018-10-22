import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'


class WelcomePage extends Component {
  render() {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid>
          <Cell col={12}>
          <img
            src='https://avataaars.io/?avatarStyle=Transparent&topType=LongHairCurvy&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Twinkle&skinColor=Light'
            atl='Avatar'
            className='avatar-img'
          />
          <div className= "banner-text">
            <h1>Software Developer</h1>
            <hr/>
            <p>
            Java | Python | HTML/CSS | React | Javascript | Android Studios | Unity | MySQL
            </p>
            <div className= "social-icons">

              <a href="https://github.com/sworley8" rel= "noopener noreferrer" target="blank">
              <i className="fa fa-github" aria-hidden= "true" />
              </a>

              <a href="https://drive.google.com/open?id=1cWPhOtcR3xUWLfG1F_fl1rO4lZjAt0Ma" rel= "noopener noreferrer" target="blank">
              <i className="fa fa-image" aria-hidden= "true" />
              </a>

              <a href="https://www.linkedin.com/in/sophia-worley418/" rel= "noopener noreferrer" target="blank">
              <i className="fa fa-linkedin-square" aria-hidden= "true" />
              </a>

            </div>
          </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default WelcomePage;
