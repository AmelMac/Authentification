import React from 'react';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import { UserList } from './users';
import Dashboard from './Dashboard';
import AuthProvider from './authProvider';
import { PostList, PostEdit, PostCreate } from './posts';
import frenchMessages from 'ra-language-french';
import polyglotI18nProvider from 'ra-i18n-polyglot';

import './App.css';
const messages = {
  'fr': frenchMessages,
};
const i18nProvider = polyglotI18nProvider(locale => messages[locale]);

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const App = () => (
  <Admin locale="fr" i18nProvider={i18nProvider} dashboard={Dashboard} authProvider={AuthProvider} dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name="users" list={UserList} icon={UserIcon} />
  </Admin>
);

export default App;