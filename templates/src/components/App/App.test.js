// Not an exhaustive test suite -- just a few examples

import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { AppComponent } from './App.component';

function setupApp() {
  const incrementMock = jest.fn();
  const decrementMock = jest.fn();

  const { getByTestId } = render(
    <AppComponent increment={incrementMock} decrement={decrementMock} count={4} />
  );

  const incrementButton = getByTestId('increment-button');
  const decrementButton = getByTestId('decrement-button');

  return { incrementButton, decrementButton, incrementMock, decrementMock };
}

describe('App', () => {
  afterEach(cleanup);

  it('should call increment when the increment button is clicked', () => {
    const { incrementButton, incrementMock } = setupApp();

    fireEvent.click(incrementButton);

    expect(incrementMock).toHaveBeenCalledTimes(1);
  });

  it('should call decrement when the increment button is clicked', () => {
    const { decrementButton, decrementMock } = setupApp();

    fireEvent.click(decrementButton);

    expect(decrementMock).toHaveBeenCalledTimes(1);
  });
});
