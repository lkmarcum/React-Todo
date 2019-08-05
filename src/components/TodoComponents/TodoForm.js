import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitItem = event => {
    event.preventDefault();
    this.props.addTask(this.state.task);
    this.setState({
      task: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.submitItem}>
        <input
          type="text"
          value={this.state.task}
          name="task"
          onChange={this.handleChange}
        />
        <button>Submit</button>
        <button onClick={this.props.clearCompleted}>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;
