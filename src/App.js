import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Form>
            <Row>
              <Col>
                <Form.Group controlId='formEmail'>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type='email' placeholder='Example@gmail.com' />
                  <Form.Text className='text-muted'>
                    We will never share your email address, trust us!
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId='formPassword'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type='password' placeholder='Password' />
                </Form.Group>
              </Col>
            </Row>
            <Button className='mb-4' variant='secondary' type='submit'>Login</Button>
          </Form>
          <Card className='mb-3' style={{color: '#000'}}>
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
          <Button className='mb-4'>Button</Button>
        </Container>
      </header>
    </div>
  );
}

export default App;
