/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const [data, setData] = useState({
    users: 0,
    detail_users: 0,
    categories: 0,
    competitions: 0,
    registrations: 0,
  });

  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/dashboard", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("API Response:", response.data);
        setData(response.data.data); // Pastikan data dari API cocok dengan state
      })
      .catch((error) => {
        console.error("Error fetching data:", error.response || error);
      });
  }, []);

  const cards = [
    {
      title: "User",
      icon: "fa-users",
      color: "bg-blue-500",
      count: data.users,
      link: "/user",
    },
    {
      title: "Detail User",
      icon: "fa-user-circle",
      color: "bg-green-500",
      count: data.detail_users,
      link: "/detail-user",
    },
    {
      title: "Competition",
      icon: "fa-trophy",
      color: "bg-yellow-500",
      count: data.competitions,
      link: "/competition",
    },
    {
      title: "Registration",
      icon: "fa-clipboard-list",
      color: "bg-red-500",
      count: data.registrations,
      link: "/registration",
    },
    {
      title: "Category",
      icon: "fa-tags",
      color: "bg-purple-500",
      count: data.categories,
      link: "/category",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
        Admin Dashboard
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex flex-col justify-between p-6 rounded-lg shadow-lg ${card.color} text-white`}
          >
            <div className="flex items-center">
              <div className="text-4xl mr-4">
                <i className={`fas ${card.icon}`}></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="text-lg font-bold">{card.count}</p>
              </div>
            </div>
            <Link
              to={card.link}
              className="mt-4 inline-block text-sm font-medium bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200"
            >
              View Detail
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
