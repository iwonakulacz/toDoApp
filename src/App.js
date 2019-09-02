import React from "react";
import "./index.css";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import Title from './components/Title/Title';
import Select from './components/Select/Select';

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
    tasks: [...initArray],
    selectedUser: "all",
  };

  addTask = task => {
    const tasks = [...this.state.tasks, task];
    this.setState(({
      tasks
    }));
  };

  removeTask = item => {
    const tasks = this.state.tasks.filter(task => {
      return task.id !== item.id;
    });
    this.setState({
      tasks
    });
  };

  sortList = e => {
    this.setState({
      selectedUser: e.target.value
    });
  };

  handleCheck = item => {
    const tasks = this.state.tasks.map(task => {
      if(item.id === task.id){
        task.checked = !task.checked;
        return task;
      } else {
        return task;
      }
    });
    this.setState({
      tasks
    })
  }

  render() {
    return (
      <>
        <Title>to do app</Title>
        <Form addTask={this.addTask} />
        <Select onchangeFn={e => this.sortList(e)}
          value={this.state.selectedUser} filterList></Select>
        <List
          items={this.state.tasks}
          removeTask={this.removeTask}
          handleCheck={this.handleCheck}
          selectedUser={this.state.selectedUser}
        />
      </>
    );
  }
}

export default App;
