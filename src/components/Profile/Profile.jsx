import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext/AuthContext";

export default function Profile() {
  const { userData, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  //  if (!isLoggedIn) {
  //     navigate("/login");
  //   }
  if (!userData) return null; // or show a loading spinner

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-orange-600 mb-4">Profile</h2>
        <p><strong>Name:</strong> {userData.name || "N/A"}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Phone:</strong> {userData.phone || "Not Provided"}</p>
        {/* Add more fields if available */}
      </div>
    </div>
  );
}
