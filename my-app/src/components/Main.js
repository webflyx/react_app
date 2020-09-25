import React from "react";

import "./Main.scss";
import { MyApp } from "./Calendar.js";
import { Popup } from "./Popup.js";

export class Main extends React.Component {
  render() {
    return (
      <main className="main">
        <h1 className="main__title">
          Choose the day <br />
          for the meeting
        </h1>
        <div className="main__description">
          We encourage you book your <br /> appointment online.
          <br /> This will save you time.
        </div>
        <div className="main__calendar">
          <MyApp />
        </div>
        <Popup />
      </main>
    );
  }
}
