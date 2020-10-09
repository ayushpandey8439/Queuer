import React, { useState, useEffect } from "react";
import { TextField, Button } from "@material-ui/core";
import "./Home.scss";
import { database } from "./../../App";
import DialogBox from "./../DialogBox/DialogBox";

function Home() {
  const [state, setState] = useState({
    queueSearchValue: "",
  });
  function queueSearchValueChanged(e) {
    setState({ queueSearchValue: e.target.value });
  }

  function searchQueues() {
    database
      .collection("queues")
      .get()
      .then((snap) => {
        if (snap.docs.length === 0) {
          console.log("No Document found,Inserting one");
          database
            .collection("queues")
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
          onChange={queueSearchValueChanged}
        />
        <Button variant="outlined" size="large" onClick={(e) => searchQueues()}>
          Search
        </Button>
        <DialogBox />
      </div>
    </div>
  );
}

export default Home;
