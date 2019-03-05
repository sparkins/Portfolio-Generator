import React from 'react';
import { Container, Image, Menu, Button, Header } from 'semantic-ui-react';
import './navbar.css';

// Create a sticky navbar that show the title of the game, a dynamic message and the scoreboard
class Navbar extends React.Component {

    render() {
        return (
                    <Container className="navbar">
                        <Header className="header" as='a'>Portfolio Generator</Header>
                        <Button className="projectPage" as='a'>Projects Page</Button>
                        <Button className="profilePage" as='a'>Profile Page</Button>
                    </Container>
        );
    }
}

export default Navbar;