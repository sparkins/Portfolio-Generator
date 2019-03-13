import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import './projectPage.css';

const projectCards = props => (

    <Card.Group>
        
    <Card>
      <Card.Content>
        <Image className="projectImg" size='mini' 
          alt={props.image}
          src={require(`./../${props.image}`)}
          />
        <Card.Header className="projectCardHeader"> {props.name}</Card.Header>
        {/* <Card.Meta>New Game</Card.Meta> */}
        <Card.Description className="projectDesc">{props.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='blue' href={require(`${props.github}`)}>
            GitHub
          </Button>
          <Button basic color='blue' href={require(`${props.launchapp}`)}>>
            Launch App
          </Button>
        </div>
      </Card.Content>
    </Card>
  </Card.Group>

)

export default projectCards