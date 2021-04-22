import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Alert, Breadcrumb, Card } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card style={{color: '#000'}}>
          <Card.Img src='https://vistapointe.net/images/card-wallpaper-15.jpg' />
          <Card.Body>
            <Card.Title>
              Card Example
            </Card.Title>
            <Card.Text>
              this is the exemple of bootstrap card
            </Card.Text>
            <Button variant='primary'>Read More</Button>
          </Card.Body>
        </Card>
        <Breadcrumb>
          <Breadcrumb.Item>Test 1</Breadcrumb.Item>
          <Breadcrumb.Item>Test 2</Breadcrumb.Item>
          <Breadcrumb.Item active>Test 3</Breadcrumb.Item>
        </Breadcrumb>
        <Alert varient='success'>Alert Button</Alert>
        <Button>Button</Button>
      </header>
    </div>
  );
}

export default App;
