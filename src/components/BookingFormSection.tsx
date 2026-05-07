import BookingForm from "./BookingForm";

export default function BookingFormSection() {
  return (
    <div id="booking-form" className="border-t border-gray-100" style={{ backgroundColor: "#FAFAFA" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <BookingForm />
      </div>
    </div>
  );
}
