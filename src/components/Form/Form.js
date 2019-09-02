import React from "react";
import Select from "../Select/Select";
import Input from "../Input/Input";
import Button from "../Button/Button";

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
      content: "",
      user: "",
      id
    });
    this.props.addTask(this.state);
  };

  render() {
    return (
      <>
        <form onSubmit={e => this.handleSubmit(e)}>
          <Input
            value={this.state.content}
            name="content"
            onChangeFn={this.handleInputChange}
          ></Input>
          <Select
            value={this.state.user}
            name="user"
            onchangeFn={this.handleInputChange}
          ></Select>
          <Button type="submit">add to do</Button>
        </form>
      </>
    );
  }
}

export default Form;
