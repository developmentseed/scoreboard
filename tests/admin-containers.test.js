/**
 * This test file contains mounting
 * tests
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'unistore/react';
import { Admin } from '../pages/admin/index';
import { AdminUsers } from '../pages/admin/users';
import { AdminUserEdit } from '../pages/admin/edit-user';
import { AdminBadges } from '../pages/admin/badges';

import store from '../lib/store';

function mockAction () {
  return Promise.resolve()
}

const props = {
  authenticatedUser: {
    loggedIn: true,
    account: {
      roles: [{ name: 'admin' }]
    }
  },
  admin: {
    user: { roles: [] },
    roles: []
  }
}

it('Admin renders without crashing', () => {
  const div = document.createElement('div');

  const admin = (
    <Provider store={store}>
      <Admin getAuthenticatedUser={mockAction} {...props} />
    </Provider>
  )

  ReactDOM.render(admin, div);
});

it('AdminUsers renders without crashing', () => {
  const div = document.createElement('div');

  const admin = (
    <Provider store={store}>
      <AdminUsers getAuthenticatedUser={mockAction} getRoles={mockAction} adminGetUsers={mockAction} {...props} />
    </Provider>
  )

  ReactDOM.render(admin, div);
});

it('AdminUserEdit renders without crashing', () => {
  const div = document.createElement('div');

  const admin = (
    <Provider store={store}>
      <AdminUserEdit getAuthenticatedUser={mockAction} getRoles={mockAction} adminGetUser={mockAction} {...props} />
    </Provider>
  )

  ReactDOM.render(admin, div);
});

it('AdminBadges renders without crashing', () => {
  const div = document.createElement('div');

  const admin = (
    <Provider store={store}>
      <AdminBadges getAuthenticatedUser={mockAction} createBadge={mockAction} {...props} />
    </Provider>
  )

  ReactDOM.render(admin, div);
});
