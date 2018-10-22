/**
 * This test file contains mounting
 * tests
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'unistore/react';
import { Admin } from '../containers/Admin';
import { AdminUsers } from '../containers/AdminUsers';
import { AdminRoles } from '../containers/AdminRoles';
import { AdminUserEdit } from '../containers/AdminUserEdit';

import store, { actions } from '../store';

function mockAction () {
  return Promise.resolve()
}

it('Admin renders without crashing', () => {
  const div = document.createElement('div');

  const admin = (
    <Provider store={store}>
      <MemoryRouter>
        <Admin actions={actions} getAuthenticatedUser={mockAction} />
      </MemoryRouter>
    </Provider>
  )

  ReactDOM.render(admin, div);
});

it('AdminUsers renders without crashing', () => {
  const div = document.createElement('div');

  const admin = (
    <Provider store={store}>
      <MemoryRouter>
        <AdminUsers actions={actions} getAuthenticatedUser={mockAction} />
      </MemoryRouter>
    </Provider>
  )

  ReactDOM.render(admin, div);
});

it('AdminRoles renders without crashing', () => {
  const div = document.createElement('div');

  const admin = (
    <Provider store={store}>
      <MemoryRouter>
        <AdminRoles actions={actions} getAuthenticatedUser={mockAction} getRoles={mockAction} location={{}} />
      </MemoryRouter>
    </Provider>
  )

  ReactDOM.render(admin, div);
});

it('AdminUserEdit renders without crashing', () => {
  const div = document.createElement('div');

  const admin = (
    <Provider store={store}>
      <MemoryRouter>
        <AdminUserEdit actions={actions} getAuthenticatedUser={mockAction} />
      </MemoryRouter>
    </Provider>
  )

  ReactDOM.render(admin, div);
});
