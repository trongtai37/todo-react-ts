import React, { Component } from 'react';

interface AddTodoState {
  content: string;
}

interface AddTodoProps {
  handleAdd: (e: any) => void;
}

export default class AddTodo extends Component<AddTodoProps, AddTodoState> {
  constructor(props: AddTodoProps) {
    super(props);
    this.state = {
      content: '',
    };
  }
  handleOnChange = (event: any) => {
    let content = event.target.value;
    this.setState({
      content,
    });
  };

  render() {
    return (
      <div className="container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.props.handleAdd(this.state.content);
            this.setState({
              content: '',
            });
          }}
        >
          <div className="form-row">
            <input
              type="text"
              name="todo"
              placeholder="Add new Todo..."
              value={this.state.content}
              onChange={this.handleOnChange}
            />
          </div>
          <div className="form-row">
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    );
  }
}
