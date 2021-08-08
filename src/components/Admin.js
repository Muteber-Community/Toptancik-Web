import * as React from 'react';
import { Provider } from 'react-redux';
import { createHashHistory } from 'history';
import { Admin, Resource } from 'react-admin';
import createAdminStore from './createAdminStore';
import PostList from './AdminPanel/PostList';
import PostCreate from './AdminPanel/PostCreate';
import PostEdit from './AdminPanel/PostEdit';
import myDataProvider from './AdminPanel/dataProvider';
import { FirebaseAuthProvider } from 'react-admin-firebase';

const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKETID,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID,
};

const authProvider = FirebaseAuthProvider(config);

const history = createHashHistory();

function AdminPanel() {
  return (
    <Provider
      store={createAdminStore({
        myDataProvider,
        history,
      })}
    >
      <Admin
        authProvider={authProvider}
        dataProvider={myDataProvider}
        history={history}
        title='My Admin'
      >
        <Resource
          name='posts'
          list={PostList}
          create={PostCreate}
          edit={PostEdit}
        />
        <Resource
          name='highlights'
          list={PostList}
          create={PostCreate}
          edit={PostEdit}
        />
      </Admin>
    </Provider>
  );
}

export default AdminPanel;
