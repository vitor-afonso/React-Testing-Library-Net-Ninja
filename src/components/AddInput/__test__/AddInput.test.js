//jshint esversion:9
import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from '../AddInput';

const mockedSetTodos = jest.fn();

// GET BY
describe('AddInput', () => {
  it('should render input element', async () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodos} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });

  it('should have empty input when button is clicked', async () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodos} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole('button', { name: 'Add' });
    fireEvent.change(inputElement, { target: { value: 'Testing input change on typing' } });
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe('');
  });
});
