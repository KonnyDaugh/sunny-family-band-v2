import Container from "@/components/ui/Container";
import BookingFields from "@/components/ui/BookingFields";

export default function Booking() {
  return (
    <section
      id="booking"
      aria-labelledby="booking-heading"
      className="py-12 lg:py-16"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <div>
            <p className="text-xs uppercase tracking-[0.2em]">
              Your event
            </p>

            <h2
              id="booking-heading"
              className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Let’s make it a musical one.
            </h2>

            <p className="mt-6 max-w-md text-lg leading-relaxed">
              Planning an intimate gathering, a wedding or a lively
              celebration? Tell us what you have in mind.
            </p>

            <p className="mt-4 max-w-md leading-relaxed">
              You don’t need to have every detail worked out.
              We’ll help you find the right musical format for your event.
            </p>
          </div>

          <form
            aria-labelledby="booking-heading"
            className="min-w-0 rounded-2xl border border-border p-6 sm:p-8"
          >
            <p className="mb-6 text-sm">
              Fields marked with * are required.
            </p>

            <BookingFields />

            <button
              type="button"
              disabled
              className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
            >
              Send enquiry
            </button>

            <p className="mt-3 text-sm">
              Sending is not available yet.
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}