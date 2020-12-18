import React, { useState , useEffect} from 'react';
import axios from 'axios';
import { Button, Form ,InputGroup,FormControl} from "react-bootstrap";
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Pdfs from './Components/pdf';

const arr= ['one','two','three','four'];
function App() {
  const [count, setCount] = useState(1);
  const book = { name:'ONE', value: 'one'};
  useEffect(() => {
    axios
      .post('http://localhost:5000/name', book)
      .then(() => console.log('Book Created'))
      .catch(err => {
        console.error(err);
      });
  },[]);
  return (
    <div className="App">
      Route
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/pdf'} className="nav-link">Contact</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route path='/pdf' component={Pdfs} />
          </Switch>


          {/* //dynamic input and utput */}
      {arr.slice(0,count).map((item,i)=>(
          <InputGroup key={i} className="mb-3">
          <InputGroup.Prepend key={i}>
            <InputGroup.Text key={i} id="inputGroup-sizing-default">{item}</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            key={i}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
      ))
      }
    
    <Button variant="primary" onClick={() => setCount(count + 1)} >Click button to increase the input</Button>{' '}
    {/* funtional component with props */}
    <Pdfs val='Props value passed from app component'/>
    </div>
  );
}

export default App;
