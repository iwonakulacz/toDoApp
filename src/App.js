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
    tasks: [...initArray],
    selectedUser: "all",
    sortedList: [...initArray]
  };

  addTask = task => {
    const tasks = [...this.state.tasks, task];
    let sorted = [];
    if (this.state.selectedUser !== "all") {
      sorted = tasks.filter(item => {
        return item.user === this.state.selectedUser;
      });
    } else {
      sorted = tasks;
    }
    this.setState(({
      tasks,
      sortedList: [...sorted]
    }));
  };

  removeTask = item => {
    const tasks = this.state.tasks.filter(task => {
      return task.id !== item.id;
    });
    let sorted = [];
    if (this.state.selectedUser !== "all") {
      sorted = tasks.filter(item => {
        return item.user === this.state.selectedUser;
      });
    } else {
      sorted = tasks;
    }

    this.setState({
      tasks,
      sortedList: sorted
    });
  };

  sortList = e => {
    let sorted = [];
    if (e.target.value === "all") {
      sorted = [...this.state.tasks];
    } else {
      sorted = this.state.tasks.filter(item => {
        return item.user.search(e.target.value) !== -1;
      });
    }
    this.setState({
      sortedList: sorted,
      selectedUser: e.target.value
    });
  };

  handleCheck = item => {
    const tasks = this.state.tasks.map(task => {
      if(item.id === task.id){
        item.checked = !item.checked;
        return item;
      } else {
        return task;
      }
    });
    let sorted = [];
    if (this.state.selectedUser === "all") {
      sorted = [...tasks];
    } else {
      sorted = tasks.filter(item => {
        return item.user === this.state.selectedUser;
      });
    }
    this.setState({
      tasks,
      sortedList: sorted
    })
  }

  render() {
    return (
      <>
        <h1 className="title"> to do list </h1>
        <Form addTask={this.addTask} />
        <select
          onChange={e => this.sortList(e)}
          value={this.state.selectedUser}
        >
          <option value="all">all</option>
          <option value="anna">anna</option>
          <option value="tom">tom</option>
          <option value="mat">mat</option>
          <option value="jane">jane</option>
        </select>
        <List
          items={this.state.sortedList}
          removeTask={this.removeTask}
          handleCheck={this.handleCheck}
        />
      </>
    );
  }
}

export default App;
