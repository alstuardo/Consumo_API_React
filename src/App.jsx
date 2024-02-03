import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MiApi from './components/MiApi';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from "react"
import './App.css'

const App = () => {
  const [futurama, setFuturama] = useState([])
  const [search, setSearch] = useState('')

  return (
      <Container>
        <Row>
          <Col><Header/></Col>
        </Row>
        <Row>
          <Col>
            <MiApi 
            futurama={futurama} 
            setFuturama={setFuturama}
            search={search}
            setSearch={setSearch}
            />
          </Col>
        </Row>
        <Row>
          <Col><Footer/></Col>
        </Row>
      </Container>
  )
}

export default App
