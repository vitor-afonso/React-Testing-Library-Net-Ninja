//jshint esversion:9
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import FollowersList from '../../FollowersList/FollowersList';

// Testing api calls
const MockedFollowersList = () => {
  return (
    <Router>
      <FollowersList />
    </Router>
  );
};

describe('FollowersList', () => {
  beforeEach(() => {
    console.log('Running before each test');
  });

  beforeAll(() => {
    console.log('Running once before all tests');
  });
  afterEach(() => {
    console.log('Running after each tests');
  });
  afterAll(() => {
    console.log('Running once after all tests');
  });

  it('should render follower items', async () => {
    render(<MockedFollowersList />);
    const followerDivElement = await screen.findByTestId('follower-item-0');
    /* screen.debug(); */
    expect(followerDivElement).toBeInTheDocument();
  });

  it('should render follower items', async () => {
    render(<MockedFollowersList />);
    const followerDivElement = await screen.findByTestId('follower-item-0');
    expect(followerDivElement).toBeInTheDocument();
  });

  //to use this exemple with the await mocked request, we need to render the data for it in the await file

  /* it('should render multiple follower items', async () => {
    render(<MockedFollowersList />);
    const followerDivElements = await screen.findAllByTestId(/follower-item/i);
    expect(followerDivElements.length).toBe(5);
  }); */
});
