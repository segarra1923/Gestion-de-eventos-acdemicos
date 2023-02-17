import firebase from 'firebase/app';


const  firebaseConfig = {
  apiKey: "AIzaSyDgtQMc2-fSYqf2ggfqQBnZmkhfAkHwgPQ",
  authDomain: "database-f8f9e.firebaseapp.com",
  projectId: "database-f8f9e",
  storageBucket: "database-f8f9e.appspot.com",
  messagingSenderId: "523965277579",
  appId: "1:523965277579:web:fe165cdf612bd5acb77b8e",
  measurementId: "G-S0CCEGB1XH"
};
firebase.initializeApp(firebaseConfig);
console.log('base de datos configurada')
