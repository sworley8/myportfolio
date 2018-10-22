import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return (
      <div className= "contact-body">
        <Grid className= "contact-grid">
          <Cell col={6}>
            <h2>Sophia Worley</h2>
            <img
              src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairCurvy&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Twinkle&skinColor=Light"
              alt="avatar"
              style={{height: "200px", paddingTop: '3em'}}
            />
            <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
              I am currently a student at Georgia Tech. Please contact me if you would like to know more about me, or if you would like to work on a future project with me.
              Also please reach out if you would like to connect in some fashion for future job, current internship, or co-op oppurtunities. Have a nice day.
            </p>
          </Cell>
          <Cell col={6}>
            <h2 style={{paddingBottom: '1em'}}>Contact Me</h2>
            <hr/>
            <div className= "contact-list">
              <List style={{width: '800px'}}>
                <ListItem>
                  <ListItemContent style={{fontSize: '22px', fontFamily: 'Niramit', color: '#E6E6FA'}}>
                  <i class="fa fa-phone-square" aria-hidden="true" fontSize= "70px"/>
                  678-230-9193
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '22px', fontFamily: 'Niramit' , color: '#E6E6FA'}}>
                  <i class="fa fa-envelope" aria-hidden="true"/>
                  sophiaworley@hotmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '22px', fontFamily: 'Niramit', color: '#E6E6FA'}}>
                  <i class="fa fa-skype" aria-hidden="true"/>
                  sophiaworley
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '22px', fontFamily: 'Niramit', color: '#E6E6FA'}}>
                  <i class="fa fa-location-arrow" aria-hidden="true"/>
                  113 Township Court Woodstock, GA
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
