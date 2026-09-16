"use client";

import { programs } from "@/data/programs";
import { useBooking } from "@/components/booking/BookingProvider";

const fieldClassName =
  "mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-base text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

export default function BookingFields() {
  const { selectedProgram, selectProgram } = useBooking();

  return (
    <div className="grid gap-5 sm:grid-cols-2">
        <div hidden aria-hidden="true">
            <label htmlFor="booking-website">
                Leave this field empty
            </label>

            <input
                id="booking-website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
            />
        </div>
      <div>
        <label htmlFor="booking-name" className="text-sm font-semibold">
          Your name *
        </label>

        <input
          id="booking-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          maxLength={100}
          className={fieldClassName}
        />
      </div>

      <div>
        <label htmlFor="booking-email" className="text-sm font-semibold">
          Email *
        </label>

        <input
          id="booking-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={254}
          className={fieldClassName}
        />
      </div>

      <div>
        <label htmlFor="booking-date" className="text-sm font-semibold">
          Event date
        </label>

        <input
          id="booking-date"
          name="date"
          type="date"
          className={fieldClassName}
        />
      </div>

      <div>
        <label htmlFor="booking-location" className="text-sm font-semibold">
          Venue or city
        </label>

        <input
          id="booking-location"
          name="location"
          type="text"
          maxLength={200}
          className={fieldClassName}
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="booking-program" className="text-sm font-semibold">
          Performance format
        </label>

        <select
          id="booking-program"
          name="program"
          value={selectedProgram}
          onChange={(event) => selectProgram(event.target.value)}
          className={fieldClassName}
        >
          <option value="">Help me choose</option>

          {programs.map((program) => (
            <option key={program.id} value={program.id}>
              {program.title}
            </option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="booking-message" className="text-sm font-semibold">
          Tell us about your event
        </label>

        <textarea
          id="booking-message"
          name="message"
          rows={5}
          maxLength={3000}
          placeholder="The occasion, your guests and the atmosphere you have in mind…"
          className={`${fieldClassName} resize-y`}
        />
      </div>
    </div>
  );
}