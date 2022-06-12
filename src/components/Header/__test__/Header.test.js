//jshint esversion:9
import { render, screen } from '@testing-library/react';
import Header from '../Header';

// GET BY
describe('Header', function () {
  it('should render same text passed into title prop', () => {
    render(<Header title='My header' />);
    const headingElement = screen.getByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
  });
});

/* it('should render same text passed into title prop getting it by role', () => {
  render(<Header title='My header' />);
  const headingElement = screen.getByRole('heading');
  expect(headingElement).toBeInTheDocument();
}); */

/* it('should render same text passed into title prop getting it by role and 2nd argument whit the text of the element', () => {
  render(<Header title='My header' />);
  const headingElement = screen.getByRole('heading', { name: 'My header' });
  expect(headingElement).toBeInTheDocument();
}); */

/* it('should render same text passed into title prop getting it by title', () => {
  render(<Header title='My header' />);
  const headingElement = screen.getByTitle('cat-header');
  expect(headingElement).toBeInTheDocument();
}); */

/* it('should render same text passed into title prop getting it by id', () => {
  render(<Header title='My header' />);
  const headingElement = screen.getByTestId('header-1');
  expect(headingElement).toBeInTheDocument();
}); */

// FIND BY

/* it('should render same text passed into title prop using find by', async () => {
  render(<Header title='My header' />);
  const headingElement = await screen.findByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
}); */

// QUERY BY

/* it('should render same text passed into title prop using query by', async () => {
  render(<Header title='My header' />);
  const headingElement = screen.queryByText(/dogs/i);
  expect(headingElement).not.toBeInTheDocument();
}); */

// GET ALL BY

/* it('should render same text passed into title prop using get all by', async () => {
  render(<Header title='My header' />);
  const headingElements = screen.getAllByRole('heading');
  expect(headingElements.length).toBe(2);
}); */
