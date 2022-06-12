//jshint esversion:9
import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter as Router } from 'react-router-dom'; // Needed to to test components that have imports from react-router-dom like => LINK

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <Router>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </Router>
  );
};
describe('TodoFooter', () => {
  it('should render the correct amount of incomplet tasks', async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);
    const paragraphElement = screen.getByText(/5 tasks left/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  it('should render task when the number of incomplete tasks is 1', async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeInTheDocument();
  });
});

/* it('should render task when the number of incomplete tasks is 1 and be truthy', async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toBeTruthy();
});

it('should render task when the number of incomplete tasks is 1 and visible', async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toBeVisible();
});

it('should render task when the number of incomplete tasks is 1 and to contain a p tag inside', async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toContainHTML('p');
});

it('should render task when getByTestId "paragraph" exists and toHaveTextConten of "1 task left"', async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByTestId('paragraph');
  expect(paragraphElement).toHaveTextContent('1 task left');
});

// NOT
it('should render task when getByTestId "paragraph" exists and not be falsy', async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByTestId('paragraph');
  expect(paragraphElement).not.toBeFalsy();
});

// GET VALUE OF ELEMENT
it('should render task when getByTestId "paragraph" exists and textConten of "1 task left"', async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByTestId('paragraph');
  expect(paragraphElement.textContent).toBe('1 task left');
});
 */
