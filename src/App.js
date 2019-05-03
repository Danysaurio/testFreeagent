import React from 'react';
import Header from "./components/Header"
import SubMenu from "./components/SubMenu"
import Container from "./components/Container"
import 'normalize.css';

function App() {
  return (
    <div className="App"> 
      <Header></Header>
      <SubMenu></SubMenu>
      <Container></Container>
    </div>
  );
}

export default App;
