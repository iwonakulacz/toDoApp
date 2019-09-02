import React from "react";
import "./index.css";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import Title from "./components/Title/Title";
import Select from "./components/Select/Select";
import AppContext from "./context";
import initTasks from "./data/initTasks";
import styles from "./App.module.scss";

class App extends React.Component {
  state = {
    tasks: [...initTasks],
    selectedUser: "all"
  };

  addTask = task => {
    const tasks = [...this.state.tasks, task];
    this.setState({
      tasks
    });
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
      if (item.id === task.id) {
        task.checked = !task.checked;
        return task;
      } else {
        return task;
      }
    });
    this.setState({
      tasks
    });
  };

  render() {
    const contextItems = {
      ...this.state,
      removeTask: this.removeTask,
      handleCheck: this.handleCheck
    };
    return (
      <AppContext.Provider value={contextItems}>
        <Title>to do app</Title>
        <main className={styles.wrapper}>
          <Form addTask={this.addTask} />
          <div className={styles.listwrapper}>
            <Select
              onchangeFn={e => this.sortList(e)}
              value={this.state.selectedUser}
              filterlist="true"
            >show tasks for</Select>
            <List
              items={this.state.tasks}
              selectedUser={this.state.selectedUser}
            />
          </div>
        </main>
      </AppContext.Provider>
    );
  }
}

export default App;
