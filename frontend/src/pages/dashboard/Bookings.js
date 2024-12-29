import { useState } from "react";

const bookings = [
  {
    id: 1,
    cusName: "John Doe",
    cusEmail: "johndoe@example.com",
    cusPhone: "+1 234 567 890",
    movie: "Avengers: Endgame",
    bookingDate: "2024-12-01",
    showTime: "2024-12-15 7:00 PM",
    paymentStatus: "Paid",
    tickets: 2,
    totalAmount: "$30",
    seatNumbers: ["A5", "A6"],
  },
  {
    id: 2,
    cusName: "Jane Smith",
    cusEmail: "janesmith@example.com",
    cusPhone: "+1 987 654 321",
    movie: "The Batman",
    bookingDate: "2024-12-03",
    showTime: "2024-12-20 5:00 PM",
    paymentStatus: "Pending",
    tickets: 4,
    totalAmount: "$60",
    seatNumbers: ["B12", "B13", "B14", "B15"],
  },
  {
    id: 3,
    cusName: "Mark Johnson",
    cusEmail: "markj@example.com",
    cusPhone: "+1 555 123 456",
    movie: "Interstellar",
    bookingDate: "2024-12-04",
    showTime: "2024-12-18 8:00 PM",
    paymentStatus: "Paid",
    tickets: 1,
    totalAmount: "$15",
    seatNumbers: ["C7"],
  },
  {
    id: 4,
    cusName: "Emma Davis",
    cusEmail: "emmad@example.com",
    cusPhone: "+1 321 654 987",
    movie: "Inception",
    bookingDate: "2024-12-05",
    showTime: "2024-12-22 9:00 PM",
    paymentStatus: "Cancelled",
    tickets: 3,
    totalAmount: "$45",
    seatNumbers: ["D1", "D2", "D3"],
  },
  {
    id: 5,
    cusName: "Chris Lee",
    cusEmail: "chrislee@example.com",
    cusPhone: "+1 777 888 999",
    movie: "Titanic",
    bookingDate: "2024-12-06",
    showTime: "2024-12-25 6:00 PM",
    paymentStatus: "Paid",
    tickets: 2,
    totalAmount: "$30",
    seatNumbers: ["E20", "E21"],
  },
];

function Bookings() {
  const [filter, setFilter] = useState("");

  const filteredBookings = bookings.filter(
    (booking) =>
      booking.cusName.toLowerCase().includes(filter.toLowerCase()) ||
      booking.movie.toLowerCase().includes(filter.toLowerCase()) ||
      booking.paymentStatus.toLowerCase().includes(filter.toLowerCase())
  );

  const getPaymentStatusColor = (status) => {
    switch (status) {
      case "Paid":
        return "bg-green-500 text-white";
      case "Pending":
        return "bg-yellow-500 text-white";
      case "Cancelled":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="overflow-x-auto text-black">
      <div className="text-xl pb-4 text-center text-black">Movie Bookings</div>

      <div className="pb-4">
        <input
          type="text"
          placeholder="Search by Name, Movie or Status"
          className="input input-bordered border-gray-400 m-2 w-full max-w-xs text-sm"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <table className="table table-xs sm:table-md text-black over">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Movie</th>
            <th>Booking Date</th>
            <th>Show Time</th>
            <th>Payment Status</th>
            <th>Tickets</th>
            <th>Seat Numbers</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredBookings.map((booking) => (
            <tr key={booking.id}>
              <th>{booking.id}</th>
              <td>{booking.cusName}</td>
              <td>{booking.cusEmail}</td>
              <td>{booking.cusPhone}</td>
              <td>{booking.movie}</td>
              <td>{booking.bookingDate}</td>
              <td>{booking.showTime}</td>
              <td className={`${getPaymentStatusColor(booking.paymentStatus)}`}>
                {booking.paymentStatus}
              </td>
              <td>{booking.tickets}</td>
              <td>{booking.seatNumbers.join(", ")}</td>
              <td>{booking.totalAmount}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>ID</th>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Movie</th>
            <th>Booking Date</th>
            <th>Show Time</th>
            <th>Payment Status</th>
            <th>Tickets</th>
            <th>Seat Numbers</th>
            <th>Total Amount</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Bookings;
