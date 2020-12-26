import './Projects.css';
import './nicepage.css';
import HeaderProjects from './HeaderProjects';
import LineProjects from './LineProjects';
import projectList from './projectList.json';
import React,{Component} from 'react';

class Projects extends Component {
  state = projectList;

  render() {
    // console.log(this.state.projects);
    return (
      <div>
        <HeaderProjects />
        {this.state.projects.map((projLine,idx)=>(
          <LineProjects key={100+idx} sectionNumber={idx+2} projL={projLine} />
        ))}
      </div>
    );
  } 
}

export default Projects;