// import React from 'react'
import React, { Component } from 'react';
import { Card, Image, Button, Grid } from 'semantic-ui-react'
import './projectPage.css';
import {_loadProjects, _createProject, _deleteProject, _updateProject} from '../../services/ProjectService'

export const projectCards = props => (

    <Card.Group>
        
    <Card>
      <Card.Content>
        <Image className="projectImg" size='mini' 
          alt={props.project.image}
          src={require(`./../${props.project.image}`)}
          />
        <Card.Header className="projectCardHeader"> {props.project.name}</Card.Header>
        {/* <Card.Meta>New Game</Card.Meta> */}
        <Card.Description className="projectDesc">{props.project.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='project-buttons'>
          <Button basic color='blue' href={require(`${props.project.github}`)}>
            GitHub
          </Button>
          <Button basic color='blue' href={require(`${props.project.launchapp}`)}>>
            Launch App
          </Button>
        </div>
      </Card.Content>
    </Card>
  </Card.Group>

)

class ProjectDisplay extends Component {
  state = {
    projects: [{name: "Clicky", description: "A memory game", image: "/images/emoji-nerd.png" }, {name: "Trivia", description: "World Cup themed trivia game"}, {name: "giffy", description: "Using api's to load gifs"}],
    name: "",
    description: "",
    image: "",
    github: "",
    launchapp: ""
  }
  
  getProjects = (_loadProjects) => {

  }

  addProject = (event, _createProject) => {

    let name = event.target.children[0].value;
    let description = event.target.children[1].value;

    return _createProject(name, description).then(ap => {
        let projects = [...this.state.projects, ap];
        this.setState({projects})
      })
  }

  deleteProject = (event, _deleteProject) => {
    var id = event.target.getAttribute('data-id');

    return _deleteProject(id).then(deletedProjectId => {

            let projects = this.state.projects.filter(project => project._id !== deletedProjectId)

            this.setState({projects})
          })
  }

  editProject = (_updateProject) => {

  }
  render() {
    return (
      <div>
        <Grid
          className="projectsGrid"
          style={{"margin": "5%"}}>
          <Grid.Row columns={3}>
          {this.state.projects.map((project, i) => (
            <Grid.Column key={i}>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <img src={project.image}></img>
            {/* <projectCards className='projectCards' project={project} */}
            
            </Grid.Column>
          ))}
          </Grid.Row>
          </Grid>
      </div>
    )
  }
}

export default ProjectDisplay;
 