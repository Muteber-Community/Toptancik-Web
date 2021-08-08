import { FirebaseDataProvider } from 'react-admin-firebase';

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

const options = {};

const dataProvider = FirebaseDataProvider(config, options);

const myDataProvider = {
  ...dataProvider,

  update: (resource, params) => {
    if (!params.data.pictures) {
      // fallback to the default implementation
      return dataProvider.update(resource, params);
    }

    /**
     * For posts update only, convert uploaded image in base 64 and attach it to
     * the `picture` sent property, with `src` and `title` attributes.
     */

    // Freshly dropped pictures are File objects and must be converted to base64 strings
    const newPictures = params.data.pictures.filter(
      (p) => p.rawFile instanceof File
    );
    const formerPictures = params.data.pictures.filter(
      (p) => !(p.rawFile instanceof File)
    );

    return Promise.all(newPictures.map(convertFileToBase64))
      .then((base64Pictures) => base64Pictures.map((picture64) => picture64))

      .then((transformedNewPictures) =>
        dataProvider.update(resource, {
          ...params,
          data: {
            ...params.data,
            pictures: [...transformedNewPictures, ...formerPictures],
          },
        })
      );
  },
};

/**
 * Convert a `File` object returned by the upload input into a base 64 string.
 * That's not the most optimized way to store images in production, but it's
 * enough to illustrate the idea of data provider decoration.
 */
const convertFileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;

    reader.readAsDataURL(file.rawFile);
  });

export default myDataProvider;
