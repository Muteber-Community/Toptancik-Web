import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  ImageInput,
} from 'react-admin';

const PostEdit = (props) => {
  return (
    <Edit title='Edit Post' undoable={false} {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='title' />
        <TextInput multiline source='body' />
        <TextInput source='price' />
        <DateInput source='publishedAt' />
        <ImageInput source='pictures' multiple={true}>
          <React.Fragment></React.Fragment>
        </ImageInput>
      </SimpleForm>
    </Edit>
  );
};

export default PostEdit;
