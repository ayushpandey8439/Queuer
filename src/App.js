import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

import * as firebase from "firebase/app";

import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyzO1DujgraLEbBPR4F69ik8yGhVkDmJw",
  authDomain: "queue-manager-291821.firebaseapp.com",
  databaseURL: "https://queue-manager-291821.firebaseio.com",
  projectId: "queue-manager-291821",
  storageBucket: "queue-manager-291821.appspot.com",
  messagingSenderId: "1017457951228",
  appId: "1:1017457951228:web:b01daff729093f4f2db279",
  measurementId: "G-JN8FBYTH6J",
};

firebase.initializeApp(firebaseConfig);

let database = firebase.firestore();

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
export { database };
