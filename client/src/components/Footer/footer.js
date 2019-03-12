import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import './footer.css';

// Create a sticky navbar that show the title of the game, a dynamic message and the scoreboard
class Footer extends React.Component {

    render() {
        return (
                    <Container className="footer">
                        <Header className="footer-text">&copy;Copyright Mingming Caressi, Mohammed Farahat, Amaan Javed, Simon Parkinson 2019</Header>
                    </Container>
        );
    }
}

export default Footer;
