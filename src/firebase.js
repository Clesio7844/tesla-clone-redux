import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCboYIqmvTBUhTB_6ovxqFnTOEmaigogIs',
  authDomain: 'tesla-clone-redux.firebaseapp.com',
  projectId: 'tesla-clone-redux',
  storageBucket: 'tesla-clone-redux.appspot.com',
  messagingSenderId: '949492143386',
  appId: '1:949492143386:web:9ed382639c870f355448a3'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

export { auth };
