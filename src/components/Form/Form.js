import React from "react";
import Select from "../Select/Select";
import Input from "../Input/Input";
import Button from "../Button/Button";
import styles from "./Form.module.scss";

class Form extends React.Component {
  state = {
    id: new Date().getTime(),
    content: "",
    user: "",
    checked: false
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const id = new Date().getTime();
    this.setState({
      id,
      content: "",
      user: ""
    });
    this.props.addTask(this.state);
  };

  render() {
    return (
        <form
          className={styles.form}
          onSubmit={e => this.handleSubmit(e)}
          autoComplete="off"
        >
          <Input
            value={this.state.content}
            name="content"
            onChangeFn={this.handleInputChange}
          >
            Task to do...
          </Input>
          <Select
            value={this.state.user}
            name="user"
            onchangeFn={this.handleInputChange}
          >
            Task for:
          </Select>
          <Button type="submit">add task</Button>
        </form>
    );
  }
}

export default Form;
