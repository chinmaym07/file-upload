import React from 'react';
import './App.css';
import Header from './components/header/header.component';
import { Route, Switch } from 'react-router-dom'
import CreateTemplate from './components/create-template/template.component';
import UploadFile from './components/upload/upload.component';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={CreateTemplate}/>
        <Route exact path="/upload" component={UploadFile}/>
      </Switch>
    </div>
  );
}

export default App;
