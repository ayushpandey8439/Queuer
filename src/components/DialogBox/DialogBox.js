import React from "react";
import "./DialogBox.scss";
import { Button } from "@material-ui/core";

function DialogBox() {
  return (
    <div className="overlay-dialog">
      <div className="dialog-heading">This is a heading</div>
      <div className="dialog-body"> This is a Body</div>
      <div className="dialog-footer">
        <Button>Yes</Button>
        <Button>No</Button>
      </div>
    </div>
  );
}

export default DialogBox;
