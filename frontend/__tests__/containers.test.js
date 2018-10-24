/**
 * This test file contains mounting
 * tests
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {MemoryRouter} from 'react-router-dom';
import {Campaigns, Campaign, Home, User, Users, About} from '../containers';

it('Campaigns renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Campaigns />, div);
});

it('Campaign renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Campaign />, div);
});

it('Home renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>,
    div);
});

it('User renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<User />, div);
});

it('Users renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Users />, div);
});

it('About renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <About />
    </MemoryRouter>
    , div);
});