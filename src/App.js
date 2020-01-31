import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Button, DropdownButton, FormControl, Dropdown } from 'react-bootstrap';
import { InputGroup, InputGroupAddon } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    
    <div className="container" id = "maincontainer">
    <title>Rush 8</title>
    <div className="row" id = "inputrow">
      
  <InputGroup className="mb-3">
    <DropdownButton
      class = "btn btn-inline-secondary"
      as={InputGroup.Prepend}
      align-left = "true"
      variant="inline-secondary"
      title="Region"
      id="input-group-dropdown-1"
      key="left">
     
      <Dropdown.Item href="#">BR</Dropdown.Item>
      <Dropdown.Item href="#">EUNE</Dropdown.Item>
      <Dropdown.Item href="#">EUW</Dropdown.Item>
      <Dropdown.Item href="/src/favico.ico">JP</Dropdown.Item>
      <Dropdown.Item href="#">KR</Dropdown.Item>
      <Dropdown.Item href="#">LAN</Dropdown.Item>
      <Dropdown.Item href="#">LAS</Dropdown.Item>
      <Dropdown.Item href="#">NA</Dropdown.Item>
      <Dropdown.Item href="#">OCE</Dropdown.Item>
      <Dropdown.Item href="#">TR</Dropdown.Item>
      <Dropdown.Item href="#">RU</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#">Separated link</Dropdown.Item>
    </DropdownButton>
    <FormControl aria-describedby="basic-addon1" />
    <InputGroupAddon addonType="append"><Button color="secondary">Search!</Button></InputGroupAddon>
  </InputGroup> 
  </div>
    </div>,

class SearchResult extends React.Component {
  render() {
    return <p>Search term: {this.props.searchTerm}</p>;
  }
  
  shouldComponentUpdate(nextProps) {
    return nextProps.search;
  }
}

  );
}

export default App;
