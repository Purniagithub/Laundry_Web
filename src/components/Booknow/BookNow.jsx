import React, { useState } from "react";

const clothingItems = [
  "Shirt",
  "Trousers",
  "T-Shirt",
  "Jeans",
  "Kurti",
  "Saree",
  "Bedsheet",
  "Pillow Cover",
  "Blanket",
  "Jacket",
  // You can keep or remove these if only booking by service later
];

const serviceOptions = {
  "Wash Only": 20,
  "Iron": 15,
  "Wash & Iron": 30,
  "Dry Clean": 50,
};

export default function LaundryBookingForm() {
  const [rows, setRows] = useState([{ item: "", count: 1, service: "Wash Only" }]);
  const [formDetails, setFormDetails] = useState({
    fullName: "",
    contactNo: "",
    address: "",
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = field === "count" ? parseInt(value) : value;
    setRows(updatedRows);
  };

  const handleFormDetailChange = (field, value) => {
    setFormDetails({ ...formDetails, [field]: value });
  };

  const addRow = () => {
    setRows([...rows, { item: "", count: 1, service: "Wash Only" }]);
  };

  const removeRow = (index) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };

  const calculateTotal = () => {
    return rows.reduce((total, row) => {
      const rate = serviceOptions[row.service] || 0;
      return total + rate * row.count;
    }, 0);
  };

  const handleSubmit = () => {
    if (!formDetails.fullName || !formDetails.contactNo || !formDetails.address) {
      alert("Please fill out all customer details.");
      return;
    }
    if (rows.some((row) => !row.service)) {
      alert("Please select a service for each row.");
      return;
    }
    setShowConfirmation(true);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto bg-white rounded-xl shadow-lg border">
      <h2 className="text-2xl font-bold text-orange-700 mb-6 text-center">
        Laundry Booking Form
      </h2>

      {/* Customer Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <input
          type="text"
          placeholder="Full Name"
          value={formDetails.fullName}
          onChange={(e) => handleFormDetailChange("fullName", e.target.value)}
          className="border p-3 rounded w-full focus:outline-orange-500"
        />
        <input
          type="tel"
          placeholder="Contact No"
          value={formDetails.contactNo}
          onChange={(e) => handleFormDetailChange("contactNo", e.target.value)}
          className="border p-3 rounded w-full focus:outline-orange-500"
        />
        <textarea
          placeholder="Address"
          value={formDetails.address}
          onChange={(e) => handleFormDetailChange("address", e.target.value)}
          className="border p-3 rounded w-full sm:col-span-2 resize-none focus:outline-orange-500"
          rows="3"
        />
      </div>

      {/* Booking Rows */}
      {rows.map((row, index) => (
        <div
          key={index}
          className="grid grid-cols-1 sm:grid-cols-5 gap-3 items-center mb-4 p-4 border rounded-md bg-gray-50"
        >
          {/* For normal laundry items */}
          <select
            value={row.item}
            onChange={(e) => handleChange(index, "item", e.target.value)}
            className="border p-2 rounded w-full"
            disabled={["Shoe Cleaning", "Car Cleaning", "Home Cleaning", "Bathroom Cleaning", "Kitchen Cleaning", "Bedroom Cleaning"].includes(row.service)}
          >
            <option value="">Select Item</option>
            {clothingItems.map((item, i) => (
              <option key={i} value={item}>
                {item}
              </option>
            ))}
          </select>

          <input
            type="number"
            min="1"
            value={row.count}
            onChange={(e) => handleChange(index, "count", e.target.value)}
            className="border p-2 rounded w-full"
            disabled={["Shoe Cleaning", "Car Cleaning", "Home Cleaning", "Bathroom Cleaning", "Kitchen Cleaning", "Bedroom Cleaning"].includes(row.service)}
          />

          {/* Service dropdown with new options */}
          <select
            value={row.service}
            onChange={(e) => handleChange(index, "service", e.target.value)}
            className="border p-2 rounded w-full"
          >
            {Object.keys(serviceOptions).map((service, i) => (
              <option key={i} value={service}>
                {service}
              </option>
            ))}
          </select>

          <div className="text-sm font-semibold text-center text-gray-800">
            ₹{(serviceOptions[row.service] || 0) * row.count}
          </div>

          <button
            onClick={() => removeRow(index)}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition"
          >
            Remove
          </button>
        </div>
      ))}

      <button
        onClick={addRow}
        className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded mt-4"
      >
        + Add Item
      </button>

      <div className="mt-6 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">
          Total Cost: ₹{calculateTotal()}
        </div>
        <button
          onClick={handleSubmit}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow"
        >
          Confirm Booking
        </button>
      </div>

      {/* Confirmation Summary */}
      {showConfirmation && (
        <div className="mt-8 bg-green-50 border border-green-300 p-6 rounded-lg shadow-inner">
          <h3 className="text-xl font-bold text-green-700 mb-4">Booking Confirmed!</h3>
          <p>
            <strong>Name:</strong> {formDetails.fullName}
          </p>
          <p>
            <strong>Contact No:</strong> {formDetails.contactNo}
          </p>
          <p>
            <strong>Address:</strong> {formDetails.address}
          </p>

          <h4 className="mt-4 font-semibold">Service Details:</h4>
          <ul className="list-disc list-inside">
            {rows.map((row, idx) => (
              <li key={idx}>
                {row.count} x {row.item || row.service} - {row.service} (₹
                {serviceOptions[row.service]} each)
              </li>
            ))}
          </ul>

          <p className="mt-4 font-bold text-lg">Total Amount: ₹{calculateTotal()}</p>
        </div>
      )}
    </div>
  );
}
