import React, { useState } from "react";
import movies from "../constant/movies";

const SeatLayout = () => {
  const rows = ["A", "B", "C", "D", "E", "F", "G"];
  const columns = [{ range: [1, 6] }, { range: [7, 16] }, { range: [17, 22] }];

  const totalSeats = columns.reduce(
    (acc, col) => acc + (col.range[1] - col.range[0] + 1),
    0
  );

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedMovie, setSelectedMovie] = useState("");

  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const clearSelection = () => {
    setSelectedSeats([]);
  };

  const pricePerSeat = 10;
  const totalCost = selectedSeats.length * pricePerSeat;

  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row text-white mt-14 mb-14 gap-2">
        {/* Seat Layout Section */}
        <div className="flex flex-col gap-3 overflow-x-auto whitespace-nowrap m-5">

          <div className="mb-4 flex gap-4">
            <div className="flex-1">
              <label className="block text-black font-bold mb-2">
                Select Date:
              </label>
              <input
                type="date"
                className="p-2 border rounded text-black"
                value={selectedDate}
                min={new Date().toISOString().split("T")[0]}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </div>

            {/* Time Filter */}
            <div className="flex-1">
              <label className="block text-black font-bold mb-2">
                Select Time:
              </label>
              <select
                className="p-2 border rounded text-black w-full"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              >
                <option value="10:30 AM">10:30 AM</option>
                <option value="1:00 PM">1:00 PM</option>
                <option value="4:30 PM">4:30 PM</option>
                <option value="7:30 PM">7:30 PM</option>
              </select>
            </div>

            {/* Movie Filter */}
            <div className="flex-1">
              <label className="block text-black font-bold mb-2">
                Select Film:
              </label>
              <select
                className="p-2 border rounded text-black w-full"
                value={selectedMovie}
                onChange={(e) => setSelectedMovie(e.target.value)}
              >
                <option value="">Select Movie</option>
                {movies.map((movie) => (
                  <option key={movie.id} value={movie.title}>
                    {movie.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {rows.map((row) => (
            <div key={row} className="flex gap-8">
              {columns.map((col, colIndex) => (
                <div key={colIndex} className="flex gap-2">
                  {Array.from(
                    { length: col.range[1] - col.range[0] + 1 },
                    (_, i) => {
                      const seat = `${row}${col.range[0] + i}`;
                      return (
                        <div
                          key={seat}
                          onClick={() => handleSeatClick(seat)}
                          className={`w-6 h-6 lg flex items-center justify-center border rounded-md cursor-pointer ${
                            selectedSeats.includes(seat)
                              ? "bg-red-500 text-white"
                              : "bg-gray-200 text-gray-800"
                          }`}
                          style={{ fontSize: "0.7rem" }}
                        >
                          {seat}
                        </div>
                      );
                    }
                  )}
                </div>
              ))}
            </div>
          ))}

          <div
            className="bg-gray-400 text-center text-black font-bold py-2 mb-8 rounded ml-5 mt-10"
            style={{
              width: `${
                columns.reduce(
                  (acc, col) => acc + (col.range[1] - col.range[0] + 1),
                  0
                ) * 2
              }rem`,
            }}
          >
            SCREEN
          </div>
        </div>

        {/* Booking Section */}
        <div className="w-full lg:w-1/4 bg-white p-8 rounded shadow mr-8 md:ml-auto h-auto">
          <h2 className="text-2xl font-bold mb-4 text-black text-center">
            Seat Booking
          </h2>

          <div className="mb-7">
            <div className="flex justify-between mb-3">
              <p className="font-semibold text-black">Selected Date:</p>
              <p className="font-semibold text-black">
                {selectedDate || "None"}
              </p>
            </div>
            <div className="flex justify-between mb-3">
              <p className="font-semibold text-black">Selected Time:</p>
              <p className="font-semibold text-black">
                {selectedTime || "None"}
              </p>
            </div>
            <div className="flex justify-between mb-3">
              <p className="font-semibold text-black">Selected Movie:</p>
              <p className="font-semibold text-black">
                {selectedMovie || "None"}
              </p>
            </div>
            <div className="flex justify-between mb-3">
              <p className="font-semibold text-black">Selected Seats:</p>
              <p className="font-semibold text-black">
                {selectedSeats.join(", ") || "None"}
              </p>
            </div>
            <div className="flex justify-between mt-2 mb-3">
              <p className="font-semibold text-black">Price per Seat:</p>
              <p className="font-semibold text-black">${pricePerSeat}</p>
            </div>
            <div className="flex justify-between mt-2 mb-3">
              <p className="font-semibold text-black">Total Cost:</p>
              <p className="font-semibold text-black">${totalCost}</p>
            </div>
          </div>

          <button
            className={`w-full py-2 rounded mb-2 ${
              selectedSeats.length
                ? "bg-pink-600 text-white cursor-pointer"
                : "bg-blue-200 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!selectedSeats.length}
          >
            Book Seats
          </button>

          <button
            onClick={clearSelection}
            className={`w-full py-2 rounded ${
              selectedSeats.length
                ? "bg-red-500 text-white cursor-pointer"
                : "bg-red-300 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!selectedSeats.length}
          >
            Clear Selection
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeatLayout;
