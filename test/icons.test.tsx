import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import * as Icon from '../src/svgIcons';

afterEach(cleanup);
describe('ATOMIC: Icon tests', () => {
  it('render all icons without crashing', () => {
    render(
      <div>
        <Icon.ArrowLeft />
        <Icon.ArrowRight />
        <Icon.Checkmark />
        <Icon.ChevronLeft />
        <Icon.ChevronRight />
        <Icon.Menu />
      </div>
    );
    expect(screen.getByTitle(/Arrow Left Icon/i)).toBeInTheDocument();
    expect(screen.getByTitle(/Arrow Right Icon/i)).toBeInTheDocument();
    expect(screen.getByTitle(/Checkmark Icon/i)).toBeInTheDocument();
    expect(screen.getByTitle(/Chevron Left Icon/i)).toBeInTheDocument();
    expect(screen.getByTitle(/Chevron Right Icon/i)).toBeInTheDocument();
    expect(screen.getByTitle(/Menu Icon/i)).toBeInTheDocument();
  });
});
