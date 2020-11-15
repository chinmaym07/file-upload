import React from 'react';
import './App.css';
import Header from './components/header/header.component';
import { Route, Switch } from 'react-router-dom'
import CreateTemplate from './components/create-template/template.component';
import DropZone from './components/dropzone/dropzone.component';
import Preview from './components/preview/preview.component';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={CreateTemplate}/>
        <Route exact path="/upload" component={DropZone}/>
        <Route exact path="/preview" component={Preview}/>
      </Switch>
    </div>
  );
}

export default App;
