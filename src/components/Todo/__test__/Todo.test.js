//jshint esversion:9
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Todo from '../Todo';

const MockedTodo = () => {
  return (
    <Router>
      <Todo />
    </Router>
  );
};

const addTasks = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole('button', { name: /Add/i });
  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
};

// GET BY
describe('Todo', () => {
  /* it('should change value of the input element, click in the button and add a new task to the list', async () => {
    render(<MockedTodo />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole('button', { name: /Add/i });
    fireEvent.change(inputElement, { target: { value: 'Go Grocery Shopping' } });
    fireEvent.click(buttonElement);
    const divElement = screen.getByText(/Go Grocery Shopping/i);
    expect(divElement).toBeInTheDocument();
  }); */

  // Same as previous but using the addTasks function
  it('should change value of the input element, click in the button and add a new task to the list', async () => {
    render(<MockedTodo />);
    addTasks(['Go Grocery Shopping']);
    const divElement = screen.getByText(/Go Grocery Shopping/i);
    expect(divElement).toBeInTheDocument();
  });

  it('should change value of the input element, click in the button and add all tasks to the list', async () => {
    render(<MockedTodo />);
    addTasks(['Go Grocery Shopping', 'Pet my cat', 'Wash my hands']);
    const divElements = screen.getAllByTestId('task-container');
    expect(divElements.length).toBe(3);
  });

  it('task should not have "completed" class when initially rendered', async () => {
    render(<MockedTodo />);
    addTasks(['Go Grocery Shopping']);
    const divElement = screen.getByText(/Go Grocery Shopping/i);

    expect(divElement).not.toHaveClass('todo-item-active');
  });

  it('task should have "completed" class when initially rendered', async () => {
    render(<MockedTodo />);
    addTasks(['Go Grocery Shopping']);
    const divElement = screen.getByText(/Go Grocery Shopping/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass('todo-item-active');
  });
});
