import React from "react";

class Form extends React.Component {
  state = {
    id: new Date().getTime(),
    content: "",
    user: ""
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
      id
    });
    this.props.addTask(this.state);
    this.setState({
      content: "",
      user: ""
    });
  };

  render() {
    return (
      <>
        
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            type="text"
            value={this.state.content}
            name="content"
            onChange={this.handleInputChange}
          />
          <select
            value={this.state.user}
            name="user"
            onChange={this.handleInputChange}
          >
            <option value="anna">anna</option>
            <option value="tom">tom</option>
            <option value="mat">mat</option>
            <option value="jane">jane</option>
          </select>
          <button type="submit">add task</button>
        </form>
      </>
    );
  }
}

export default Form;
