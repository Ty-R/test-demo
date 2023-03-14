import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import React from 'react';
import GetFact from './get-fact';

const mockFetch = jest.fn(async () => {
  return ['Fact 1'];
});

it('does not render facts by default', () => {
  render(<GetFact fetch={ mockFetch } />);

  const fact = screen.queryByTestId('fact-card-0');
  expect(fact).not.toBeInTheDocument();
});

describe('Clicking the refresh facts button', () => {
  beforeEach(async () => {
    render(<GetFact fetch={ mockFetch } />);

    const button = screen.getByTestId('refresh-facts-button');

    fireEvent.click(button);

    await waitFor(() => expect(mockFetch).toBeCalledTimes(1));
  });

  it('renders the fact', () => {
    const fact = screen.getByTestId('fact-card-0');
    expect(fact).toBeInTheDocument();
  });
});
