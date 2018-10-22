import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience.js';
import Leadership from './leadership.js';


class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairCurvy&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Twinkle&skinColor=Light"
                alt="avatar"
                style={{height: "200px", paddingTop: '2em'}}
              />
            </div>
            <h2 style={{paddingTop: '2em', color: '#3f2945'}}>Sophia Worley</h2>
            <h4 style={{color: '#3f2945'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #3f2945', width: '50%'}}/>
            <p className="skillsInfo">
              Coding Languages [in order of how comfortable]: <br/>
              Java, Python, React Javascript, HTML/CSS, C#, SQL <br/>
              Software Used: <br/>
              Photoshop, Illustrator, Android Studio, Unity, Selenium, Linux <br/>
              Languages Known: <br/>
              English[Fluent], Spanish[Fluent], French[Intermediate], Korean[Basic] <br/>
              Personal Skills: <br/>
              Public speaking, Leading teams, Problem solving, Conflict manager, Adaptable <br/>
              Relevant Coursework: <br/>
              CS Design and Analysis-Algorithms, CS Objects and Design, CS Data Structures and Algorithm,
              CS Discrete math, Math Linear Algebra, and CS User Interface and Design
            </p>
            <hr style={{borderTop: '3px solid #3f2945', width: '50%'}}/>
            <h5 className="skillsInfo">Address</h5>
            <p className="skillsInfo">113 Township Court Woodstock GA 30189</p>
            <h5 className="skillsInfo">Phone</h5>
            <p className="skillsInfo">678-230-9193</p>
            <h5 className="skillsInfo">Email</h5>
            <p className="skillsInfo">sophiaworley@hotmail.com</p>
            <h5 className="skillsInfo">Website</h5>
            <p className="skillsInfo">www.sophiaworley.com</p>
            <hr style={{borderTop: '3px solid #3f2945', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right" col={8}>
            <h2 style={{textAlign: 'center'}}>Education</h2>
            <Education
              startYear= {2016}
              endYear= {2020}
              schoolName= "Georgia Institute of Technology"
              schoolDescription= "Bachelor of Science in Computer Science"
            />
            <Education
              startYear= {2012}
              endYear= {2016}
              schoolName= "Woodstock High School"
              schoolDescription= "High School Diploma with High Honors"
            />
            <hr className='hrAlign' style={{borderTop: '3px solid #3f2945', width: '50%'}}/>

            <h2 style={{textAlign: 'center'}}>Experience</h2>
            <Experience
              startYear= "September 2018"
              endYear= "Present"
              internName= "Virtual Student Intern for State Department"
              internDescription= "Working to make their SQL database more user friendly currently; Intend to make new access server compatible with Windows 10 with same functions as current database"
            />
            <Experience
              startYear= "June 2017"
              endYear= "Present"
              internName= "DJ for Georgia Tech radio station"
              internDescription= "Learned time management, communication, and interpersonal skills; Provided music to different groups like Latin welcome festival and VSA moon festival"
            />
            <Experience
              startYear= "May 2018"
              endYear= "August 2018"
              internName= "Associate Software Engineer Intern at Autotrader.com"
              internDescription= "Made use of React Javascript to modify and change the website on the front-end; Used Java to create new features from the back-end to improve productivity on the website; Created sections of the website from front-end to back-end throughout the internship; Fixed defects and created automation tests for the features that release train had; Rewrote code and changed architecture in the codebase to be more readable"
            />
            <hr className='hrAlign' style={{borderTop: '3px solid #3f2945', width: '50%'}}/>

            <h2 style={{textAlign: 'center'}}>Activity And Leadership</h2>
            <Leadership
              startYear= "January 2017"
              endYear= "Present"
              clubName= "Member of GreyHat Club"
              clubDescription= "Learned basics of cybersecurity and Kali Linux; Worked on Raymond James and HackGT CTF"
            />
            <Leadership
              startYear= "August 2018"
              endYear= "Present"
              clubName= "Member of VGDev Club"
              clubDescription= "Learned of basics of Unity and basics of video game making; Creating a game now with a friend using these skills"
            />
            <Leadership
              startYear= "April 2017"
              endYear= "April 2018"
              clubName= "HackGT Catalyst Mentor at Georgia Tech"
              clubDescription= "Assisted around 20 students at a hackathon for high school students an opportunity to explore Computer Science; Worked with the students in HTML/CSS, Scratch, and Android Studios"
            />
            <Leadership
              startYear= "August 2017"
              endYear= "July 2018"
              clubName= "Associate Software Engineer Intern at Autotrader.com"
              clubDescription= "Made use of React Javascript to modify and change the website on the front-end; Used Java to create new features from the back-end to improve productivity on the website; Created sections of the website from front-end to back-end throughout the internship; Fixed defects and created automation tests for the features that release train had; Rewrote code and changed architecture in the codebase to be more readable"
            />
            <hr className='hrAlign' style={{borderTop: '3px solid #3f2945', width: '50%'}}/>

          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
