// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_APIKEY,
//   authDomain: process.env.REACT_APP_AUTHDOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID
// };

// export const app = initializeApp(firebaseConfig);


import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9pHh8zU5Od34nf0jfv0kF2HFp0kXFyvQ",
  authDomain: "chat-project-cef27.firebaseapp.com",
  projectId: "chat-project-cef27",
  storageBucket: "chat-project-cef27.appspot.com",
  messagingSenderId: "291993639798",
  appId: "1:291993639798:web:477d71c8881e10c07df857",
  databaseURL: "https://chat-project-cef27-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

// console.log(initializeApp);