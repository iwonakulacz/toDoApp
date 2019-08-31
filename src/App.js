import React from "react";
import "./index.css";
import Form from "./components/Form/Form";
import List from "./components/List/List";

const initArray = [
  {
    id: 1,
    content: "make a weather app",
    user: "anna",
    checked: false
  },
  {
    id: 2,
    content: "buy a milk",
    user: "mat",
    checked: false
  },
  {
    id: 3,
    content: "lorem ipsum et dorom solo",
    user: "tom",
    checked: false
  },
  {
    id: 4,
    content: "fix the bugs",
    user: "jane",
    checked: false
  },
  {
    id: 5,
    content: "clean dishes",
    user: "anna",
    checked: false
  }
];
class App extends React.Component {
  state = {
    tasks: [...initArray]
  };

  addTask = task => {
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }));
  };

  removeTask = id => {
    const tasks = this.state.tasks.filter(task => {
      return task.id !== id;
    });
    this.setState({
      tasks
    });
  };

  handleCheck = item => {
    console.log(item)
    // const tasks = this.state.tasks.
  };

  render() {
    return (
      <>
        <h1 className="title"> to do list </h1>
        <Form addTask={this.addTask} />
        <List
          items={this.state.tasks}
          removeTask={this.removeTask}
          handleCheck={this.handleCheck}
        />
      </>
    );
  }
}

export default App;
