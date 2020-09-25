import React from "react";

import "./Popup.scss";

export class Popup extends React.Component {
  componentDidMount() {
    function popup() {
      let day = document.querySelector(".react-calendar__tile--active").textContent;
      //   console.log(day);

      const popup = document.querySelector(".popup");
      popup.classList.add("popup_active");

      //find Month
      const monthCalendar = document.querySelector(".react-calendar__navigation__label__labelText--from").textContent;
      //   console.log(monthCalendar);

      const monthInput = document.getElementById("month");
      monthInput.value = monthCalendar.slice(0, -7);

      if (monthInput.value === "сентябрь ") {
        monthInput.value = "September";
      } else if (monthInput.value === "октябрь ") {
        monthInput.value = "October";
      } else if (monthInput.value === "ноябрь ") {
        monthInput.value = "November ";
      } else if (monthInput.value === "декабрь ") {
        monthInput.value = "December ";
      } else if (monthInput.value === "январь ") {
        monthInput.value = "January";
      } else if (monthInput.value === "февраль ") {
        monthInput.value = "February";
      } else if (monthInput.value === "март ") {
        monthInput.value = "March ";
      } else if (monthInput.value === "апрель ") {
        monthInput.value = "April ";
      } else if (monthInput.value === "май ") {
        monthInput.value = "May ";
      } else if (monthInput.value === "июнь ") {
        monthInput.value = "June ";
      } else if (monthInput.value === "июль ") {
        monthInput.value = "July ";
      } else if (monthInput.value === "август ") {
        monthInput.value = "August ";
      }

      //find day
      const dayInput = document.getElementById("day");

      const allDays = document.querySelectorAll(".react-calendar__tile");
      const calendar = [];
      for (let day1 of allDays) {
        calendar.push(day1.textContent);
      }
      //   console.log(calendar);

      let test777 = [];
      for (let day2 of calendar) {
        // console.log(day2);
        if (day2 === day) {
          break;
        }
        test777.push(day2);
      }

      if (test777.length === 0 || test777.length === 7 || test777.length === 14 || test777.length === 21 || test777.length === 28) {
        dayInput.value = day + "th Monday";
      } else if (test777.length === 1 || test777.length === 8 || test777.length === 15 || test777.length === 22 || test777.length === 29) {
        dayInput.value = day + "th Tuesday";
      } else if (test777.length === 2 || test777.length === 9 || test777.length === 16 || test777.length === 23 || test777.length === 30) {
        dayInput.value = day + "th Wednesday";
      } else if (test777.length === 3 || test777.length === 10 || test777.length === 17 || test777.length === 24 || test777.length === 31) {
        dayInput.value = day + "th Thursday";
      } else if (test777.length === 4 || test777.length === 11 || test777.length === 18 || test777.length === 25) {
        dayInput.value = day + "th Friday";
      } else if (test777.length === 5 || test777.length === 12 || test777.length === 19 || test777.length === 26) {
        dayInput.value = day + "th Saturday";
      } else if (test777.length === 6 || test777.length === 13 || test777.length === 20 || test777.length === 27) {
        dayInput.value = day + "th Sunday";
      }

      //   console.log(test777.length);
    }

    //close popup
    function closePopupFn() {
      const popup = document.querySelector(".popup");
      popup.classList.remove("popup_active");
    }

    const closePopup = document.querySelector(".popup__close");
    closePopup.addEventListener("click", closePopupFn);

    ///active popup
    const clickDate = document.querySelector(".react-calendar__month-view__days");
    clickDate.addEventListener("click", function () {
      setTimeout(function () {
        popup();
      }, 100);
    });
  }

  render() {
    return (
      <div className="popup">
        <div className="popup__close">
          <span></span>
        </div>
        <div className="popup__content">
          <div className="popup__grid">
            <div className="popup-month">Month</div>
            <div className="popup-day">Day</div>
            <input readOnly id="month" type="text" className="popup__input" value=""></input>
            <input readOnly id="day" type="text" className="popup__input" value=""></input>
          </div>
        </div>
      </div>
    );
  }
}
