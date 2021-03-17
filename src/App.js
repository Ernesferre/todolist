import { Container, Row, Col } from 'react-bootstrap';
import List from './Components/List';
import Create from './Components/Create';

function App() {
  return (
    <Container>
      <Row>
        
        <Col>
          <Create/>  
        </Col>

        <Col>
          <List/>
        </Col>

      </Row>
    </Container>
  );
}

export default App;
