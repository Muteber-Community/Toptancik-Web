import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from 'react-admin';

const PostList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='price' />
        <TextField source='title' />
        <DateField source='publishedAt' />
        <EditButton basePath={props.basePath} label='Edit' />
        <DeleteButton basePath={props.basePath} />
      </Datagrid>
    </List>
  );
};

export default PostList;
