import React from "react";
import { Link } from "react-router-dom";
import UserTodaysAppointments from "./UserTodaysAppointments";
import UserUpcomingAppointments from "./UserUpcomingAppointments";
import UserDateOverAppointments from "./UserDateOverAppointments";

function UserViewAppointments({data}) {
  return (
    <div>
      <div class="container-xxl py-5">
        <div class="container">
          <h1
            class="text-center mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            id="blue_clr"
          >
            Appointments
          </h1>
          {data === "today" ? (
        <UserTodaysAppointments />
      ) : data === "upcoming" ? (
        <UserUpcomingAppointments />
      ) : data === "dateover" ? (
        <UserDateOverAppointments />
      ): "" }
        </div>
      </div>
    </div>
  );
}

export default UserViewAppointments;
