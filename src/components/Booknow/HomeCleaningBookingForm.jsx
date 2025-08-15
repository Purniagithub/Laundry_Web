import React, { useState } from "react";

const subServices = [
  { label: "Kitchen Cleaning", rate: 300 },
  { label: "Bathroom Cleaning", rate: 250 },
  { label: "Bedroom Cleaning", rate: 350 },
  { label: "Living Room Cleaning", rate: 400 },
];

export default function HomeCleaningBookingForm() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [formDetails, setFormDetails] = useState({
    fullName: "",
    contactNo: "",
    address: "",
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const toggleService = (label) => {
    setSelectedServices((prev) =>
      prev.includes(label) ? prev.filter((s) => s !== label) : [...prev, label]
    );
  };

  const calculateTotal = () =>
    selectedServices.reduce(
      (total, label) =>
        total + (subServices.find((s) => s.label === label)?.rate || 0),
      0
    );

  const handleSubmit = () => {
    if (!formDetails.fullName || !formDetails.contactNo || !formDetails.address) {
      alert("Please fill all details.");
      return;
    }
    if (selectedServices.length === 0) {
      alert("Please select at least one service.");
      return;
    }
    setShowConfirmation(true);
  };

  return (
    <div className="p-8 max-w-3xl mx-auto bg-white rounded-xl shadow-lg border">
      <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">Home Cleaning Booking</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <input type="text" placeholder="Full Name" value={formDetails.fullName}
          onChange={(e) => setFormDetails({ ...formDetails, fullName: e.target.value })}
          className="border p-3 rounded w-full focus:outline-green-500" />
        <input type="tel" placeholder="Contact No" value={formDetails.contactNo}
          onChange={(e) => setFormDetails({ ...formDetails, contactNo: e.target.value })}
          className="border p-3 rounded w-full focus:outline-green-500" />
        <textarea placeholder="Address" rows="3" value={formDetails.address}
          onChange={(e) => setFormDetails({ ...formDetails, address: e.target.value })}
          className="border p-3 rounded w-full sm:col-span-2 resize-none focus:outline-green-500" />
      </div>

      <div className="mb-6 grid gap-4 grid-cols-1 sm:grid-cols-2">
        {subServices.map(({ label, rate }) => (
          <div key={label}
            className={`cursor-pointer p-4 border rounded-md ${
              selectedServices.includes(label)
                ? "bg-green-100 border-green-400"
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
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded">
          Confirm Booking
        </button>
      </div>

      {showConfirmation && (
        <div className="mt-8 p-6 border border-green-300 bg-green-50 rounded-lg">
          <h3 className="text-xl font-bold mb-3 text-green-800">Booking Confirmed!</h3>
          <p><strong>Name:</strong> {formDetails.fullName}</p>
          <p><strong>Contact:</strong> {formDetails.contactNo}</p>
          <p><strong>Address:</strong> {formDetails.address}</p>
          <h4 className="mt-4 font-semibold">Selected Services:</h4>
          <ul className="list-disc list-inside">
            {selectedServices.map((s, i) => (
              <li key={i}>{s} - ₹{subServices.find((x) => x.label === s).rate}</li>
            ))}
          </ul>
          <p className="mt-4 font-bold text-lg">Total: ₹{calculateTotal()}</p>
        </div>
      )}
    </div>
  );
}
