import React from "react";
import { useForm } from "react-hook-form";

export default function MovieForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center bg-secondary p-6 rounded-lg shadow-lg max-w-xl w-full text-white mb-8">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="mb-4">
            <label htmlFor="movieTitle" className="block mb-1">
              Movie Title
            </label>
            <input
              id="movieTitle"
              type="text"
              placeholder="Enter movie title"
              {...register("Movie Title", { required: true })}
              className="input input-bordered w-full bg-gray-200 text-black"
            />
            {errors["Movie Title"] && (
              <p className="text-red-500 text-sm">Movie Title is required.</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="genre" className="block mb-1">
              Genre
            </label>
            <select
              id="genre"
              {...register("Genre", { required: true })}
              className="select select-bordered w-full bg-gray-200 text-black"
            >
              <option value="Action">Action</option>
              <option value="Comedy">Comedy</option>
              <option value="Drama">Drama</option>
              <option value="Horror">Horror</option>
              <option value="Romance">Romance</option>
              <option value="Science Fiction">Science Fiction</option>
              <option value="Thriller">Thriller</option>
            </select>
            {errors["Genre"] && (
              <p className="text-red-500 text-sm">Genre is required.</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="dateRange" className="block mb-1">
              Date Range
            </label>
            <div className="flex space-x-4">
              <input
                id="startDate"
                type="date"
                {...register("Start Date", { required: true })}
                className="input input-bordered w-full bg-gray-200 text-black"
              />
              <span>to</span>
              <input
                id="endDate"
                type="date"
                {...register("End Date", { required: true })}
                className="input input-bordered w-full bg-gray-200 text-black"
              />
            </div>
            {errors["Start Date"] && (
              <p className="text-red-500 text-sm">Start Date is required.</p>
            )}
            {errors["End Date"] && (
              <p className="text-red-500 text-sm">End Date is required.</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="showTime" className="block mb-1">
              Show Time
            </label>
            <select
              id="showTime"
              {...register("Show Time", { required: true })}
              className="select select-bordered w-full bg-gray-200 text-black"
            >
              <option value="10:30 AM">10:30 AM</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="4:30 PM">4:30 PM</option>
              <option value="7:30 PM">7:30 PM</option>
            </select>
            {errors["Show Time"] && (
              <p className="text-red-500 text-sm">Show Time is required.</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="ticketPrice" className="block mb-1">
              Ticket Price
            </label>
            <input
              id="ticketPrice"
              type="number"
              placeholder="Enter ticket price"
              {...register("Ticket Price", { required: true, min: 0 })}
              className="input input-bordered w-full bg-gray-200 text-black"
            />
            {errors["Ticket Price"] && (
              <p className="text-red-500 text-sm">
                Ticket Price is required and must be a positive number.
              </p>
            )}
          </div>

          
          <div className="mb-4">
            <label htmlFor="coverImage" className="block mb-1">
              Cover Image
            </label>
            <input
              id="coverImage"
              type="file"
              {...register("Cover Image", { required: true })}
              className="input input-bordered w-full bg-gray-200 text-black"
            />
            {errors["Cover Image"] && (
              <p className="text-red-500 text-sm">Cover Image is required.</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="posterImage" className="block mb-1">
              Poster Image
            </label>
            <input
              id="posterImage"
              type="file"
              {...register("Poster Image", { required: true })}
              className="input input-bordered w-full bg-gray-200 text-black"
            />
            {errors["Poster Image"] && (
              <p className="text-red-500 text-sm">Poster Image is required.</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="imdbUrl" className="block mb-1">
              IMDb URL
            </label>
            <input
              id="imdbUrl"
              type="url"
              placeholder="Enter IMDb URL"
              {...register("IMDb URL")}
              className="input input-bordered w-full bg-gray-200 text-black"
            />
          </div>

          <button
            type="submit"
            className="btn btn-block bg-primary text-white hover:bg-gray-800 border-none mt-5"
          >
            Add Movie
          </button>
        </form>
      </div>
    </div>
  );
}
