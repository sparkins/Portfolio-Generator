import React from 'react';
import { Container, Button, Header, Menu } from 'semantic-ui-react';
import './navbar.css';

// Create a sticky navbar that show the title of the game, a dynamic message and the scoreboard
class Navbar extends React.Component {
    state = {
        edit: false
      }

    render() {
        return (
            <Container className="navbar">
                <Header className="nav-header" as='a'>Portfolio Generator</Header>
                <Menu.Item className="login" as='a' href={"/login"} style={this.state.edit ? {}:{display:'none'} }>Login</Menu.Item>
                <Menu.Item className="signout" as='a' href={"/login"} style={!this.state.edit ? {}:{display:'none'} }>Sign Out</Menu.Item>
                <Menu.Item className="projectPage" as='a' active href={"/Projects"}>Project Page</Menu.Item>
                <Menu.Item className="profilePage" as='a' href={"/profile"}>Profile Page</Menu.Item>
                <Menu.Item position='right'></Menu.Item>
            </Container>
        );
    }
}

export default Navbar;