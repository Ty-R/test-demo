import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import React from 'react';
import GetFact from './get-fact';


const mockFetch = jest.fn(async () => {
  return {
    name: 'animal',
    fact: 'cool fact',
    imgSrc: 'http://animal.jpg'
  };
});

it('does not render a fact if the button is not clicked', () => {
  render(<GetFact fetch={ mockFetch } />);

  const fact = screen.queryByTestId('fact-container');
  expect(fact).not.toBeInTheDocument();
});

describe('Clicking the button', () => {
  beforeEach(async () => {
    render(<GetFact fetch={ mockFetch } />);

    const button = screen.getByTestId('fact-button');

    fireEvent.click(button );

    await waitFor(() => expect(mockFetch).toBeCalledTimes(1));
  });

  it('renders the name', () => {
    const name = screen.getByTestId('fact-heading-1');
    expect(name).toBeInTheDocument();
  });

  it('renders the image', () => {
    const image = screen.getByTestId('fact-image');
    expect(image).toBeInTheDocument();
  });

  it('renders the fact', () => {
    const fact = screen.getByTestId('fact');
    expect(fact).toBeInTheDocument();
  });
});
