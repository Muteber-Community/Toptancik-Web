import React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  required,
} from 'react-admin';

const PostCreate = (props) => {
  return (
    <Create title='Create a Post' {...props}>
      <SimpleForm>
        <TextInput
          validate={[required()]}
          source='title'
          label='Ürün Başlığı'
        />
        <TextInput
          validate={[required()]}
          multiline
          source='body'
          label='Ürün Açıklaması'
        />
        <TextInput validate={[required()]} source='price' label='Fiyat' />
        <DateInput source='publishedAt' />
      </SimpleForm>
    </Create>
  );
};

export default PostCreate;
