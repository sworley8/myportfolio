import React, { Component } from 'react';


class Me extends Component {
  render() {
    return (
      <div>
        <h2 className= "centerText">Sophia Worley</h2>
        <img
          src="https://media.licdn.com/dms/image/C4E03AQE-cDsPAi8ADA/profile-displayphoto-shrink_200_200/0?e=1545264000&v=beta&t=SYser0tzWoNWkDKmk2jWhhtqqbRB3vMirzBtmW9v6CE"
          alt="avatar"
          style={{height: "250px", paddingTop: '1em'}}
          class= "center"
          />
        <p className= "aboutMe" style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
          I am a computer science major at Georgia Tech. I started programming at Georgia Tech as a 1st year. Prior to that class, I did not know what I wanted to do. I was lucky enough to find it in computer science.
          I learned to program in Java, Python, Javascript, HTML/CSS, SQL and C# during or outside of Georgia Tech. I learned primary through class or doing side projects by myself or with friends.
          Currently I am working on creating two video games from scratch, one by myself and one with a friend. I am fond of doing back-end and front-end work.
          I also enjoy working on databases and security work. Outside of class I like to create apps or video games. In my free time, I work at the radio station, play tennis, and travel.
          Feel free to view my projects here on this website that I created using react javascript, react router, and react mdl.
          Personally, I am currently looking for an internship or a co-op, where the company will invest in me as an individual and help me grow to be a better programmer.
          Thanks from Sophia Worley.
        </p>
      </div>
    );
  }
}

export default Me;
