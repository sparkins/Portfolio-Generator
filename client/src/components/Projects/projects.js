import React, { Component } from 'react';
import './projects.css';
import { Form, Input, Button } from 'semantic-ui-react';



class Projects extends Component {
  render() {
    return (
      <Form className='projectForm' id={this.props.cssId} onSubmit={this.props.func}>
        <Form.Field
          id='name'
          control={Input}
          label='Project Name'
          placeholder='Enter project Name'
        />
        <Form.Field
          id='description'
          control={Input}
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
        <Button primary>Submit</Button>
          {/* id='project-submit'
          control={Button}
          label='Submit'
          content={this.props.submitButton} */}
        {/* /> */}
      </Form>
    );
  }
}

export default Projects;