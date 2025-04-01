"use client";

export default function ReservationSection() {
  return (
    <section className="bg-lightpistachio text-olive px-6 md:px-20 py-32">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif font-bold">Make a Reservation</h2>
        <p className="text-gray-600 mt-2">
          Book your table and enjoy authentic Italian cuisine
        </p>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-4xl mx-auto"
      >
        <input
          type="date"
          className="border border-gray-300 px-4 py-3 rounded-md w-full md:w-auto"
          required
        />
        <select
          className="border border-gray-300 px-4 py-3 rounded-md w-full md:w-auto"
          required
        >
          <option value="">Select time</option>
          <option value="18:00">6:00 PM</option>
          <option value="19:00">7:00 PM</option>
          <option value="20:00">8:00 PM</option>
          <option value="21:00">9:00 PM</option>
        </select>
        <select
          className="border border-gray-300 px-4 py-3 rounded-md w-full md:w-auto"
          required
        >
          <option value="">2 Guests</option>
          <option value="1">1 Person</option>
          <option value="2">2 People</option>
          <option value="3">3 People</option>
          <option value="4">4+ People</option>
        </select>

        <button
          type="submit"
          className="bg-olive text-white cursor-pointer font-semibold px-6 py-3 rounded-md hover:bg-opacity-90 transition"
        >
          Book Now
        </button>
      </form>
    </section>
  );
}
