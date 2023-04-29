import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'bootstrap';
import { Form, FormControl } from 'react-bootstrap';


function App() {


  return (
    <div>
      <Form.Label>Range</Form.Label>
      <Form.Range />
      <h1><button>home</button></h1>
    </div>
  )
}

export default App
