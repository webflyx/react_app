import React, { Component } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.scss";

export class MyApp extends Component {
  state = {
    date: new Date(),
  };

  onChange = (date) => this.setState({ date });

  render() {
    return (
      <div className="calendar-wrapper">
        <Calendar onChange={this.onChange} value={this.state.date} />
      </div>
    );
  }
}
