import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";
import "./Home.scss";
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

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { queueSearchValue: "" };
    this.searchQueues = this.searchQueues.bind(this);
    this.queueSearchValueChanged = this.queueSearchValueChanged.bind(this);
  }

  searchQueues() {
    database
      .collection("queues")
      .get()
      .then((snap) => {
        if (snap.docs.length === 0) {
          console.log("No Document found,Inserting one");
          database.collection("queues")
            .add({
              head: "Alan",
              numQueued: 5,
              id: "masterQueue",
            })
            .then(function (docRef) {
              console.log("Document written with ID: ", docRef.id);
            })
            .catch(function (error) {
              console.error("Error adding document: ", error);
            });
        }
      });
  }
  queueSearchValueChanged(e) {
    this.setState({ queueSearchValue: e.target.value });
  }
  render() {
    return (
      <div className="body">
        <div className="bodyTextMain">Queue from virtually anywhere.</div>
        <div className="bodyTextSub">Create a new Queue or join one.</div>
        <div className="input-button-group">
          <TextField
            id="outlined-basic"
            label="Queue Name"
            variant="outlined"
            className="queueName"
            onChange={this.queueSearchValueChanged}
          />
          <Button
            variant="outlined"
            size="large"
            onClick={(e) => this.searchQueues()}
          >
            Search
          </Button>
        </div>
      </div>
    );
  }
}

export default Home;
