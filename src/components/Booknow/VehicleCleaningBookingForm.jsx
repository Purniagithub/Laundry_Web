import React, { useState } from "react";

const vehicleServices = [
  { label: "Bike Cleaning", rate: 150 },
  { label: "Car Exterior Cleaning", rate: 400 },
  { label: "Car Interior Cleaning", rate: 300 },
  { label: "Full Car Cleaning", rate: 650 },
];

export default function VehicleCleaningBookingForm() {
  const [selected, setSelected] = useState([]);
  const [formDetails, setFormDetails] = useState({
    fullName: "",
    contactNo: "",
    address: "",
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const toggleService = (label) => {
    setSelected((prev) =>
      prev.includes(label) ? prev.filter((s) => s !== label) : [...prev, label]
    );
  };

  const calculateTotal = () =>
    selected.reduce(
      (total, label) =>
        total + (vehicleServices.find((s) => s.label === label)?.rate || 0),
      0
    );

  const handleSubmit = () => {
    if (!formDetails.fullName || !formDetails.contactNo || !formDetails.address) {
      alert("Please complete all fields.");
      return;
    }
    if (selected.length === 0) {
      alert("Select at least one cleaning service.");
      return;
    }
    setShowConfirmation(true);
  };

  return (
    <div className="p-8 max-w-3xl mx-auto bg-white rounded-xl shadow-lg border">
      <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Vehicle Cleaning Booking</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <input type="text" placeholder="Full Name" value={formDetails.fullName}
          onChange={(e) => setFormDetails({ ...formDetails, fullName: e.target.value })}
          className="border p-3 rounded w-full focus:outline-blue-500" />
        <input type="tel" placeholder="Contact No" value={formDetails.contactNo}
          onChange={(e) => setFormDetails({ ...formDetails, contactNo: e.target.value })}
          className="border p-3 rounded w-full focus:outline-blue-500" />
        <textarea placeholder="Address" rows="3" value={formDetails.address}
          onChange={(e) => setFormDetails({ ...formDetails, address: e.target.value })}
          className="border p-3 rounded w-full sm:col-span-2 resize-none focus:outline-blue-500" />
      </div>

      <div className="mb-6 grid gap-4 grid-cols-1 sm:grid-cols-2">
        {vehicleServices.map(({ label, rate }) => (
          <div key={label}
            className={`cursor-pointer p-4 border rounded-md ${
              selected.includes(label)
                ? "bg-blue-100 border-blue-400"
                : "bg-gray-50"
            }`}
            onClick={() => toggleService(label)}>
            <div className="font-medium">{label}</div>
            <div className="text-sm text-gray-600">₹{rate}</div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-6">
        <div className="text-xl font-semibold">Total: ₹{calculateTotal()}</div>
        <button onClick={handleSubmit}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
          Confirm Booking
        </button>
      </div>

      {showConfirmation && (
        <div className="mt-8 p-6 border border-blue-300 bg-blue-50 rounded-lg">
          <h3 className="text-xl font-bold mb-3 text-blue-800">Booking Confirmed!</h3>
          <p><strong>Name:</strong> {formDetails.fullName}</p>
          <p><strong>Contact:</strong> {formDetails.contactNo}</p>
          <p><strong>Address:</strong> {formDetails.address}</p>
          <h4 className="mt-4 font-semibold">Selected Services:</h4>
          <ul className="list-disc list-inside">
            {selected.map((s, i) => (
              <li key={i}>{s} - ₹{vehicleServices.find((x) => x.label === s).rate}</li>
            ))}
          </ul>
          <p className="mt-4 font-bold text-lg">Total: ₹{calculateTotal()}</p>
        </div>
      )}
    </div>
  );
}
