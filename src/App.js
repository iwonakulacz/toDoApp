import React from "react";
import "./index.css";
import Form from './components/Form/Form';
import List from "./components/List/List";

class App extends React.Component {
  state = {
    tasks : [{
      content: '',
      checked: false,
      user: 'anna'
    }]
  }

  render() {
    return (
      <>
        <h1 className="title"> to do list </h1>
        <Form/>
        <List/>
      </>
    );
  }
}

export default App;
