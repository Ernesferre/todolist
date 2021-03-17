import { Container, Row, Col } from 'react-bootstrap';
import List from './Components/List';
import Create from './Components/Create';
import Header from './Components/Header';

function App() {
  return (
    <Container>
      <Header
        title={"ToDo App"}
      />
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
