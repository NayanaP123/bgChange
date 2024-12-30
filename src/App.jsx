import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './App.css';

function App() {

  const bgChange = (color) => {
    document.body.style.background = color;
  };

  return (
    <Container>
      <Row>
        <Col xs={12} md={4}></Col>
        <Col xs={12} md={4}>
          <h1 className='text color' style={{marginTop:'40px'}}>ColorShift</h1>
          <p className='text'><em>Click the button to transform the background color</em></p>
          <br />
          <div className="d-flex flex-column gap-2 ">
            <Button
              onClick={() => bgChange("rgb(106, 244, 244)")}
              style={{ color: 'black', backgroundColor: 'rgb(106, 244, 244)', border: '2px solid black',borderRadius:'15px' }}
            >
              <h5>Blue</h5>
            </Button>
            <Button
              onClick={() => bgChange("rgb(108, 244, 106)")}
              style={{ color: 'black', backgroundColor: 'rgb(108, 244, 106)', border: '2px solid black',borderRadius:'15px' }}
            >
              <h5>Green</h5>
            </Button>
            <Button
              onClick={() => bgChange("rgb(238, 72, 72)")}
              style={{ color: 'black', backgroundColor: 'rgb(238, 72, 72)', border: '2px solid black',borderRadius:'15px' }}
            >
              <h5>Red</h5>
            </Button>
            <Button
              onClick={() => bgChange("rgb(244, 106, 219)")}
              style={{ color: 'black', backgroundColor: 'rgb(244, 106, 219)', border: '2px solid black',borderRadius:'15px' }}
            >
              <h5>Pink</h5>
            </Button>
            <Button
              onClick={() => bgChange("rgb(244, 233, 106)")}
              style={{ color: 'black', backgroundColor: 'rgb(244, 233, 106)', border: '2px solid black',borderRadius:'15px' }}
            >
              <h5>Yellow</h5>
            </Button>
          </div>
        </Col>
        <Col xs={12} md={4}></Col>
      </Row>
    </Container>
  );
}

export default App;
