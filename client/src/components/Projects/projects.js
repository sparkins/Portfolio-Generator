import React, { Component } from 'react';
import './projects.css';
import { Form, Input, Button, Modal, TextArea } from 'semantic-ui-react';



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

// const ModalBasicExample = () => (
//   <Modal trigger={<Button>Basic Modal</Button>} basic size='small'>
//     <Header icon='archive' content='Archive Old Messages' />
//     <Modal.Content>
//       <p>
//         Your inbox is getting full, would you like us to enable automatic archiving of old messages?
//       </p>
//     </Modal.Content>
//     <Modal.Actions>
//       <Button basic color='red' inverted>
//         <Icon name='remove' /> Delete Project
//       </Button>
//       <Button color='green' inverted>
//         <Icon name='add' /> Add Project
//       </Button>
//     </Modal.Actions>
//   </Modal>
// )

// export default ModalBasicExample


