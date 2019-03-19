import React, { Component } from 'react';
import { Card, Image, Button, Grid, Container, Form, Input, TextArea } from 'semantic-ui-react'
import './projectPage.css';
import {AddProject} from '../../components/Projects/projectForm'
import { _loadProjects, _createProject, _deleteProject, _updateProject } from '../../services/ProjectService'

// export const projectCards = props => (

//   <Card.Group>

//     <Card className="projectCards">
//       <Card.Content>
//         <Image className="projectImg" size='mini'
//           alt={props.project.image}
//           src={require(`./../${props.project.image}`)}
//         />
//         <Card.Header className="projectCardHeader"> {props.project.name}</Card.Header>
//         <Card.Description className="projectDesc">{props.project.description}</Card.Description>
//       </Card.Content>
//       <Card.Content extra>
//         <div className='project-buttons'>
//           <Button basic color='blue' href={require(`${props.project.github}`)}>
//             GitHub
//           </Button>
//           <Button basic color='blue' href={require(`${props.project.launchapp}`)}>
//             Launch App
//           </Button>
//         </div>
//       </Card.Content>
//     </Card>
//   </Card.Group>

// )

class ProjectDisplay extends Component {
  state = {
    // projects: [{ name: "Clicky", description: "A memory game", image: "/images/emoji-nerd.png" }, { name: "Trivia", description: "World Cup themed trivia game", image: "/images/TriviaGameImage.png" }, { name: "giffy", description: "Using api's to load gifs", image: "/images/emoji-nerd.png" }],
    projects: [],
    name: "",
    description: "",
    image: "",
    github: "",
    launchapp: "",
    edit: true
  }

  componentDidMount() {
    fetch("/allprojects")
      .then(res => res.json())
      .then(projects => this.setState({ projects }))
  }

  getProjects = (_loadProjects) => {

  }

  addProject = (event, _createProject) => {

    let name = event.target.children[0].value;
    let description = event.target.children[1].value;

    return _createProject(name, description).then(ap => {
      let projects = [...this.state.projects, ap];
      this.setState({ projects })
    })
  }

  deleteProject = (event, _deleteProject) => {
    var id = event.target.getAttribute('data-id');

    return _deleteProject(id).then(deletedProjectId => {
      let projects = this.state.projects.filter(project => project._id !== deletedProjectId)
      this.setState({ projects })
    })
  }

  editProject = (_updateProject) => {

  }
  render() {

    return (
      <Grid>
        <Grid.Row columns={5}
          className="projectsGrid"
          style={{ "margin": "5%" }}>
          
          <Grid.Column floated='left' color='olive'>
          {/* <AddProject /> */}
            <Form className='projectForm' id={this.props.cssId} onSubmit={this.props.func}>
              <h2>Add a New Project</h2>
              <Form.Field
                id='name'
                control={Input}
                label='Project Name'
                placeholder='Enter project Name'
              />
              <Form.Field
                id='description'
                control={TextArea}
                label='Project Description'
                placeholder='Enter the project description'
              />
              <Form.Field
                id='image'
                control={Input}
                label='Image Link'
                placeholder='Enter url to your image'
              />
              <Form.Field
                id='github'
                control={Input}
                label='Github Link'
                placeholder="Enter the project's github url"
              />
              <Form.Field
                id='launchapp'
                control={Input}
                label='App Link'
                placeholder='Enter the url to launch your app'
              />
              <Button primary>Add Project</Button>
              {/* id='project-submit'
                control={Button}
                label='Submit'
                content={this.props.submitButton} */}
              
             </Form>
            </Grid.Column>

            {/* <Grid.Row columns={4}> */}
            {this.state.projects.map((project, i) => (
              <Grid.Column key={i}>
                <Card>
                  <Card.Content>
                    <Image className="projectImg" floated='right' size='mini'
                      alt={project.image}
                      src={project.image} />
                    <Card.Header className="projectCardHeader"> {project.name}</Card.Header>
                    <Card.Description className="projectDesc">Description: {project.description}</Card.Description>
                  </Card.Content>
                  <div className='ui two buttons'>
                    <Button basic color='blue' href="https://github.com/sparkins/">GitHub</Button>
                    <Button basic color='blue' href="https://sparkins.github.io/ClickyGame/">Launch App</Button>
                  </div>
                  <div className='ui two buttons'>
                    <Button basic color='green'>Edit Project</Button>
                    <Button basic color='red'>Delete Project</Button>
                  </div>
                </Card>
              </Grid.Column>
            ))}
          </Grid.Row>
      </Grid>
    )
  }
}

export default ProjectDisplay;