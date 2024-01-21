import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyA6Z4qndKhIUNyUE9Mk9ZUKDbGtEKWx_1o',
  authDomain: 'tech-net-auth-7ab81.firebaseapp.com',
  projectId: 'tech-net-auth-7ab81',
  storageBucket: 'tech-net-auth-7ab81.appspot.com',
  messagingSenderId: '779086958138',
  appId: '1:779086958138:web:2bc921b48ebe895fb32f03',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
