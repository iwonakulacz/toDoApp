import React from "react";
import "./index.css";
import Form from "./components/Form/Form";
import List from "./components/List/List";

const initArray = [
  {
    id: 1,
    content: "make a weather app",
    user: "anna"
  },
  {
    id: 2,
    content: "buy a milk",
    user: "mat"
  },
  {
    id: 3,
    content: "lorem ipsum et dorom solo",
    user: "tom"
  },
  {
    id: 4,
    content: "fix the bugs",
    user: "jane"
  },
  {
    id: 5,
    content: "clean dishes",
    user: "anna"
  }
];
class App extends React.Component {
  state = {
    tasks: [...initArray],
    selectedUser: "",
    sortedList: [...initArray]
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

  sortList = (e) => {
    let sorted = this.state.tasks.filter(item => {
      return item.user === e.target.value; 
    });
    if(e.target.value === 'all'){
      sorted = [...this.state.tasks]
    }
    this.setState({
      sortedList: sorted,
      selectedUser: e.target.value
    })
  }

  render() {
    return (
      <>
        <h1 className="title"> to do list </h1>
        <Form addTask={this.addTask} />
        <select onChange={(e) => this.sortList(e)} value={this.state.selectedUser}>
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
