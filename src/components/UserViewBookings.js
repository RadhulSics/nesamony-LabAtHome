import React from 'react'
import UserViewPendingBookings from './UserViewPendingBookings'
import UserViewApprovedBookings from './UserViewApprovedBookings'

function UserViewBookings({data}) {
  return (
    <div>
      <div class="container-xxl py-5">
        <div class="container">
          <h1
            class="text-center wow fadeInUp"
            data-wow-delay="0.1s"
            id="blue_clr"
          >
            Bookings
          </h1>
          {data === "pending" ? (
        <UserViewPendingBookings />
      ) : data === "approved" ? (
        <UserViewApprovedBookings />
      ) : "" }
        </div>
      </div>
    </div>
  )
}

export default UserViewBookings
